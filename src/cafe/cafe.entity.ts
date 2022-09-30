import { TiendaEntity } from '../tienda/tienda.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany
} from 'typeorm';

@Entity()
export class CafeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  precio: BigInteger;

  @ManyToMany(() => TiendaEntity, tienda => tienda.cafes)
    tiendas: TiendaEntity[];


}
