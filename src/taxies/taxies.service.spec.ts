import { Test, TestingModule } from '@nestjs/testing';
import { TaxiesService } from './taxies.service';

describe('TaxiesService', () => {
  let service: TaxiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxiesService],
    }).compile();

    service = module.get<TaxiesService>(TaxiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
