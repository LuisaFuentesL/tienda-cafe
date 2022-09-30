import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CafeEntity } from 'src/cafe/cafe.entity';
import { TiendaEntity } from 'src/tienda/tienda.entity';
import { Repository } from 'typeorm';
import { CafeTiendaService } from './cafe-tienda.service';

describe('CafeTiendaService', () => {
  let service: CafeTiendaService;
  let tiendaRepository: Repository<TiendaEntity>;
  let cafeRepository: Repository<CafeEntity>;
  let tienda: TiendaEntity;
  let cafesList: CafeEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafeTiendaService],
    }).compile();

    service = module.get<CafeTiendaService>(CafeTiendaService);
    tiendaRepository = module.get<Repository<TiendaEntity>>(
      getRepositoryToken(TiendaEntity),
    );
    cafeRepository = module.get<Repository<CafeEntity>>(
      getRepositoryToken(CafeEntity),
    );

    await seedDatabase();
  });

  const seedDatabase = async () => {
    cafeRepository.clear();
    tiendaRepository.clear();

    cafesList = [];
    for (let i = 0; i < 5; i++) {
      const cafe: CafeEntity = await cafeRepository.save({
      nombre: faker.company.companyName(),
      descripcion: faker.lorem.sentence(),
      precio: faker.datatype.number({ min: 0}),
      });
      cafesList.push(cafe);
    }

    tienda = await tiendaRepository.save({
      nombre: faker.company.companyName(),
      direccion: faker.lorem.sentence(),
      telefono: faker.datatype.number({ min: 0}),
      cafes: cafesList,
    });
  };


  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('addCafeToTienda should throw an exception for an invalid tienda', async () => {
    const newCafe: CafeEntity = await cafeRepository.save({
      nombre: faker.company.companyName(),
      descripcion: faker.lorem.sentence(),
      precio: faker.datatype.number({ min: 0}),
      
    });

    await expect(() =>
      service.addCafeToTienda('0', newCafe.id),
    ).rejects.toHaveProperty(
      'message',
      'The tienda with the given id was not found',
    );
  });
});
