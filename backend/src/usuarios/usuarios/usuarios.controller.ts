import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, HttpStatus, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.usuariosService.findAll();
  }
  
  // @Get(':id')
  // @HttpCode(HttpStatus.OK)
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.usuariosService.findOne(+id);
  // }

  // @Get(':nombreUsuario')
  // @HttpCode(HttpStatus.OK)
  // findByNombre(@Param('nombreUsuario') nombreUsuario: string) {
  //   return this.usuariosService.findByNombre(nombreUsuario);
  // }

  // @UsePipes(new ValidationPipe({whitelist:true}))
  // @Post()
  // @HttpCode(HttpStatus.CREATED)
  // create(@Body() data: CreateUsuarioDto) {
  //   return this.usuariosService.create(data);
  // }

  // @UsePipes(new ValidationPipe({whitelist:true}))
  // @Put(':nombreUsuario')
  // @HttpCode(HttpStatus.OK)
  // update(@Param('nombreUsuario') nombreUsuario: string, @Body() data: UpdateUsuarioDto) {
  //   return this.usuariosService.update(nombreUsuario, data);
  // }

  // @Delete(':nombreUsuario')
  // @HttpCode(HttpStatus.OK)
  // remove(@Param('nombreUsuario') nombreUsuario: string) {
  //   return this.usuariosService.remove(nombreUsuario);
  // }
}


