import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaxyDto } from './dto/create-taxy.dto';
import { UpdateTaxyDto } from './dto/update-taxy.dto';
import { Repository } from 'typeorm';
import { Taxy } from './entities/taxy.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllTaxiDto } from './dto/findAllTaxiDto';
import { Pagination } from 'src/common/util/pagination';
import { ApiResponse } from 'src/common/http/ApiResponse';


@Injectable()
export class TaxiesService {
  constructor(
    @InjectRepository(Taxy) private readonly taxiRepo: Repository<Taxy>
  ) {}
 async  create(createTaxyDto: CreateTaxyDto) {
    const {carNomer,carname,taxiName,taxiNomer} = createTaxyDto
    const taxy = this.taxiRepo.create({carname,taxiName,carNomer,taxiNomer})
    this.taxiRepo.save(taxy)
  }
async findAll(findAllTaxiDto:FindAllTaxiDto) {
    try {
      const totalPageCount = await this.taxiRepo.count();
      const {limit,page} = findAllTaxiDto
      const pagination = new Pagination(limit, page, totalPageCount);
      const posts = await this.taxiRepo.find({
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
      const taxi = await this.taxiRepo.findOneBy({id})
      return new ApiResponse(taxi)
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateTaxyDto: UpdateTaxyDto) {
    try {
      const verify = await this.taxiRepo.findOneBy({id})
      if(!verify){
        throw new BadGatewayException(`${id} id li taxisis yoq`)
      }
      const phoneVerify = await this.taxiRepo.findOneBy({taxiNomer:updateTaxyDto.taxiNomer})
      if(phoneVerify){
        throw new BadRequestException(`${updateTaxyDto.taxiNomer} already existe`)
      }
      const update = await this.taxiRepo.update({id},updateTaxyDto)
      return `success`
    } catch (error) {
      
    }
  }

  async remove(id: number) {  
    try {
      const verify = await this.taxiRepo.findOneBy({id})
      console.log(verify);
      if(!verify){
        throw new BadRequestException(`${id} not found`)
      }
      console.log(id);
      
      await this.taxiRepo.remove(
        await this.taxiRepo.findOneBy({ id: id }),
      );
    } catch (error) {
      throw error
    }
  }
}
