import { Module } from '@nestjs/common';
import { GraphqlModule } from '../graphql/graphql.module';
import { MongoModule } from '../mongo/mongo.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule, GraphqlModule, MongoModule],
  exports: [ConfigModule, GraphqlModule, MongoModule],
})
export class CommonModule {}
