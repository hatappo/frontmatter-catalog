/**
 * Dev.to article frontmatter schema.
 * @source https://dev.to/p/editor_guide
 * @copyright Forem (https://github.com/forem)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag blog
 * @tag community
 */
export default interface Article {
  /** Article title. */
  title: string;
  /** Publication status of the article. */
  published: boolean;
  /** Tags for the article. Maximum 4 tags, comma-separated. */
  tags?: string[];
  /** Link to the canonical version of the content. */
  canonical_url?: string;
  /** Cover image URL for the article. Recommended size: 1000x420 pixels. */
  cover_image?: string;
  /** Series name for grouping related articles. */
  series?: string;
  /** Description for Twitter cards and Open Graph cards. */
  description?: string;
}
