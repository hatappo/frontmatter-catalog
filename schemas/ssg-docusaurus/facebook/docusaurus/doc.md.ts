/**
 * Docusaurus document frontmatter schema.
 * @source https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
 * @copyright facebook (https://github.com/facebook)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag ssg
 * @tag documentation
 * @tag react
 */
export default interface Doc {
  // Core fields

  /**
   * Unique document identifier.
   * @default File path (without extension)
   */
  id?: string;
  /**
   * Text title of the page.
   * @default Markdown title or id
   */
  title?: string;
  /**
   * Description for SEO meta tags.
   * @default First line of Markdown
   */
  description?: string;
  /** OG image URL for social media sharing. */
  image?: string;

  // Sidebar related

  /**
   * Text shown in the sidebar.
   * @default title
   */
  sidebar_label?: string;
  /** Position in auto-generated sidebar. */
  sidebar_position?: number;
  /** CSS class for sidebar item. */
  sidebar_class_name?: string;
  /** Unique key identifier for i18n. */
  sidebar_key?: string;
  /** Custom properties for sidebar item. */
  sidebar_custom_props?: Record<string, unknown>;
  /** Force display a specific sidebar. */
  displayed_sidebar?: string;

  // Display control

  /**
   * Hide title at the top of the document.
   * @default false
   */
  hide_title?: boolean;
  /**
   * Hide table of contents panel.
   * @default false
   */
  hide_table_of_contents?: boolean;
  /**
   * Minimum heading level for table of contents.
   * @default 2
   */
  toc_min_heading_level?: number;
  /**
   * Maximum heading level for table of contents.
   * @default 3
   */
  toc_max_heading_level?: number;

  // Pagination and editing

  /**
   * Text for next/prev buttons.
   * @default sidebar_label or title
   */
  pagination_label?: string;
  /**
   * Next page document ID. Set to null to disable.
   * @default Next item in sidebar
   */
  pagination_next?: string | null;
  /**
   * Previous page document ID. Set to null to disable.
   * @default Previous item in sidebar
   */
  pagination_prev?: string | null;
  /** Custom edit URL. Set to null to disable. */
  custom_edit_url?: string | null;

  // Metadata and management

  /** SEO keywords array. */
  keywords?: string[];
  /** Custom URL path. */
  slug?: string;
  /** Tags for the document. */
  tags?: DocTag[];
  /**
   * Show only in development.
   * @default false
   */
  draft?: boolean;
  /**
   * Hide in production and exclude from indexing.
   * @default false
   */
  unlisted?: boolean;
  /** Override last update info. */
  last_update?: DocLastUpdate;
  /** Enable number prefix parsing. */
  parse_number_prefixes?: boolean;
}

/** Docusaurus document tag. */
type DocTag = string | { label: string; permalink: string };

/** Docusaurus last update info. */
interface DocLastUpdate {
  /** Last update date. */
  date?: string;
  /** Last update author. */
  author?: string;
}
