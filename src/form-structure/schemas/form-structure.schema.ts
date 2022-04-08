import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

import { IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export type FormStructureDocument = FormStructure & Document;

@Schema()
export class FormStructure {
  @Prop({ default: uuidv4() })
  formId: string;

  @Prop({ default: false })
  isPublished: boolean;

  @Prop({type: {}})
  formFieldsJson: any;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop()
  deletedAt: Date;

  @Prop()
  createdBy: string;

  @Prop()
  updatedBy: string;

  @Prop()
  deletedBy: string;
}
export const FormStructureSchema = SchemaFactory.createForClass(FormStructure);
