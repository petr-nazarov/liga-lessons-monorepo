import { BaseCrudService } from "./base-crud.service"
import {CreateUserDto, JwtPayload} from 'types'

export class AuthService extends BaseCrudService {

  public async login<ResBody>(body: CreateUserDto, options?: any) {
  }


}
