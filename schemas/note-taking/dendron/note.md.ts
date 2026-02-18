/**
 * Dendron note frontmatter schema.
 * @source https://wiki.dendron.so/notes/ffec2853-c0e0-4165-a368-339db12c8e4b/
 * @copyright dendronhq (https://github.com/dendronhq)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag pkm
 * @tag note-taking
 * @tag vscode
 */
export default interface Note {
  // Required fields

  /** Globally unique identifier. Used for URL generation and ensuring index uniqueness. */
  id: string;
  /** Note title. Used as node label in graph view. */
  title: string;
  /** Note creation time as Unix timestamp. */
  created: number;
  /** Note update time as Unix timestamp. */
  updated: number;

  // Optional fields (Reserved Keys)

  /** Description displayed in lookup results. */
  desc?: string;
  /** Reference to parent node. */
  parent?: string;
  /** Array of child node references. */
  children?: string[];
  /** Absolute file path to the note. */
  uri?: string;
  /** Frontmatter tags. */
  tags?: string[];

  // Publishing options

  /**
   * When false, exclude from publishing.
   * @default true
   */
  published?: boolean;
  /** Canonical URL for the note. */
  canonicalUrl?: string;
  /**
   * Exclude from Google indexing.
   * @default false
   */
  noindex?: boolean;
  /** Navigation order in publishing (value greater than 1). */
  nav_order?: number;
  /** Exclude from navigation. */
  nav_exclude?: boolean;

  // Collection related

  /**
   * Whether the note has a collection.
   * @default false
   */
  has_collection?: boolean;
  /**
   * Date for the note.
   * @default created value
   */
  date?: number;
  /** Skip levels in hierarchy. */
  skipLevels?: number;
  /**
   * Sort order for collections.
   * @default "ascending"
   */
  sort_order?: "ascending" | "descending";

  // SEO settings

  /** Image URL for Twitter cards. */
  image?: string;
  /** Content for og:description meta tag. */
  excerpt?: string;
}
