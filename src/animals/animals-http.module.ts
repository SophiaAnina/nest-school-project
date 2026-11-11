
import { Module } from '@nestjs/common';
import { AnimalsModule } from './animals.module.js';
import { AnimalsService } from './animals.service.js';
import { AnimalsController } from './animals.controller.js';

@Module({
  imports: [AnimalsModule],
  providers: [AnimalsService],
  controllers: [AnimalsController]
})
export class UserHttpModule {}
