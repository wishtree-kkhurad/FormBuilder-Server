import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { AddFormStructureDto } from './dto/add-form-structure.dto';
import { FormStructureService } from './form-structure.service';

@Controller('form-structure')
export class FormStructureController {
  constructor(private formStructureService: FormStructureService) {}

  @Post('addFormStrucutre')
  async createFormStructure(
    @Body() addFormStructureDto: AddFormStructureDto,
  ): Promise<any> {
    console.log('addFormStructureDto = ');
    console.log(addFormStructureDto);
    return this.formStructureService.createFormStructure(addFormStructureDto);
  }

  @Get('getAllFormStructures')
  async getAllFormStructures(): Promise<any> {
    return this.formStructureService.getAllFormStructures();
  }

  @Put('publishFormStructure')
  async publishFormStructures(
    @Query('formId') formId: string,
    @Query('isPublished') isPublished: boolean,
  ): Promise<any> {
    return this.formStructureService.publishFormStructures(formId, isPublished);
  }

  @Get('getAllPublishedFormStructures')
  async getAllPublishedFormStructures(): Promise<any> {
    return this.formStructureService.getAllPublishedFormStructures();
  }
}
