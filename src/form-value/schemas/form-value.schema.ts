import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type FormValueDocument = FormValue & Document;

@Schema()
export class FormValue {
  @Prop({ default: uuidv4() })
  formResponseId: string;

  @Prop()
  userName: string;

  @Prop({type: {}})
  formResponseJson: any;

  @Prop()
  formStructureId: string;
}
export const FormValueSchema = SchemaFactory.createForClass(FormValue);
