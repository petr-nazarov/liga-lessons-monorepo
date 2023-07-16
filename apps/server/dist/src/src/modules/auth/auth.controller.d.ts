import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { JwtPayload } from './jwt-payload.type';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    me(requestor: JwtPayload): Promise<JwtPayload>;
    register(authDto: AuthDto): Promise<import("../users/user.model").UserModel>;
    login(authDto: AuthDto): Promise<{
        access_token: string;
    }>;
}
//# sourceMappingURL=auth.controller.d.ts.map