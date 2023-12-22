import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ConnUserWithTaxiService } from './conn-user-with-taxi.service';
import { CreateConnUserWithTaxiDto } from './dto/create-conn-user-with-taxi.dto';
import { UpdateConnUserWithTaxiDto } from './dto/update-conn-user-with-taxi.dto';
import { FindAllConDto } from './dto/findAllConDto';

@Controller('conn-user-with-taxi')
export class ConnUserWithTaxiController {
  constructor(private readonly connUserWithTaxiService: ConnUserWithTaxiService) {}

  @Post()
  create(@Body() createConnUserWithTaxiDto: CreateConnUserWithTaxiDto) {
    return this.connUserWithTaxiService.create(createConnUserWithTaxiDto);
  }

  @Get()
  findAll(@Query()findAllConDto:FindAllConDto) {
    return this.connUserWithTaxiService.findAll(findAllConDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connUserWithTaxiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConnUserWithTaxiDto: UpdateConnUserWithTaxiDto) {
    return this.connUserWithTaxiService.update(+id, updateConnUserWithTaxiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connUserWithTaxiService.remove(+id);
  }
}
