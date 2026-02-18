/**
 * Eleventy template frontmatter schema.
 * @source https://www.11ty.dev/docs/data-frontmatter/
 * @copyright 11ty (https://github.com/11ty)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag ssg
 * @tag javascript
 */
export default interface Template {
  /** Page title. */
  title?: string;
  /**
   * Changes where the file is written to the file system.
   * Can contain variables and shortcodes.
   */
  permalink?: string;
  /**
   * Computed data that can include variables and shortcodes.
   * Only `permalink` and `eleventyComputed` can contain variables.
   */
  eleventyComputed?: Record<string, unknown>;
  /** Layout template to use. */
  layout?: string;
  /** Tags for collections. */
  tags?: string | string[];
  /** Page date override. */
  date?: string;
  /**
   * Exclude from collections and output.
   * @default false
   */
  eleventyExcludeFromCollections?: boolean;
  /** Template data that will be available in templates. */
  [key: string]: unknown;
}
