import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosEntity } from './usuarios.entity' 
import { UsuariosRepository } from './usuarios.repository';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsuariosService {
    
    constructor(
        @InjectRepository(UsuariosEntity)
        private productoRepository: UsuariosRepository
    ) { }

    async getAll(): Promise<UsuariosEntity[]> {
        const list = await this.productoRepository.find();
        if (!list.length) {
            throw new NotFoundException({message:'la lista está vacía'});
        }
        return list;
    }
}
