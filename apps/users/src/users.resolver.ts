import { Args, Int, Query, Resolver, ResolveReference } from '@nestjs/graphql';

import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.usersService.findOneById(reference.id);
  }

  @Query((returns) => User, { name: 'user' })
  getUser(@Args('id', { type: () => Int }) id: number): User {
    return this.usersService.findOneById(id);
  }
}
