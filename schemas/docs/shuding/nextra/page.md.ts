/**
 * Nextra documentation page frontmatter schema.
 * @source https://nextra.site/docs/docs-theme/page-configuration
 * @copyright shuding (https://github.com/shuding)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag docs
 * @tag react
 * @tag nextjs
 */
export default interface Page {
  /** Display name for page in sidebar/navbar. */
  title?: string;
  /**
   * Determines if shown in navbar ('page') or sidebar ('doc').
   * @default "doc"
   */
  type?: "page" | "doc";
  /**
   * Controls visibility in navigation.
   * @default "normal"
   */
  display?: "normal" | "hidden" | "children";
  /** Per-page theme customization object. */
  theme?: PageTheme;
  /** External or internal link URL. */
  href?: string;
  /**
   * Tells Nextra that a folder has an index page.
   * @default false
   */
  asIndexPage?: boolean;
  /** Alternative title for sidebar display. */
  sidebarTitle?: string;
}

/** Theme configuration for Nextra pages. */
interface PageTheme {
  /**
   * Show/hide breadcrumb navigation.
   * @default true
   */
  breadcrumb?: boolean;
  /**
   * Sidebar item collapsed state.
   * @default false
   */
  collapsed?: boolean;
  /**
   * Display copy page button.
   * @default true
   */
  copyPage?: boolean;
  /**
   * Display footer.
   * @default true
   */
  footer?: boolean;
  /**
   * Page layout style.
   * @default "default"
   */
  layout?: "default" | "full";
  /**
   * Display navigation bar.
   * @default true
   */
  navbar?: boolean;
  /**
   * Show pagination controls.
   * @default true
   */
  pagination?: boolean;
  /**
   * Display sidebar.
   * @default true
   */
  sidebar?: boolean;
  /**
   * Show last updated timestamp.
   * @default true
   */
  timestamp?: boolean;
  /**
   * Display table of contents.
   * @default true
   */
  toc?: boolean;
  /**
   * Text styling preset.
   * @default "default"
   */
  typesetting?: "default" | "article";
}
