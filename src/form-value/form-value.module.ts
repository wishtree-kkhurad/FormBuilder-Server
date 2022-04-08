import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormValueController } from './form-value.controller';
import { FormValueService } from './form-value.service';
import { FormValue, FormValueSchema} from './schemas/form-value.schema';
 
@Module({
  imports: [
    MongooseModule.forFeature([{name: FormValue.name, schema: FormValueSchema}])
  ],
  controllers: [FormValueController],
  providers: [FormValueService]
})
export class FormValueModule {}
