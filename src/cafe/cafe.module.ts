import { Module } from '@nestjs/common';
////import { CafeService } from './cafe.service';
import { CafeEntity } from './cafe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CafeService } from './cafe.service';




@Module({
  providers: [CafeService],
  imports: [TypeOrmModule.forFeature([CafeEntity])],
})
export class CafeModule { }
