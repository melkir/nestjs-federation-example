import { Injectable } from '@nestjs/common';

import { User } from './user.model';

@Injectable()
export class UsersService {
  private posts: User[] = [{ id: 1, name: 'melkir' }];

  findOneById(postId: number): User {
    return this.posts.find(({ id }) => id === postId);
  }
}
