import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InmueblesEntity } from './entities/inmuebles.entity';
import { InmueblesRepository } from './inmuebles.repository';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { getRepository } from 'typeorm';

@Injectable()
export class InmueblesService {
    [x: string]: any;

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

    async findByUbicacion(ubicacion: string): Promise<any> {
        const inmueble = await this.inmuebleRepository.createQueryBuilder("inmueble").where("inmueble.ubicacion = :ubicacion", { ubicacion: ubicacion }).getMany();
        
        if (!inmueble.length) {
            throw new NotFoundException({ message: 'No hay inmuebles' })
        }

        return inmueble;
    }

    async create(nombreUsuario: string, data: CreateInmuebleDto): Promise<any> {
        
        const usuario = await getRepository('UsuariosEntity').createQueryBuilder("usuario").where("usuario.nombreUsuario = :nombreUsuario", { nombreUsuario: nombreUsuario }).getOne();

        if(!usuario) throw new BadRequestException({message: 'Ese usuario no existe'}) 
        
        const newInmueble = this.inmuebleRepository.create(data);
        await this.inmuebleRepository.save(newInmueble);
        
        return {message: 'inmueble creado'};
    }

    async update(id: number, data: UpdateInmuebleDto): Promise<any>{
        const inmueble = await this.inmuebleRepository.createQueryBuilder("inmueble").where("inmueble.id = :id", { id: id }).getOne();
        if(!inmueble) throw new BadRequestException({message: 'Ese usuario no existe'})
        
        if(data.baños) {
            inmueble.baños = data.baños;        
        }

        if(data.descripcion) {
            inmueble.descripcion = data.descripcion;        
        }

        if(data.habitaciones) {
            inmueble.habitaciones = data.habitaciones;        
        }

        if(data.precio) {
            inmueble.precio = data.precio;        
        }

        if(data.superficie) {
            inmueble.superficie = data.superficie;        
        }

        if(data.tipoInmueble) {
            inmueble.tipoInmueble = data.tipoInmueble;        
        }

        if(data.tipoOperacion) {
            inmueble.tipoOperacion = data.tipoOperacion;        
        }

        if(data.ubicacion) {
            inmueble.ubicacion = data.ubicacion;        
        }

        await this.inmuebleRepository.createQueryBuilder()
                        .update(InmueblesEntity)
                        .set({ 
                            baños: inmueble.baños,
                            descripcion: inmueble.descripcion,
                            habitaciones: inmueble.habitaciones,
                            precio: inmueble.precio,
                            superficie: inmueble.superficie,
                            tipoInmueble: inmueble.tipoInmueble,
                            tipoOperacion: inmueble.tipoOperacion,
                            ubicacion: inmueble.ubicacion
                        })
                        .where("id = :id", { id: id })
                        .execute()

        return {message: 'usuario modificado'};
    }

    async delete(id: number){
        const inmueble = await this.inmuebleRepository.createQueryBuilder("inmueble").where("inmueble.id = :id", { id: id }).getOne();

        if(!inmueble) throw new BadRequestException({message: 'Ese inmueble no existe'})
        
        await this.inmuebleRepository.createQueryBuilder()
                                    .delete()
                                    .from(InmueblesEntity)
                                    .where("id = :id", { id: id })
                                    .execute()
        return {message: 'inmueble eliminado'};

    }

}
