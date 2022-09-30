import { Test, TestingModule } from '@nestjs/testing';
import { TiendaEntity } from './tienda.entity';
import { TiendaService } from './tienda.service';

describe('TiendaService', () => {
  let service: TiendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiendaService],
    }).compile();

    service = module.get<TiendaService>(TiendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should return a new tienda', async () => {
    const tienda: TiendaEntity = {
      id: "",
      nombre: faker.company.companyName(),
      direccion: faker.lorem.sentence(),
      telefono: faker.datatype.number({ min: 0}),
      cafes: [],
    }
 
    const newTienda: TiendaEntity = await service.create(tienda);
    expect(newTienda).not.toBeNull();
 
    const storedTienda: TiendaEntity = await repository.findOne({where: {id: newTienda.id}})
    expect(storedTienda).not.toBeNull();
    expect(storedTienda.nombre).toEqual(newTienda.nombre)
    expect(storedTienda.direccion).toEqual(newTienda.direccion)
    expect(storedTienda.telefono).toEqual(newTienda.telefono)
    expect(storedTienda.telefono.length).toBe(10)

    
  });
});
