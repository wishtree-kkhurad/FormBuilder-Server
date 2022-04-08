import { IsString } from 'class-validator';

export class AddFormValueDto{

    @IsString()
    userName: string;

    formResponseJson: any;
    
    @IsString()
    formStructureId: string;
}
