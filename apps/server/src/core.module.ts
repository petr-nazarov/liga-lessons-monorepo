import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { conf } from './conf';
@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: conf.auth.secret,
    }),
  ],
  exports: [JwtModule],
})
export class CoreModule {}
