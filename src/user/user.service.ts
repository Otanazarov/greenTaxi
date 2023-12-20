import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Pagination } from 'src/common/util/pagination';
import { ApiResponse } from 'src/common/http/ApiResponse';
import { FindAllUserDto } from './dto/findAllUserDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ){}
  async create(createUserDto: CreateUserDto) {
    const {email,name,password} = createUserDto
    const emailVerify = await this.userRepo.findOneBy({email:email})
    if(emailVerify){
      throw new BadRequestException(`email already taken`)
    }
    const hash = await bcrypt.hash(createUserDto.password,1)
    const user = this.userRepo.create({email,name,password:hash});
    this.userRepo.save(user);
    return 'succes';
  }

  async findAll(findAllUserDto:FindAllUserDto) {
    try {
      const totalPageCount = await this.userRepo.count();
      const {limit,page} = findAllUserDto
      const pagination = new Pagination(limit, page, totalPageCount);
      const posts = await this.userRepo.find({
        take: pagination.limit,
        skip: pagination.offset,
      });
      return new ApiResponse(posts, pagination);
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepo.findOneBy({id:id})
      return new ApiResponse(user)
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepo.findOneBy({id})
      if (!user) {
        throw new BadRequestException(`ID not found`);
      }
      if(updateUserDto.email){
       const user = await this.userRepo.exist({where:{email:updateUserDto.email}})
       if(user){
        throw new BadRequestException(`user with email ${updateUserDto.email} already exists`)
       }
      }
      await this.userRepo.update({id},updateUserDto)
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      await this.userRepo.remove(
        await this.userRepo.findOneBy({ id: id }),
      );
      return { success: true };
    }
     catch (error) {
      throw error
    }
  }
}
