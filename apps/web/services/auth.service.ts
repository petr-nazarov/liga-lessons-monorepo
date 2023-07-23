import { BaseCrudService } from './base-crud.service';
import { CreateUserDto, JwtPayload } from 'types';

import jwt_decode from 'jwt-decode';
export class AuthService extends BaseCrudService {
  private async getAccessToken(body: CreateUserDto, options?: any) {
    const jwt = await this.post<{ access_token: string }>(
      'auth/login',
      body,
      options,
    );
    return jwt.access_token;
  }

  public async login(body: CreateUserDto, options?: any) {
    const accessToken = await this.getAccessToken(body, options);
    localStorage.setItem('access_token', accessToken);
  }

  public isLoggedIn() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return false;
    }
    const decoded = jwt_decode(accessToken) as JwtPayload;
    console.log(decoded);
    console.log(Date.now());
    return decoded.exp > Date.now() / 1000;
  }
}
