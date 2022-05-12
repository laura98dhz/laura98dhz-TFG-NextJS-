import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmueblesEntity } from './entities/inmuebles.entity';
import { InmueblesController } from './inmuebles.controller';
import { InmueblesService } from './inmuebles.service';

@Module({
    imports:[TypeOrmModule.forFeature([InmueblesEntity])],
    providers: [InmueblesService],
    controllers: [InmueblesController]
  })
export class InmueblesModule {}