import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioEntity } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {

  private usuario: UsuarioEntity[] = [];
    
  findAll(): UsuarioEntity[] {
      return this.usuario ;
  }

  findOne(id: number): UsuarioEntity{
      const findUsuario: UsuarioEntity = this.usuario.find((task) => task.id === id);
      if(!findUsuario){
          throw new NotFoundException('Task not found');
      }

      return findUsuario;
  }
  
  create(data: CreateUsuarioDto): UsuarioEntity{
      const newUsuario: UsuarioEntity = {id: this.usuario.length + 1, ...data}; 
      this.usuario.unshift(newUsuario);
      return newUsuario;
  }

  update(taskId: number, data: UpdateUsuarioDto){
      const findUsuario: number = this.usuario.findIndex((task) => task.id === taskId);
      
      if(findUsuario === -1){
          throw new NotFoundException('User not found');
      }

      this.usuario[findUsuario] = {...this.usuario[findUsuario], ...data}

      return findUsuario;
  }

  remove(id: number){
      const findUsuario: number = this.usuario.findIndex((task) => task.id === id);
      
      if(findUsuario === -1){
          throw new NotFoundException('User not found');
      }    
      this.usuario = this.usuario.filter((usuario)=> usuario.id !== id);
  }
}
