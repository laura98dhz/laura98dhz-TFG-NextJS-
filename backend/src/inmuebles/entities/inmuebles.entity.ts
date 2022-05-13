import { UsuariosEntity } from "../../usuarios/usuarios/entities/usuarios.entity"; 
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Inmuebles'})
export class InmueblesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 15, nullable: false})
    ubicacion: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    tipoInmueble: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    tipoOperacion: string;

    @ManyToOne(() => UsuariosEntity, (usuariosEntity) => usuariosEntity.nombreUsuario, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: 'vendedor_nombre' })
    vendedor: UsuariosEntity;

    @Column({type: 'int', nullable: false})
    superficie: number;

    @Column({type: 'int', nullable: false})
    habitaciones: number;

    @Column({type: 'int', nullable: false})
    baños: number;

    @Column({type: 'int', nullable: false})
    precio: number;

    @Column({type: 'varchar', length: 15, nullable: false})
    descripcion: string;
}
