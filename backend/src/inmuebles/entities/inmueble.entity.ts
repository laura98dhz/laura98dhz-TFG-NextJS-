import { UsuariosEntity } from "src/usuarios/usuarios/entities/usuario.entity";
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class InmuebleEntity {

    @PrimaryGeneratedColumn()
    readonly id:number;
    
    @Column()
    readonly ubicacion: string;

    @Column()
    readonly tipoInmueble: string;

    @Column()
    readonly tipoOperacion: string;
    
    @ManyToOne(type => UsuariosEntity, usuariosEntity => usuariosEntity.nombreUsuario)
    @JoinColumn({ name: 'vendedor_id' })
    readonly vendedor: UsuariosEntity;
    
    @Column()
    readonly superficie: number;

    @Column()
    readonly habitaciones: number;

    @Column()
    readonly baños: number;

    @Column()
    readonly precio: number;

    @Column()
    readonly descripcion: string;
}
