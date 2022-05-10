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
      const findUsuario: InmuebleEntity = this.inmueble.find((inmueble) => inmueble.id === id);
      if(!findUsuario){
          throw new NotFoundException('Inmueble not found');
      }

      return findUsuario;
  }

  findByUbicacion(ubicacion: string): any{
    const findInmuebles: InmuebleEntity[] = this.inmueble.filter((inmueble) =>inmueble.ubicacion === ubicacion);

    if(!findInmuebles){
        throw new NotFoundException('Inmueble not found');
    }
    return findInmuebles;
}

  create(data: CreateInmuebleDto, vendedor: string): InmuebleEntity{
      const newUsuario: InmuebleEntity = {id: this.inmueble.length + 1, vendedor: vendedor,...data}; 
      this.inmueble.unshift(newUsuario);
      return newUsuario;
  }

  update(id: number, data: UpdateInmuebleDto){
      const findInmueble: number = this.inmueble.findIndex((inmueble) => inmueble.id === id);
      
      if(findInmueble === -1){
          throw new NotFoundException('Inmueble not found');
      }

      this.inmueble[findInmueble] = {...this.inmueble[findInmueble], ...data}

      return findInmueble;
  }

  remove(id: number){
      const findInmueble: number = this.inmueble.findIndex((inmueble) => inmueble.id === id);
      
      if(findInmueble === -1){
          throw new NotFoundException('Inmueble not found');
      }    
      this.inmueble = this.inmueble.filter((inmueble)=> inmueble.id !== id);
  }
}
