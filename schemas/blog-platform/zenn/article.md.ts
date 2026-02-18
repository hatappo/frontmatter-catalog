/**
 * Zenn article frontmatter schema.
 * @source https://zenn.dev/zenn/articles/zenn-cli-guide
 * @copyright Zenn (https://zenn.dev)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag blog
 * @tag japan
 */
export default interface Article {
  /** Article title. */
  title: string;
  /** Eye-catch emoji (single character only). */
  emoji: string;
  /** Article type. "tech" for technical articles, "idea" for idea/opinion articles. */
  type: "tech" | "idea";
  /** Tags for the article. Maximum limit applies. */
  topics: string[];
  /** Publication status. Set to false for draft. */
  published: boolean;
  /**
   * Publication date and time in JST. Format: YYYY-MM-DD or YYYY-MM-DD hh:mm.
   * Past dates maintain the original publication time.
   */
  published_at?: string;
  /** Publication name for team publications. */
  publication_name?: string;
}
