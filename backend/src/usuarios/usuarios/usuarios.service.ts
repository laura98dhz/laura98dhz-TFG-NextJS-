import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuariosEntity } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {

    private usuario: UsuariosEntity[] = [];
    
    findAll(): UsuariosEntity[] {
        return this.usuario ;
    }

    // findOne(id: number): UsuariosEntity{
    //     const findUsuario: UsuariosEntity = this.usuario.find((usuario) => usuario.id === id);
    //     if(!findUsuario){
    //         throw new NotFoundException('Usser not found');
    //     }

    //     return findUsuario;
    // }

    findByNombre(nombreUsuario: string): boolean{
        const findUsuario: UsuariosEntity = this.usuario.find((usuario) => usuario.nombreUsuario === nombreUsuario);

        if(findUsuario){
            return false;
        }
        return true;

    }
    
    create(data: CreateUsuarioDto): UsuariosEntity{
        //const newUsuario: UsuariosEntity = {nombreUsuario: this.usuario.length + 1, ...data}; 
        const newUsuario: UsuariosEntity = data; 
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
