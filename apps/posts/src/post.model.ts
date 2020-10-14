import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { User } from './user.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  userId: number;

  @Field((type) => Int, { nullable: true })
  votes?: number;

  @Field((type) => User)
  user?: User;

  constructor(post: Partial<Post>) {
    Object.assign(this, post);
  }
}
