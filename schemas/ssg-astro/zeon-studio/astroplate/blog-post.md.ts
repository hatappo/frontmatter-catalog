/**
 * Astroplate blog post frontmatter schema.
 * @source https://github.com/zeon-studio/astroplate
 * @canonical https://github.com/zeon-studio/astroplate/blob/main/src/content.config.ts blogCollection.schema
 * @copyright zeon-studio (https://github.com/zeon-studio)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag astro
 * @tag theme
 * @tag blog
 */
export default interface BlogPost {
  /** Title of the blog post. */
  title: string;
  /** Meta title for SEO purposes. */
  meta_title?: string;
  /** Description of the blog post. */
  description?: string;
  /**
   * Publication date of the post.
   * @format date-time
   */
  date?: string;
  /** Featured image path or URL for the post. */
  image?: string;
  /**
   * Author of the post.
   * @default "Admin"
   */
  author?: string;
  /**
   * Categories for the post.
   * @default ["others"]
   */
  categories?: string[];
  /**
   * Tags for the post.
   * @default ["others"]
   */
  tags?: string[];
  /** Whether the post is a draft (unpublished). */
  draft?: boolean;
}
