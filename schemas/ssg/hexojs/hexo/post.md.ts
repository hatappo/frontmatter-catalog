/**
 * Hexo post frontmatter schema.
 * @source https://hexo.io/docs/front-matter
 * @copyright hexojs (https://github.com/hexojs)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag ssg
 * @tag nodejs
 * @tag blog
 */
export default interface Post {
  /**
   * Layout type for the post.
   * @default config.default_layout
   */
  layout?: string;
  /**
   * Post title.
   * @default Filename
   */
  title?: string;
  /**
   * Published date.
   * @format date-time
   * @default File created date
   */
  date?: string;
  /**
   * Updated date.
   * @format date-time
   * @default File updated date
   */
  updated?: string;
  /**
   * Enable comments for the post.
   * @default true
   */
  comments?: boolean;
  /** Tags for the post (posts only). Tags have no hierarchy. */
  tags?: string[];
  /** Categories for the post (posts only). Categories are hierarchical. */
  categories?: string[] | string[][];
  /**
   * Override the default permalink.
   * @default null
   */
  permalink?: string;
  /** Excerpt text for the post. */
  excerpt?: string;
  /**
   * Disable Nunjucks tag rendering.
   * @default false
   */
  disableNunjucks?: boolean;
  /** Language setting. Auto-detected if not specified. */
  lang?: string;
  /**
   * Publication status. Posts in _drafts folder default to false.
   * @default true
   */
  published?: boolean;
}
