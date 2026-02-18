/**
 * VitePress page frontmatter schema.
 * @source https://vitepress.dev/reference/frontmatter-config
 * @copyright vuejs (https://github.com/vuejs)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag ssg
 * @tag vue
 * @tag documentation
 */
export default interface Page {
  // All pages

  /** Page title. Overrides site-level config. */
  title?: string;
  /** Title suffix. Overrides site-level config. Set to false to disable. */
  titleTemplate?: string | boolean;
  /** Page description. Overrides site-level config. */
  description?: string;
  /** Additional meta tags to inject to the page. */
  head?: HeadConfig[];

  // Default theme only

  /**
   * Page layout.
   * @default "doc"
   */
  layout?: "doc" | "home" | "page";
  /**
   * Whether to show navigation bar.
   * @default true
   */
  navbar?: boolean;
  /**
   * Whether to show sidebar.
   * @default true
   */
  sidebar?: boolean;
  /**
   * Position of aside component. Set to false to disable.
   * @default true
   */
  aside?: boolean | "left";
  /**
   * Header levels to show in outline. Set to false to disable.
   * @default 2
   */
  outline?: number | [number, number] | "deep" | false;
  /**
   * Whether to show last updated time.
   * @default true
   */
  lastUpdated?: boolean | Date;
  /**
   * Whether to show edit link.
   * @default true
   */
  editLink?: boolean;
  /**
   * Whether to show footer.
   * @default true
   */
  footer?: boolean;
  /** Custom class to add to the page. */
  pageClass?: string;
  /** Hero element for home layout. */
  hero?: VitePressHero;
  /** Features element for home layout. */
  features?: VitePressFeature[];
  /** Force show home page elements. */
  isHome?: boolean;
}

/** VitePress head config entry. */
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string];

/** VitePress hero configuration. */
interface VitePressHero {
  /** Hero name (small text above title). */
  name?: string;
  /** Hero title. */
  text?: string;
  /** Hero tagline. */
  tagline?: string;
  /** Hero image. */
  image?: string | { src: string; alt?: string };
  /** Hero action buttons. */
  actions?: VitePressHeroAction[];
}

/** VitePress hero action button. */
interface VitePressHeroAction {
  /** Button theme. */
  theme?: "brand" | "alt";
  /** Button text. */
  text: string;
  /** Button link. */
  link: string;
}

/** VitePress feature item. */
interface VitePressFeature {
  /** Feature icon. */
  icon?: string | { src: string; alt?: string; width?: string; height?: string };
  /** Feature title. */
  title: string;
  /** Feature details. */
  details?: string;
  /** Feature link. */
  link?: string;
  /** Feature link text. */
  linkText?: string;
  /** Feature link target. */
  rel?: string;
}
