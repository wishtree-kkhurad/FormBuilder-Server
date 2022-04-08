import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  FormStructure,
  FormStructureDocument,
} from './schemas/form-structure.schema';
import { AddFormStructureDto } from './dto/add-form-structure.dto';

@Injectable()
export class FormStructureService {
  constructor(
    @InjectModel(FormStructure.name)
    private formStructureModel: Model<FormStructureDocument>,
  ) {}

  async createFormStructure(
    addFormStructDto: AddFormStructureDto,
  ): Promise<FormStructure> {
    const createdFormStructure = new this.formStructureModel(addFormStructDto);
    return createdFormStructure.save();
  }

  async getAllFormStructures(){
    // return this.formStructureModel.find().exec();
    const gotData = await this.formStructureModel.find().exec();
    console.log('gotData = ', gotData);

    let allformsArray = [];

    for (const data of gotData) {
        //   console.log('data = ', data);
    //   console.log('parsed data = ' ,JSON.parse(data.formFieldsJson));
    //   console.log(
    //     'typeof JSON.parse(data.formFieldsJson)',
    //     typeof JSON.parse(data.formFieldsJson),
    //   );
        allformsArray.push(JSON.parse(data.formFieldsJson));
    }
    return allformsArray
  }
}
