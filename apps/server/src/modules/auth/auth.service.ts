import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';
import { JwtPayload } from './jwt-payload.type';

const saltOrRounds = 10;
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ username, password }: AuthDto) {
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const user = await this.usersService.create({
      username,
      password: hashedPassword,
    });
    return user;
  }

  async login({ username, password }: AuthDto) {
    const users = await this.usersService.find({ username });

    if (!users) {
      throw new UnauthorizedException('Invalid username');
    }
    const user = users[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    const iat = new Date().getTime();
    const exp = iat + 1000 * 60 * 60 * 24 * 2;
    const payload: JwtPayload = {
      _id: user._id.toString(),
      username,
      iat,
      exp,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
