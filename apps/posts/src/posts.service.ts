import { Injectable } from '@nestjs/common';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { id: 1, userId: 1, title: 'Awesome', votes: 3 },
    { id: 2, userId: 1, title: 'NestJS', votes: 4 },
    { id: 3, userId: 1, title: 'GraphQL' },
  ];

  findOneById(id: number): Post {
    return this.posts.find((post) => post.id === id);
  }

  findAll(): Post[] {
    return [...this.posts];
  }

  forUser(userId: number) {
    return this.posts.filter((user) => user.id === userId);
  }
}
