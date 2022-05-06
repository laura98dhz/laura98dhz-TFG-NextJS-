import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly UsuariosService: UsuariosService){}

    @Get()  
    async getAll(){ //en localhost:8080/producto nosllamara a este metodo
        return await this.UsuariosService.getAll();
    }
}
