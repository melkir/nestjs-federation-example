import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: { cors: true },
      gateway: {
        serviceList: [
          { name: 'users', url: 'http://[::1]:3001/graphql' },
          { name: 'posts', url: 'http://[::1]:3002/graphql' },
        ],
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
