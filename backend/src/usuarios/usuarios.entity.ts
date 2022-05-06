//es la clase que mapea los datos de la base de datos

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'usuarios'}) // indicamos que es una tabla

export class UsuariosEntity {
    
    @PrimaryGeneratedColumn() //indicamos que es una clave primaria
    id: number;
    
    @Column({type: 'varchar', length: 10, nullable: false, unique: true}) //indicamos que es una columna
    nombre: string;

    @Column({type: 'varchar', length: 10, nullable: false, unique: true}) //indicamos que es una columna
    correo_electronico: string;
    
    @Column({type: 'float', nullable: false}) 
    contraseña: string;

}