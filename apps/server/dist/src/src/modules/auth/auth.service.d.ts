import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register({ username, password }: AuthDto): Promise<import("../users/user.model").UserModel>;
    login({ username, password }: AuthDto): Promise<{
        access_token: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map