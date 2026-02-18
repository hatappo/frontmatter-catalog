/**
 * Zenn book chapter frontmatter schema.
 * @source https://zenn.dev/zenn/articles/zenn-cli-guide
 * @copyright Zenn (https://zenn.dev)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag blog
 * @tag japan
 */
export default interface Chapter {
  /** Chapter title. */
  title: string;
  /**
   * Whether this chapter is free to read in a paid book.
   * @default false
   */
  free?: boolean;
}
