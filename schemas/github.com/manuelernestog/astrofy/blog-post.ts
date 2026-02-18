/**
 * Astrofy blog post frontmatter schema.
 * @source https://github.com/manuelernestog/astrofy?tab=readme-ov-file#post-format
 * @copyright manuelernestog (https://github.com/manuelernestog)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag astro
 * @tag theme
 * @tag blog
 */
export default interface BlogPost {
  /** Post Title. */
  title: string;
  /** Description of the post. */
  description: string;
  /**
   * Publication date of the post.
   * @example "Sep 10 2022"
   */
  pubDate: string;
  /** Post Hero Image URL. */
  heroImage: string;
}
