import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsuarioEntity{
    
    @PrimaryGeneratedColumn()
    readonly nombreUsuario: string; 

    @Column()
    readonly contraseña: string;
    
    @Column()
    readonly correo: string;
}

//https://typeorm.io/relations