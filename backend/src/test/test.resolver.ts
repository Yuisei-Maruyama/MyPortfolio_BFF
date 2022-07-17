import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './models/test.models';
import { TestService } from './test.service';

// Resolverデコレータでresolverを定義
// https://docs.nestjs.com/graphql/resolvers#code-first-resolver
@Resolver()
export class TestResolver {
  constructor(private testService: TestService) {}
  // QueryデコレータでQueryを定義
  // 第一引数にReturnTypeFuncを指定し、型を定義。ここではTodoの配列を指定。
  // 第二引数にオプションとして{ nullable: 'items' }を与えることでから配列を許容する。[Todo]!と同義。
  // デフォルトでは [Todo!]! になる。
  @Query(() => [Todo], { nullable: 'items' })
  findAll() {
    return this.testService.findAll();
  }

  @Query(() => Todo)
  // Queryに引数がある場合はArgsデコレータで定義。
  // 第一引数に引数の名前、第二引数に型を指定。
  // schema上の型定義は findOneById(id: ID!): Todo! となる
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.testService.findOneById(id);
  }
}