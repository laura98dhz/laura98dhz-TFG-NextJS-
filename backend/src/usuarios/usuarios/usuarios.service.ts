import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioEntity } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {

    private usuario: UsuarioEntity[] = [];
    
    findAll(): UsuarioEntity[] {
        return this.usuario ;
    }

    // findOne(id: number): UsuarioEntity{
    //     const findUsuario: UsuarioEntity = this.usuario.find((usuario) => usuario.id === id);
    //     if(!findUsuario){
    //         throw new NotFoundException('Usser not found');
    //     }

    //     return findUsuario;
    // }

    findByNombre(nombreUsuario: string): boolean{
        const findUsuario: UsuarioEntity = this.usuario.find((usuario) => usuario.nombreUsuario === nombreUsuario);

        if(findUsuario){
            return false;
        }
        return true;

    }
    
    create(data: CreateUsuarioDto): UsuarioEntity{
        //const newUsuario: UsuarioEntity = {nombreUsuario: this.usuario.length + 1, ...data}; 
        const newUsuario: UsuarioEntity = data; 
        if(!this.findByNombre(data.nombreUsuario)){
            throw new BadRequestException('Usser exist');
        }
      
        this.usuario.unshift(newUsuario);
        return newUsuario;
    }

    update(nombreUsuario: string, data: UpdateUsuarioDto){
        const findUsuario: number = this.usuario.findIndex((usuario) => usuario.nombreUsuario === nombreUsuario);
        
        if(findUsuario === -1){
            throw new NotFoundException('User not found');
        }

        this.usuario[findUsuario] = {...this.usuario[findUsuario], ...data}

        return findUsuario;
    }

    remove(nombreUsuario: string){
        const findUsuario: number = this.usuario.findIndex((usuario) => usuario.nombreUsuario === nombreUsuario);
        
        if(findUsuario === -1){
            throw new NotFoundException('User not found');
        }    
        this.usuario = this.usuario.filter((usuario)=> usuario.nombreUsuario !== nombreUsuario);
    }
}
