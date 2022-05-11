import { InmuebleEntity } from "src/inmuebles/entities/inmueble.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsuariosEntity{
    
    @PrimaryGeneratedColumn()
    readonly nombreUsuario: string; 

    @Column()
    readonly contraseña: string;
    
    @Column()
    readonly correo: string;
}

//https://typeorm.io/relations