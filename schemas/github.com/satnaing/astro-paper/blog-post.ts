
/**
 * Astro Paper post frontmatter schema.
 * @copyright satnaing (https://github.com/satnaing)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag astro
 * @tag theme
 * @tag blog
 */
export default interface BlogPost {
  /** Title of the post. It is the main heading of the post. */
  title: string;
  /** Description of the post. Used in post excerpt and site description of the post. */
  description: string;
  /**
   * Published datetime in ISO 8601 format.
   * @format date-time
   */
  pubDatetime: string;
  /**
   * Modified datetime in ISO 8601 format. Only add this when the post is modified.
   * @format date-time
   */
  modDatetime?: string;
  /**
   * Author of the post.
   * @default SITE.author
   */
  author?: string;
  /** Slug for the post. If not specified, it will be auto-generated from the file name. */
  slug?: string;
  /**
   * Whether to display this post in the featured section of home page.
   * @default false
   */
  featured?: boolean;
  /**
   * Mark the post as unpublished.
   * @default false
   */
  draft?: boolean;
  /**
   * Related keywords for this post.
   * @default ["others"]
   */
  tags?: string[];
  /**
   * OG image of the post. Used for social media sharing.
   * @default SITE.ogImage
   */
  ogImage?: string;
  /**
   * Canonical URL of the post for previously published articles.
   * @default Astro.site + pathname
   */
  canonicalURL?: string;
  /**
   * Whether to hide the edit post button.
   * @default false
   */
  hideEditPost?: boolean;
  /**
   * Timezone for the post in IANA format.
   * @default SITE.timezone
   */
  timezone?: string;
}
