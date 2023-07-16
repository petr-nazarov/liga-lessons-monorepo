import { z } from 'zod';
export declare class AuthDto {
    username: string;
    password: string;
}
export declare const AuthDTOSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
//# sourceMappingURL=auth.dto.d.ts.map