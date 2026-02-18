/**
 * Qiita CLI article frontmatter schema.
 * @source https://github.com/increments/qiita-cli
 * @copyright increments (https://github.com/increments)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag blog
 * @tag japan
 */
export default interface Article {
  /** 記事のタイトル。 */
  title: string;
  /** タグ（ブロックスタイルで複数タグを追加できます）。 */
  tags: ArticleTag[];
  /**
   * 限定共有記事かどうか。`true` で限定共有、`false` で公開。
   * @default false
   */
  private?: boolean;
  /**
   * 記事の更新日時。記事を投稿した際に自動的に設定される。
   * @format date-time
   */
  updated_at?: string;
  /**
   * 記事のUUID。記事を投稿した際に自動的に設定される。
   * @default null
   */
  id?: string | null;
  /**
   * Organization の URL 名。記事を Organization に紐付ける場合に指定。
   * @default null
   */
  organization_url_name?: string | null;
  /**
   * スライドモードの有効/無効。
   * @default false
   */
  slide?: boolean;
  /**
   * `true` の場合、publish コマンドでこのファイルを無視する。
   * @default false
   */
  ignorePublish?: boolean;
}

/** Qiita article tag. */
interface ArticleTag {
  /** タグ名。 */
  name: string;
  /** タグのバージョン（任意）。 */
  version?: string;
}
