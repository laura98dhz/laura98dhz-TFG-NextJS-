import { InmueblesEntity } from "src/inmuebles/entities/inmuebles.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuarios'})
export class UsuariosEntity{
    
    @PrimaryGeneratedColumn()
    readonly nombreUsuario: string; 

    @Column({type: 'varchar', length: 15, nullable: false})
    readonly contraseña: string;
    
    @Column({type: 'varchar', nullable: false})
    readonly correo: string;

    @OneToMany(() => InmueblesEntity, (inmuebleEntity) => inmuebleEntity.vendedor)
    inmuebles?: InmueblesEntity[]; 
}