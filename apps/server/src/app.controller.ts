import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as packageJson from '../package.json';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('greeter/hello')
  getHello(): string {
    return 'Hello World!';
    return this.appService.getHello();
  }

  @Get()
  index() {
    return {
      version: packageJson.version,
      current_time: Date.now(),
    };
  }
}
