/**
 * Jekyll content front matter schema.
 * @source https://jekyllrb.com/docs/front-matter/
 * @copyright Jekyll (https://github.com/jekyll)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag ssg
 * @tag ruby
 */
export default interface Content {
  // Global predefined variables

  /**
   * Layout file to use (without extension). Set to `null` to disable, `none` to force disable.
   */
  layout?: string | null;
  /**
   * Customize the URL for the processed blog post.
   * @default "/year/month/day/title.html"
   */
  permalink?: string;
  /**
   * Set to false to exclude from generation.
   * @default true
   */
  published?: boolean;

  // Post-specific predefined variables

  /**
   * Date for the post. Overrides the date from the filename.
   * Format: YYYY-MM-DD HH:MM:SS +/-TTTT (timezone and time are optional).
   * @format date-time
   * @example "2024-01-15 12:00:00 +0900"
   */
  date?: string;
  /**
   * Single category for the post.
   */
  category?: string;
  /**
   * Multiple categories. Can be specified as a YAML list or a space-separated string.
   */
  categories?: string[] | string;
  /**
   * Tags for the post. Can be specified as a YAML list or a space-separated string.
   */
  tags?: string[] | string;
}
