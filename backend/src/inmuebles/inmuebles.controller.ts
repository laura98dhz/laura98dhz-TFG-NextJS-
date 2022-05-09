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
  
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.inmueblesService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({whitelist:true}))
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: CreateInmuebleDto) {
    return this.inmueblesService.create(data);
  }

  @UsePipes(new ValidationPipe({whitelist:true}))
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateInmuebleDto) {
    return this.inmueblesService.update(+id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.inmueblesService.remove(+id);
  }
}
