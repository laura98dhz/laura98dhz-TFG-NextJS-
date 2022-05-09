import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, HttpStatus, HttpCode } from '@nestjs/common';
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
  
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: CreateUsuarioDto) {
    return this.usuariosService.create(data);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUsuarioDto) {
    return this.usuariosService.update(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.remove(id);
  }
}
