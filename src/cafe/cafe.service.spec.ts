import { Test, TestingModule } from '@nestjs/testing';
import { CafeEntity } from './cafe.entity';
import { CafeService } from './cafe.service';

describe('CafeService', () => {
  let service: CafeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafeService],
    }).compile();

    service = module.get<CafeService>(CafeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should return a new cafe', async () => {
    const cafe: CafeEntity = {
      id: "",
      nombre: faker.company.companyName(),
      descripcion: faker.lorem.sentence(),
      precio: faker.datatype.number({ min: 0}),
      tiendas: [],
    }
 
    const newCafe: CafeEntity = await service.create(cafe);
    expect(newCafe).not.toBeNull();
 
    const storedCafe: CafeEntity = await repository.findOne({where: {id: newCafe.id}})
    expect(storedCafe).not.toBeNull();
    expect(storedCafe.nombre).toEqual(newCafe.name)
    expect(storedCafe.descripcion).toEqual(newCafe.descripcion)
    expect(storedCafe.precio).toEqual(newCafe.precio)
    
  });
});
