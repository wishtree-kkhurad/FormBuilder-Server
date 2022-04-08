/**In order to use validation and transformation pipes we need 2 packages:-
 * 1. class-validator
 * 2. class-transformer */
import { IsNotEmpty, IsString } from 'class-validator';

export class AddFormStructureDto {
//   formId: string;

//   @IsNotEmpty()
//   formTitle: string;

//   @IsNotEmpty()
//   @IsString()
  formFieldsJson: any;
}
