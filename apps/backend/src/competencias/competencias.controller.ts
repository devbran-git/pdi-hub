import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompetenciasService } from './competencias.service';
import { CreateCompetenciaDto } from './dto/create-competencia.dto';
import { UpdateCompetenciaDto } from './dto/update-competencia.dto';

@Controller('competencias')
export class CompetenciasController {
  constructor(private readonly competenciasService: CompetenciasService) {}

  @Get()
  findAll() {
    return this.competenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competenciasService.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateCompetenciaDto) {
    return this.competenciasService.create(createDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateCompetenciaDto) {
    return this.competenciasService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.competenciasService.remove(id);
  }
}
