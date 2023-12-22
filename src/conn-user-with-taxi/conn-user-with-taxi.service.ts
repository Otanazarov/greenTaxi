import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateConnUserWithTaxiDto } from './dto/create-conn-user-with-taxi.dto';
import { UpdateConnUserWithTaxiDto } from './dto/update-conn-user-with-taxi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ConnUserWithTaxi } from './entities/conn-user-with-taxi.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Taxy } from 'src/taxies/entities/taxy.entity';
import { FindAllConDto } from './dto/findAllConDto';
import { Pagination } from 'src/common/util/pagination';
import { ApiResponse } from 'src/common/http/ApiResponse';

@Injectable()
export class ConnUserWithTaxiService {
  constructor(
    @InjectRepository(ConnUserWithTaxi) private readonly connectRepo: Repository<ConnUserWithTaxi>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Taxy) private readonly taxyRepo: Repository<Taxy>
  ){}
 async  create(createConnUserWithTaxiDto: CreateConnUserWithTaxiDto) {
    const {latitude,longitude,taxy,user,userPhoneNumber} = createConnUserWithTaxiDto
    const userVerify = await this.userRepo.findOneBy({id:user})
    const taxyVerify = await this.taxyRepo.findOneBy({id:taxy})
    if(!userVerify){
      throw new BadRequestException(`user not found`)
    }
    if(!taxyVerify){
      throw new BadRequestException(`taxi not found`)
    }
    const result = await this.connectRepo.create({latitude,longitude,user:userVerify,taxy:taxyVerify,userPhoneNumber})
    this.connectRepo.save(result)
  }

  async findAll(findAllConDto:FindAllConDto) {
    try {
      const totalPageCount = await this.connectRepo.count();
      const {limit,page} = findAllConDto
      const pagination = new Pagination(limit, page, totalPageCount);
      const posts = await this.connectRepo.find({
        take: pagination.limit,
        skip: pagination.offset,
      });
      return new ApiResponse(posts, pagination);
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} connUserWithTaxi`;
  }

  update(id: number, updateConnUserWithTaxiDto: UpdateConnUserWithTaxiDto) {
    return `This action updates a #${id} connUserWithTaxi`;
  }

  remove(id: number) {
    return `This action removes a #${id} connUserWithTaxi`;
  }
}
