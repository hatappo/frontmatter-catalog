<div align="center">

[English](README.md) | 日本語

</div>

# Frontmatter スキーマカタログ

さまざまなツールやサービスが使用する Markdown Frontmatter の
スキーマ定義をまとめたコレクションです。

## ディレクトリ構造

スキーマファイルは `schemas/` ディレクトリ配下に整理されています：

```
schemas/
├── ai/                    # AI コーディングエージェント
│   ├── anthropics/claude-code/
│   ├── openai/codex/
│   └── cursor/
├── ssg-astro/             # Astro テーマ
│   └── {owner}/{repo}/
├── ssg-hugo/              # Hugo
├── ssg-jekyll/            # Jekyll
├── blog-platform/         # ブログプラットフォーム
│   ├── zenn/
│   ├── qiita/
│   └── devto/
├── note-taking/           # ノートテイキングアプリ
│   ├── obsidian/
│   └── dendron/
├── slide/                 # プレゼンテーションツール
│   ├── slidevjs/slidev/
│   └── marp-team/marp-core/
└── ...
```

## ファイル命名規則

スキーマファイルは以下の命名規則に従います：

- `*.md.ts` — Markdown frontmatter スキーマ
- `*.yaml.ts` — YAML 設定ファイルスキーマ
- `*.toml.ts` — TOML 設定ファイルスキーマ

## スキーマフォーマット

スキーマは JSDoc コメント付きの TypeScript interface として定義します。

### Interface の JSDoc タグ

| タグ | 必須 | 説明 |
|-----|------|------|
| `@source` | Yes | 元ドキュメントの URL。複数ある場合は複数行で記載。 |
| `@copyright` | Yes | 著作権者。形式: `owner (https://github.com/owner)` |
| `@attribution` | Yes | 固定文字列: `Schema structure and descriptions are derived from the source documentation.` |
| `@tag` | No | カテゴリタグ。複数ある場合は複数行で記載。 |
| `@canonical` | No | 本家のスキーマ定義の場所（例: Astro テーマの Zod スキーマ）。形式: `URL variable.schema` |

### プロパティの JSDoc タグ

| タグ | 説明 |
|-----|------|
| `@default` | プロパティのデフォルト値 |
| `@example` | 値の例。複数ある場合は複数行で記載。 |
| `@format` | 値のフォーマット: `date-time`, `date`, `time`, `email` |
| `@pattern` | カスタムフォーマット用の正規表現パターン |

## 使い方

TODO:

## 帰属表示

本リポジトリのスキーマ定義は、各ファイルの `@source` タグに
記載されたドキュメントに基づいて構成されています。
プロパティの説明文は元の文章を翻案したものです。

著作権者の方で、内容の削除や修正を希望される場合は
Issue をお寄せください。

## ライセンス

スキーマ定義（型構造およびプロパティの説明文）の著作権は、
各ファイルに記載されたそれぞれの著作権者に帰属します。

本リポジトリのオリジナルのコードおよびツール類は
MIT License の下で公開されています。
詳細は [LICENSE](./LICENSE) をご覧ください。
