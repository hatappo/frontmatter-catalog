/**
 * Hugo content front matter schema.
 * @source https://gohugo.io/content-management/front-matter/
 * @copyright gohugoio (https://github.com/gohugoio)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag ssg
 * @tag hugo
 */
export default interface Content {
  /** Page title. */
  title?: string;
  /** Page description, inserted into the HTML head as a meta tag. */
  description?: string;
  /**
   * Page creation date. Supports multiple formats including ISO 8601 and Unix timestamp.
   * @format date-time
   */
  date?: string;
  /**
   * If true, the page will not be rendered unless the --buildDrafts flag is passed.
   * @default false
   */
  draft?: boolean;
  /**
   * Page last modification date.
   * @format date-time
   */
  lastmod?: string;
  /**
   * If set, the page will not be rendered unless the --buildFuture flag is passed when the publish date is in the future.
   * @format date-time
   */
  publishDate?: string;
  /**
   * If set, the page will not be rendered unless the --buildExpired flag is passed when the expiry date has passed.
   * @format date-time
   */
  expiryDate?: string;
  /** Used for ordering pages in a collection. */
  weight?: number;
  /** Override the last segment of the URL path. */
  slug?: string;
  /** Override the entire URL path. */
  url?: string;
  /** Specify a particular template for the page, overriding the default lookup. */
  layout?: string;
  /** Content type for the page. */
  type?: string;
  /** Aliases for the page, creating redirects from these paths. */
  aliases?: string[];
  /** Keywords for the page, used for SEO. */
  keywords?: string[];
  /** Output formats for the page. */
  outputs?: string[];
  /** Custom page parameters. */
  params?: Record<string, unknown>;
  /** Resource definitions for the page. */
  resources?: ContentResource[];
  /** Cascade configuration to pass down to descendant pages. */
  cascade?: Record<string, unknown> | Record<string, unknown>[];
  /** Build options for the page. */
  build?: ContentBuild;
  /** Menu entries for the page. */
  menus?: string | string[] | Record<string, unknown>;
  /** Translation key for linking translated pages. */
  translationKey?: string;
}

/** Resource definition for Hugo content. */
interface ContentResource {
  /** Resource name pattern. */
  name?: string;
  /** Source path pattern. */
  src?: string;
  /** Resource title. */
  title?: string;
  /** Resource parameters. */
  params?: Record<string, unknown>;
}

/** Build options for Hugo content. */
interface ContentBuild {
  /** List of output formats to render. */
  list?: "always" | "local" | "never";
  /** Whether to publish the page to the public directory. */
  publishResources?: boolean;
  /** Whether to render the page. */
  render?: "always" | "link" | "never";
}
