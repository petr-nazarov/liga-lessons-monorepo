import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({
    example: 'username',
    description: 'Username',
  })
  username: string;

  @ApiProperty({
    example: 'password',
    description: 'Password',
  })
  password: string;
}

export const AuthDTOSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
});
