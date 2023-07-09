import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { RequestWithUser } from './request.type';
import { JwtPayload } from './jwt-payload.type';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  use(req: any, res: Response, next: NextFunction) {
    const bearerToken = req.headers['authorization'];
    if (!(bearerToken)) {
      next();
      return;
    }
    const token = bearerToken.split(' ')[1];
    if (!token) {
      next();
      return;
    }

    const user = this.jwtService.verify<JwtPayload>(token);
    if (!user) {
      next();
      return;
    }

    (req as unknown as RequestWithUser).user = user;
    next();
  }
}
