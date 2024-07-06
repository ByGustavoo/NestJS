import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('oi')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ola')
  getOla(): string {
    return this.appService.getOlaMundo();
  }
}
