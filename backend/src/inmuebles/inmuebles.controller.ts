import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, HttpStatus, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';

@Controller('inmuebles')
export class InmueblesController {
  
  constructor(private readonly inmueblesService: InmueblesService) {}
  
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.inmueblesService.findAll();
  }
  
  @Get(':ubicacion')
  @HttpCode(HttpStatus.OK)
  findByUbicacion(@Param('ubicacion') ubicacion: string) {
    return this.inmueblesService.findByUbicacion(ubicacion);
  }

  @Get('/mostrar/:usuario')
  @HttpCode(HttpStatus.OK)
  findByUsuario(@Param('usuario') usuario: string) {
    return this.inmueblesService.findByUsuario(usuario);
  }

  @Get('/id/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: number) {
    return this.inmueblesService.findById(id);
  }

  

  @UsePipes(new ValidationPipe({whitelist:true}))
  @Post('/:vendedor')
  @HttpCode(HttpStatus.CREATED)
  create(@Param('vendedor') vendedor: string, @Body() data: CreateInmuebleDto) {
    return this.inmueblesService.create(vendedor, data);
  }

  @UsePipes(new ValidationPipe({whitelist:true}))
  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateInmuebleDto) {
    return this.inmueblesService.update(id,data);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.inmueblesService.delete(id);
  }
}
