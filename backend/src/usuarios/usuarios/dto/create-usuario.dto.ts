import { IsNotEmpty, IsString } from 'class-validator' //van a validar nuestros atributos

export class CreateUsuarioDto {

    @IsNotEmpty()
    @IsString()
    readonly nombreUsuario: string;

    @IsNotEmpty()
    @IsString()
    readonly contraseña: string;

    @IsNotEmpty()
    @IsString()
    readonly correo: string;

}
