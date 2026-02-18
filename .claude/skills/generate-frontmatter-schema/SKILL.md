---
description: Markdown の frontmatter のスキーマを Typescript の interface で定義します。
---

この Skill は Markdown の Frontmatter に対してスキーマを定義します。

# スキーマのファイルとディレクトリ

スキーマ定義ファイルは次のルールに従ったパスに配置します。
ディレクトリやファイルは既に作成済みである場合もあります。その場合は既存のものを利用してください。

- ディレクトリ
  - `schemas` 直下がカテゴリのディレクトリになっています。カテゴリはスキーマの対象となるものや関連するトピックに基づいて適切に選択あるいは作成します。
  - カテゴリのディレクトリ内にさらにサブディレクトリを配置してください。 GitHub 関連であれば、`schemas/CATEGORY/OWNER/REPO/` としてください。それ以外の場合は、 `schemas/CATEGORY/` 配下に適切な命名のフォルダを配置してください。
- ファイル名: その frontmatter スキーマを持つ Markdown ファイルを表す簡潔な名称をケバブケースで記述します。
  例えばブログ投稿の frontmatter スキーマであれば `blog-post.md.ts`、ドキュメントページの frontmatter スキーマであれば `doc-page.ts` などとします。


# スキーマのフォーマットと生成ルール

スキーマは Typescript の interface 形式で定義します。

## Interface

- interface の名前はファイル名をパスカルケースに変換したものにします。
  例えば `blog-post.ts` というファイル名であれば `BlogPost` となります。
- interface の JSDoc の1行目には、スキーマが何のためのものであるかを簡潔に1文で説明します。
- interface の JSDoc には次のタグを必須で含めます。
  - `@source`: スキーマの構造や説明の元となるドキュメントの URL です。複数ある場合は複数行で記載します。
  - `@copyright`: スキーマの元となるドキュメントの著作権者情報。 GitHub のリポジトリであれば、リポジトリの所有者と URL を `owner (https://github.com/owner)` の形式で記載します
  - `@attribution` 固定文字列: `Schema structure and descriptions are derived from the source documentation.`
- interface の JSDoc には次のタグを任意で含めます。
  - `@tag`: スキーマのカテゴリや関連するトピックを表すタグ。複数ある場合は複数行で記載します。
  - `@canonical`: 本家で定義されているスキーマの場所。URL とスキーマを取得できる変数名をスペース区切りで記載します。例えば Astro テーマの場合、`content.config.ts` ファイル内で Zod スキーマが定義されているため、そのファイルの URL と変数名（例: `blog.schema`）を記載します。
    - 例: `@canonical https://github.com/satnaing/astro-paper/blob/main/src/content.config.ts blog.schema`

## Interface のプロパティ

- interface のプロパティは Frontmatter の構造に対応し、適切な型を定義します。値が必須ではなく任意の場合は、プロパティ名の後に `?` を付け undefined を許容する型にすることでそれを表現します。任意ではあるが推奨されるプロパティは必須とすることもできます。
- interface のプロパティの JSDoc の1行目には、プロパティの説明を簡潔に記載します。参考にするドキュメントから引用可能ならば引用します。
- interface のプロパティの JSDoc には次のタグを任意で含めます。
  - `@default`: プロパティのデフォルト値に関する情報。
  - `@example`: プロパティの値の例を示す情報。複数ある場合は複数行で記載します。
  - `@format`: プロパティの値のフォーマットに関する情報。次の値が可能です。
    - `date-time`: ISO 8601 形式の日付と時刻。
    - `date`: ISO 8601 形式の日付のみ。
    - `time`: ISO 8601 形式の時刻のみ。
    - `email`: 電子メールアドレス。
  - `@pattern`: プロパティの値が従うべき正規表現パターン。`@format` で定義されていないフォーマットを指定する場合に使用します。

## 例

生成したスキーマの例は [example.md](example.md) を参照してください。
