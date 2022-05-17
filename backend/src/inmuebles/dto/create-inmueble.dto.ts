import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateUsuarioDto } from "src/usuarios/usuarios/dto/create-usuarios.dto";
import { UsuariosEntity } from "src/usuarios/usuarios/entities/usuarios.entity";

export class CreateInmuebleDto {
    
    @IsNotEmpty()
    @IsString()
    readonly ubicacion: string;

    @IsNotEmpty()
    @IsString()
    readonly tipoInmueble: string;

    @IsNotEmpty()
    @IsString()
    readonly tipoOperacion: string;
    
    @IsNotEmpty()
    @IsNumber()
    readonly superficie: number;

    @IsNotEmpty()
    @IsNumber()
    readonly habitaciones: number;

    @IsNotEmpty()
    @IsNumber()
    readonly baños: number;

    @IsNotEmpty()
    @IsNumber()
    readonly precio: number;

    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;

    @IsNotEmpty()
    @IsString()
    readonly nombreVendedor: CreateUsuarioDto;
}
