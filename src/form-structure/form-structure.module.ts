import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormStructureController } from './form-structure.controller';
import { FormStructureService } from './form-structure.service';
import { FormStructure, FormStructureSchema } from './schemas/form-structure.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name:FormStructure.name, schema:FormStructureSchema}])
  ],
  controllers: [FormStructureController],
  providers: [FormStructureService]
})
export class FormStructureModule {}
