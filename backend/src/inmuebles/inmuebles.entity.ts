//es la clase que mapea los datos de la base de datos

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { UsuariosEntity } from "../usuarios/usuarios.entity";

@Entity({name:'inmuebles'}) // indicamos que es una tabla

export class InmueblesEntity {
    
    @PrimaryGeneratedColumn() //indicamos que es una clave primaria
    id: number;
    
    @Column({nullable: false}) //indicamos que es una columna
    fecha_publicacion: Date;

    @Column({type: 'varchar', length: 10, nullable: false}) //indicamos que es una columna
    tipo_inmueble: string;

    @Column({type: 'varchar', length: 10, nullable: false}) //indicamos que es una columna
    tipo_operacion: string;

    @ManyToOne(() => UsuariosEntity, (usuario) => usuario.id, {nullable: false})
    vendedor: number;

    @Column({type: 'int', nullable: false}) //indicamos que es una columna
    superficie: number;

    @Column({type: 'int', nullable: false}) //indicamos que es una columna
    habitaciones: number;

    @Column({type: 'int', nullable: false}) //indicamos que es una columna
    baños: number;

    @Column({type: 'int', nullable: false}) //indicamos que es una columna
    precio: number;

    @Column({type: 'varchar', length: 1000, nullable: false}) //indicamos que es una columna
    descripcion: string;
}