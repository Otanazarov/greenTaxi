import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Taxy } from 'src/taxies/entities/taxy.entity';
import { User } from 'src/user/entities/user.entity';
import { ManyToOne } from 'typeorm';

export class CreateConnUserWithTaxiDto {
  @IsString()
  @ApiProperty()
  latitude: string;

  @IsString()
  @ApiProperty()
  longitude: string;

  @IsString()
  @ApiProperty()
  userPhoneNumber: string;

  @IsNumber()
  @ApiProperty()
  taxy: number;

  @IsNumber()
  @ApiProperty()
  user: number;

  @IsString()
  @IsOptional()
  price: string;
}
