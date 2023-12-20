import { PartialType } from '@nestjs/swagger';
import { CreateTaxyDto } from './create-taxy.dto';

export class UpdateTaxyDto extends PartialType(CreateTaxyDto) {}
