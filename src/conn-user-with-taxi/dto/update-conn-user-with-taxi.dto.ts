import { PartialType } from '@nestjs/swagger';
import { CreateConnUserWithTaxiDto } from './create-conn-user-with-taxi.dto';

export class UpdateConnUserWithTaxiDto extends PartialType(CreateConnUserWithTaxiDto) {}
