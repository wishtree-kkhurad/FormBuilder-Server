import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FormStructure, FormStructureDocument} from './schemas/form-structure.schema';
import { AddFormStructureDto } from './dto/add-form-structure.dto';


@Injectable()
export class FormStructureService {
    constructor(@InjectModel(FormStructure.name) private formStructureModel: Model<FormStructureDocument>) {}

    async create(addFormStructDto: AddFormStructureDto): Promise<FormStructure> {
        const createdFormStructure = new this.formStructureModel(addFormStructDto);
        return createdFormStructure.save();
    }
    
    // async findAll(): Promise<Cat[]> {
    //     return this.catModel.find().exec();
    // }

}
