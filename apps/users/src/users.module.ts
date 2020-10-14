import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';

import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'apps/users/src/schema.gql'),
    }),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
