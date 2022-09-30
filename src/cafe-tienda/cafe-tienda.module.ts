import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendaEntity } from '../tienda/tienda.entity';
import { CafeEntity } from '../cafe/cafe.entity';
import { CafeTiendaService } from './cafe-tienda.service';

@Module({
  imports: [TypeOrmModule.forFeature([CafeEntity, TiendaEntity])],
  providers: [CafeTiendaService],
})
export class CafeTiendaModule { }
