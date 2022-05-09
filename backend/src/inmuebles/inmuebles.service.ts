import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { InmuebleEntity } from './entities/inmueble.entity';

@Injectable()
export class InmueblesService {
  
  private inmueble: InmuebleEntity[] = [];

  findAll(): InmuebleEntity[] {
    return this.inmueble ;
  }

  findOne(id: number): InmuebleEntity{
      const findUsuario: InmuebleEntity = this.inmueble.find((task) => task.id === id);
      if(!findUsuario){
          throw new NotFoundException('Task not found');
      }

      return findUsuario;
  }

  create(data: CreateInmuebleDto): InmuebleEntity{
      const newUsuario: InmuebleEntity = {id: this.inmueble.length + 1, ...data}; 
      this.inmueble.unshift(newUsuario);
      return newUsuario;
  }

  update(taskId: number, data: UpdateInmuebleDto){
      const findUsuario: number = this.inmueble.findIndex((task) => task.id === taskId);
      
      if(findUsuario === -1){
          throw new NotFoundException('User not found');
      }

      this.inmueble[findUsuario] = {...this.inmueble[findUsuario], ...data}

      return findUsuario;
  }

  remove(id: number){
      const findUsuario: number = this.inmueble.findIndex((task) => task.id === id);
      
      if(findUsuario === -1){
          throw new NotFoundException('User not found');
      }    
      this.inmueble = this.inmueble.filter((usuario)=> usuario.id !== id);
  }
}
