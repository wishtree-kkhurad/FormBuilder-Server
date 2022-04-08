import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AddFormValueDto } from './dto/add-form-value.dto';
import { FormValueService } from './form-value.service';

@Controller('form-value')
export class FormValueController {
  constructor(private formValueService: FormValueService) {}

  @Post('addFormResponse')
  async addFormResponse(
    @Body() addFormValueDto: AddFormValueDto,
  ): Promise<any> {
    console.log('addFormValueDto = ');
    console.log(addFormValueDto);
    return this.formValueService.addFormResponse(addFormValueDto);
  }

  @Get('getFormResponse')
  async getFormResponse(
    @Query('formResponseId') formResponseId: string,
  ): Promise<any> {
    return this.formValueService.getFormResponse(formResponseId);
  }
}
