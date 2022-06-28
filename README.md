# MyPortfolio_BFF

## 技術スタック

-  フロントエンド : Next.js
  - Next.js / React
  - GraphQL Code Generator / Apollo Client

-  バックエンド : NestJs
  - NestJS
  - Prisma
  - GraphQL / Apollo

## アプリケーション全体の構成案

```ts
root─┬─ frontend #Next.js
     │  ├─ package.json #frontend固有のpackageを管理 
     │  └─ その他のファイル 
     │
     ├─ backend #NestJS
     │  ├─ package.json #backend固有のpackageを管理 
     │  └─ その他のファイル 
     │ 
     ├─ package.json #共有で扱うpackageを管理
     └─ yarn.lock #全体で1つ
```

本リポジトリを「モノレポ」で開発することで下記のメリットを享受したいと考えて、モノレポを採用しました。  

- フロントエンドとバックエンドにおいて、ESLint / Prettierなどの共通設定を一元管理する
- 同じリポジトリ内にフロントエンドとバックエンドが共存する形なので、変更が入るたびに `.tgz` に纏めて、 import する必要がなくなる