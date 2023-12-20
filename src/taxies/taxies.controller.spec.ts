import { Test, TestingModule } from '@nestjs/testing';
import { TaxiesController } from './taxies.controller';
import { TaxiesService } from './taxies.service';

describe('TaxiesController', () => {
  let controller: TaxiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxiesController],
      providers: [TaxiesService],
    }).compile();

    controller = module.get<TaxiesController>(TaxiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
