import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TaxiesService } from './taxies.service';
import { CreateTaxyDto } from './dto/create-taxy.dto';
import { UpdateTaxyDto } from './dto/update-taxy.dto';
import { FindAllTaxiDto } from './dto/findAllTaxiDto';

@Controller('taxies')
export class TaxiesController {
  constructor(private readonly taxiesService: TaxiesService) {}

  @Post()
  create(@Body() createTaxyDto: CreateTaxyDto) {
    return this.taxiesService.create(createTaxyDto);
  }

  @Get()
  findAll(@Query() findAllTaxiDto:FindAllTaxiDto) {
    return this.taxiesService.findAll(findAllTaxiDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxyDto: UpdateTaxyDto) {
    return this.taxiesService.update(+id, updateTaxyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxiesService.remove(+id);
  }
}
