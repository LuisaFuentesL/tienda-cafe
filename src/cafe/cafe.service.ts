import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

import { CafeEntity } from './cafe.entity';

@Injectable()
export class CafeService {
    constructor(
        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>
    ) { }

    async create(cafe: CafeEntity): Promise<CafeEntity> {

        return await this.cafeRepository.save(cafe);
    }

    
}
