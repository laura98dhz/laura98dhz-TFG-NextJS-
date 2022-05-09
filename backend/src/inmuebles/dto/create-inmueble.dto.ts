import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInmuebleDto {
    
    @IsNotEmpty()
    @IsString()
    readonly tipoInmueble: string;

    @IsNotEmpty()
    @IsString()
    readonly tipoOperacion: string;
    
    @IsNotEmpty()
    @IsString()
    readonly vendedor: string;
    
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
}
