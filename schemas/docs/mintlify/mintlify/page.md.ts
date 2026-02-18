/**
 * Mintlify documentation page frontmatter schema.
 * @source https://www.mintlify.com/docs/organize/pages
 * @copyright mintlify (https://github.com/mintlify)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag docs
 * @tag api
 * @tag mdx
 */
export default interface Page {
  /** The title of your page that appears in navigation and browser tabs. */
  title: string;
  /** Brief summary displayed under title and enhancing SEO. */
  description?: string;
  /** Abbreviated title shown in sidebar navigation. */
  sidebarTitle?: string;
  /** Visual indicator from Font Awesome, Lucide, Tabler, external URL, or local file. */
  icon?: string;
  /** Font Awesome icon style. */
  iconType?: "regular" | "solid" | "light" | "thin" | "sharp-solid" | "duotone" | "brands";
  /** Label appearing alongside page title in sidebar. */
  tag?: string;
  /**
   * Removes page from sidebar while keeping URL accessible; disables search indexing.
   * @default false
   */
  hidden?: boolean;
  /**
   * Prevents search engine indexing.
   * @default false
   */
  noindex?: boolean;
  /**
   * Layout control for the page.
   * @default "default"
   */
  mode?: "default" | "wide" | "custom" | "frame" | "center";
  /** Specification for interactive API playground. */
  api?: string;
  /** OpenAPI specification for interactive API playground. */
  openapi?: string;
  /** External link destination for navigation items. */
  url?: string;
  /** Shows/hides "Last modified on [date]" text. Inherits global setting if not specified. */
  timestamp?: boolean;
  /** Search discovery terms not appearing in content. */
  keywords?: string[];
}
