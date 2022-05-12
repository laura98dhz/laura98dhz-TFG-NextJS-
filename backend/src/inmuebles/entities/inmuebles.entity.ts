import { UsuariosEntity } from "../../usuarios/usuarios/entities/usuarios.entity"; 
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Inmuebles'})
export class InmueblesEntity {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: 'varchar', length: 15, nullable: false})
    readonly ubicacion: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    readonly tipoInmueble: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    readonly tipoOperacion: string;

    @ManyToOne(() => UsuariosEntity, (usuariosEntity) => usuariosEntity.nombreUsuario, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: 'vendedor_id' })
    readonly vendedor: UsuariosEntity;

    @Column({type: 'int', nullable: false})
    readonly superficie: number;

    @Column({type: 'int', nullable: false})
    readonly habitaciones: number;

    @Column({type: 'int', nullable: false})
    readonly baños: number;

    @Column({type: 'int', nullable: false})
    readonly precio: number;

    @Column({type: 'varchar', length: 15, nullable: false})
    readonly descripcion: string;
}
