## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## @nest/cliのgenerateコマンドで関連ファイルを作成

```
# g は generate のエイリアス
# src/test/test.module.tsの作成
nest g module test
# src/test/test.service.tsの作成
nest g service test
# src/test/test.resolver.tsの作成
nest g resolver test
```

## 説明

下記を１つのブロックとして考える。

```
- module
- controller
- service
```

### module

controller と service をまとめる役割

**外部モジュールとのやりとりだけに責務を持っている**


```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';

// デコレータといい、AppModuleクラスをデコレーションする関数を定義する
@Module({
  imports: [], // 定義したModuleを使用可能にする
  controllers: [AppController],
  providers: [AppService],
  exports: [] // providers の中にある要素しか使用できない
})
export class AppModule {}

```

### controller

どんなURLがきたら、どんな値を返すのかを定義するファイル

**どのようなルーティングするのかということに責務を持っている**

```ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller()
 // ()内にはURLを定義すると、 /base をルートとした時の処理を実行することができる
@Controller('base')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // HTTPメソッドを定義
  // ()内にはURLを定義すると、 base/hello が叩かれた時に処理を実行することができる
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
```

### service

controller の処理が分厚くなったときに、処理を切り出すためのファイル

**ルーティングに対して、どういう処理をするのかということに責務を持っている**

```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

### DTO

クライアントからサーバに送られてくるデータの形を定義したもの



