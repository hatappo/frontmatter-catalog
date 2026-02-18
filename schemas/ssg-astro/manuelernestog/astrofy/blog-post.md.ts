/**
 * Astrofy blog post frontmatter schema.
 * @source https://github.com/manuelernestog/astrofy
 * @canonical https://github.com/manuelernestog/astrofy/blob/main/src/content/config.ts blogCollection.schema
 * @copyright manuelernestog (https://github.com/manuelernestog)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag astro
 * @tag theme
 * @tag blog
 */
export default interface BlogPost {
  /** Post title. */
  title: string;
  /** Description of the post. */
  description: string;
  /**
   * Publication date of the post.
   * @format date-time
   */
  pubDate: string;
  /** Updated date of the post. */
  updatedDate?: string;
  /** Post hero image URL or path. */
  heroImage?: string;
  /** Badge text to display on the post. */
  badge?: string;
  /** Tags for the post. Must be unique. */
  tags?: string[];
}
