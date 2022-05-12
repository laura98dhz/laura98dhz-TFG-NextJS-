import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InmueblesEntity } from './entities/inmuebles.entity';
import { InmueblesRepository } from './inmuebles.repository';
import { UsuariosEntity } from 'src/usuarios/usuarios/entities/usuarios.entity';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';

@Injectable()
export class InmueblesService {

    constructor(
        @InjectRepository(InmueblesEntity) private inmuebleRepository: InmueblesRepository
    ) { }

    async findAll(): Promise<any> {
        const usuarios = await this.inmuebleRepository.createQueryBuilder("inmueble").getMany();

        if (!usuarios.length) {
            throw new NotFoundException({ message: 'No hay inmuebles' })
        }
        return usuarios;
    }

//   findOne(id: number): InmuebleEntity{
//       const findUsuario: InmuebleEntity = this.inmueble.find((inmueble) => inmueble.id === id);
//       if(!findUsuario){
//           throw new NotFoundException('Inmueble not found');
//       }

//       return findUsuario;
//   }

//   findByUbicacion(ubicacion: string): any{
//     const findInmuebles: InmuebleEntity[] = this.inmueble.filter((inmueble) =>inmueble.ubicacion === ubicacion);

//     if(!findInmuebles){
//         throw new NotFoundException('Inmueble not found');
//     }
//     return findInmuebles;
// }

//   create(data: CreateInmuebleDto, vendedor: UsuariosEntity): InmuebleEntity{
//       const newUsuario: InmuebleEntity = {id: this.inmueble.length + 1, vendedor: vendedor,...data}; 
//       this.inmueble.unshift(newUsuario);
//       return newUsuario;
//   }

//   update(id: number, data: UpdateInmuebleDto){
//       const findInmueble: number = this.inmueble.findIndex((inmueble) => inmueble.id === id);
      
//       if(findInmueble === -1){
//           throw new NotFoundException('Inmueble not found');
//       }

//       this.inmueble[findInmueble] = {...this.inmueble[findInmueble], ...data}

//       return findInmueble;
//   }

//   remove(id: number){
//       const findInmueble: number = this.inmueble.findIndex((inmueble) => inmueble.id === id);
      
//       if(findInmueble === -1){
//           throw new NotFoundException('Inmueble not found');
//       }    
//       this.inmueble = this.inmueble.filter((inmueble)=> inmueble.id !== id);
//   }
}
