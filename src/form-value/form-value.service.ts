import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FormValue, FormValueDocument } from './schemas/form-value.schema';

@Injectable()
export class FormValueService {
  constructor(
    @InjectModel(FormValue.name)
    private formValueModel: Model<FormValueDocument>,
  ) {}

  async addFormResponse(addFormValueDto): Promise<FormValue> {
    const createdFormResponse = new this.formValueModel(addFormValueDto);
    return createdFormResponse.save();
  }

  async getFormResponse(formResponseId: string): Promise<FormValue>{
    const foundData = await this.formValueModel.findOne({formResponseId}).exec();
    console.log('foundData = ', foundData);
    let finalResponseData = {
        formResponseId: foundData.formResponseId,
        userName: foundData.userName,
        formResponseJson: JSON.parse(foundData.formResponseJson),
        formStructureId: foundData.formStructureId
    }
    return finalResponseData;
  }
}
