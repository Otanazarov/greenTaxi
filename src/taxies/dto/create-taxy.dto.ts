import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTaxyDto {
  @IsString()
  @ApiProperty()
  carname: string;

  @IsString()
  @ApiProperty()
  taxiName: string;

  @IsString()
  @ApiProperty()
  carNomer: string;

  @IsString()
  @ApiProperty()
  taxiNomer: string;
}
