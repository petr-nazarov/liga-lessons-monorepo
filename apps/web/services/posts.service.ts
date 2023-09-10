import { BaseCrudService } from './base-crud.service';
import { CreateUserDto, JwtPayload, FindPaginatedInput, FindPaginatedResult, CreatePostDto } from 'types';

import jwt_decode from 'jwt-decode';
export class PostsService extends BaseCrudService {
  async findPaginated(input: FindPaginatedInput<CreatePostDto>) : Promise<FindPaginatedResult<CreatePostDto>> {
    const query = this.serialize(input);
    const res = await this.get<FindPaginatedResult<CreatePostDto>>(
      `http://localhost:3000/posts?${query}`,
      {
        auth: true,
        skipBaseUrl: true,
      }
    );
    return res
  }
}
