import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormStructureModule } from './form-structure/form-structure.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/form-builder-db'),
    FormStructureModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
