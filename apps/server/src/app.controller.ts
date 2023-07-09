import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('greeter')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
    return this.appService.getHello();
  }
}
