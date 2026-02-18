/**
 * Zenn book config.yaml schema.
 * @source https://zenn.dev/zenn/articles/zenn-cli-guide
 * @copyright Zenn (https://zenn.dev)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag blog
 * @tag japan
 */
export default interface BookConfig {
  /** Book title. */
  title: string;
  /** Book summary/description. Visible even for paid books. */
  summary: string;
  /** Tags for the book. Maximum 5 topics. */
  topics: string[];
  /** Publication status. */
  published: boolean;
  /**
   * Price in JPY. 0 for free, 200-5000 in 100 JPY increments for paid.
   * @default 0
   */
  price: number;
  /** Chapter order. List of chapter filenames without extension. */
  chapters: string[];
  /**
   * Table of contents depth. 0 to hide, 1-3 for heading levels.
   * @default 2
   */
  toc_depth?: number;
  /** Cover image path. */
  cover?: string;
}
