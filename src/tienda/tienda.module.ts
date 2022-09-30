import { Module } from '@nestjs/common';
//import { TiendaService } from './tienda.service';
import { TiendaEntity } from './tienda.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { TiendaController } from './tienda.controller';
import { TiendaService } from './tienda.service';




@Module({
  //providers: [TiendaService],
  imports: [TypeOrmModule.forFeature([TiendaEntity])],
  providers: [TiendaService],
  //controllers: [TiendaController]
})
export class TiendaModule { }
