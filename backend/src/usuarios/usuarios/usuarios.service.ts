import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuarios.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuariosEntity } from './entities/usuarios.entity';
import { UsuariosRepository } from './usuarios.repository';


@Injectable()
export class UsuariosService {
    
    constructor(
        @InjectRepository(UsuariosEntity) private usuarioRepository: UsuariosRepository
    ) { }

    // async findAll(): Promise<UsuariosEntity[]> {
    //     const list = await this.usuarioRepository.createQueryBuilder('nombreUsuario');
    //     if(!list.length){
    //         throw new NotFoundException({message: 'No hay usuarios'})
    //     }
    //     return list;
    // }

    

    // findByNombre(nombreUsuario: string): boolean{
    //     const findUsuario: UsuariosEntity = this.usuario.find((usuario) => usuario.nombreUsuario === nombreUsuario);

    //     if(findUsuario){
    //         return false;
    //     }
    //     return true;

    // }
    
    // create(data: CreateUsuarioDto): UsuariosEntity{
    //     //const newUsuario: UsuariosEntity = {nombreUsuario: this.usuario.length + 1, ...data}; 
    //     const newUsuario: UsuariosEntity = data; 
    //     if(!this.findByNombre(data.nombreUsuario)){
    //         throw new BadRequestException('Usser exist');
    //     }
      
    //     this.usuario.unshift(newUsuario);
    //     return newUsuario;
    // }

    // update(nombreUsuario: string, data: UpdateUsuarioDto){
    //     const findUsuario: number = this.usuario.findIndex((usuario) => usuario.nombreUsuario === nombreUsuario);
        
    //     if(findUsuario === -1){
    //         throw new NotFoundException('User not found');
    //     }

    //     this.usuario[findUsuario] = {...this.usuario[findUsuario], ...data}

    //     return findUsuario;
    // }

    // remove(nombreUsuario: string){
    //     const findUsuario: number = this.usuario.findIndex((usuario) => usuario.nombreUsuario === nombreUsuario);
        
    //     if(findUsuario === -1){
    //         throw new NotFoundException('User not found');
    //     }    
    //     this.usuario = this.usuario.filter((usuario)=> usuario.nombreUsuario !== nombreUsuario);
    // }
}
