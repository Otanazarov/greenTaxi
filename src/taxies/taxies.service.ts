import { Injectable } from '@nestjs/common';
import { CreateTaxyDto } from './dto/create-taxy.dto';
import { UpdateTaxyDto } from './dto/update-taxy.dto';

@Injectable()
export class TaxiesService {
  create(createTaxyDto: CreateTaxyDto) {
    return 'This action adds a new taxy';
  }

  findAll() {
    return `This action returns all taxies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxy`;
  }

  update(id: number, updateTaxyDto: UpdateTaxyDto) {
    return `This action updates a #${id} taxy`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxy`;
  }
}
