import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: "secret123432"
    })
  ],
  exports: [JwtModule]
})
export class CoreModule {}
