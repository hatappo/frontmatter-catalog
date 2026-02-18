/**
 * Slidev presentation headmatter schema (first slide frontmatter).
 * @source https://sli.dev/custom/#frontmatter-configures
 * @copyright slidevjs (https://github.com/slidevjs)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag slide
 * @tag vue
 */
export default interface Headmatter {
  /**
   * Theme ID, package name, or local path.
   * @default "default"
   */
  theme?: string;
  /**
   * List of addons to use.
   * @default []
   */
  addons?: string[];
  /** Slide title. Auto-inferred from the first heading if not specified. */
  title?: string;
  /**
   * Title template for the web page.
   * @default "%s - Slidev"
   */
  titleTemplate?: string;
  /** Slide information, supports Markdown. Set to false to disable. */
  info?: string | boolean;
  /**
   * Author name for PDF/PPTX export metadata.
   * @default "Your Name Here"
   */
  author?: string;
  /** Keywords for PDF export metadata, comma-separated. */
  keywords?: string;
  /**
   * Enable presenter mode. Can be boolean or 'dev' to enable only in development.
   * @default true
   */
  presenter?: boolean | "dev";
  /**
   * Aspect ratio of slides.
   * @default "16/9"
   */
  aspectRatio?: string;
  /**
   * Real width of the canvas in pixels.
   * @default 980
   */
  canvasWidth?: number;
  /**
   * Color schema for the slides.
   * @default "auto"
   */
  colorSchema?: "auto" | "light" | "dark";
  /**
   * Router mode for Vue Router.
   * @default "history"
   */
  routerMode?: "history" | "hash";
  /** Favicon URL or path. */
  favicon?: string;
  /** Drawing configuration. */
  drawings?: SlidevDrawings;
  /** Monaco editor configuration. */
  monaco?: "dev" | "build" | boolean;
  /** Enable remote control. */
  remoteAssets?: boolean | "dev";
  /** CSS variables to inject. */
  themeConfig?: Record<string, unknown>;
  /** Fonts configuration. */
  fonts?: SlidevFonts;
  /** Default frontmatter for all slides. */
  defaults?: Record<string, unknown>;
  /** Export configuration. */
  exportFilename?: string;
}

/** Slidev drawings configuration. */
interface SlidevDrawings {
  /** Enable drawings. */
  enabled?: boolean;
  /** Persist drawings. */
  persist?: boolean;
  /** Sync drawings across clients. */
  sync?: boolean;
}

/** Slidev fonts configuration. */
interface SlidevFonts {
  /** Sans-serif font family. */
  sans?: string | string[];
  /** Serif font family. */
  serif?: string | string[];
  /** Monospace font family. */
  mono?: string | string[];
  /** Use local fonts. */
  local?: string | string[];
  /** Font provider. */
  provider?: "google" | "none";
}
