import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { PostsService } from './posts.service';
import { Post } from './post.model';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField((of) => [Post], { name: 'posts' })
  public getPosts(@Parent() user: User): Post[] {
    return this.postsService.forUser(user.id);
  }
}
