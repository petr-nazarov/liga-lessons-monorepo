import {
  Controller,
  Get,
  Headers,
  Body,
  Post,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {  AuthDTOSchema, AuthDto } from './dto/auth.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Requestor } from './requestor.decorator';
import { JwtPayload } from './jwt-payload.type';
import { AuthGuard } from './auth.guard';
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/me')
  @ApiBearerAuth('default')
  @UseGuards(AuthGuard)
  async me(@Headers() headers, @Requestor() requestor: JwtPayload) {
    return requestor;
    //return await this.authService.me();
  }

  @Post('register')
  async register(@Body() authDto: AuthDto) {
    const validation = AuthDTOSchema.safeParse(authDto);
    if (!validation.success) {
      throw new BadRequestException(validation);
    }
    return await this.authService.register(authDto as AuthDto);
  }

  @Post('login')
  async login(@Body() authDto: AuthDto) {
    return await this.authService.login(authDto);
  }
}
