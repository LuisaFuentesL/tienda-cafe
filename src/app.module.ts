import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { CafeModule } from './cafe/cafe.module';
import { TiendaModule } from './tienda/tienda.module';
import { CafeTiendaModule } from './cafe-tienda/cafe-tienda.module';

@Module({
  imports: [CafeModule, TiendaModule, CafeTiendaModule],
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'museum',
    entities: [CafeEntity, ArtworkEntity],
    dropSchema: true,
    synchronize: true,
    keepConnectionAlive: true
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
