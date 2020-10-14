import { Args, Parent, Query, ResolveField } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';

import { User } from './user.model';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query((returns) => Post, { name: 'post' })
  getPost(@Args('id') id: number): Post {
    return this.postsService.findOneById(id);
  }

  @Query((returns) => [Post], { name: 'posts' })
  getPosts(): Post[] {
    return this.postsService.findAll();
  }

  @ResolveField((of) => User, { name: 'user' })
  getUser(@Parent() post: Post) {
    return { __typename: 'User', id: post.userId };
  }
}
