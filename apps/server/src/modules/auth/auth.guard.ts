import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
   console.log(req.headers);
    const bearerToken = req.headers['authorization'];
    console.log(bearerToken);
    if (!bearerToken) {
      return false;
      console.log('no token');
    }

    const token = bearerToken.split(' ')[1];
    if (!token) {
      return false;
    }

    const user = this.jwtService.verify(token);
    if (!user) {
      return false;
    }
    return true;
  }
}
