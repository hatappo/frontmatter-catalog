/**
 * Quarto document frontmatter schema for HTML output.
 * @source https://quarto.org/docs/reference/formats/html.html
 * @copyright quarto-dev (https://github.com/quarto-dev)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag publishing
 * @tag scientific
 * @tag markdown
 */
export default interface Document {
  /** Document title. */
  title?: string;
  /** Subtitle of the document. */
  subtitle?: string;
  /** Author or authors of the document. */
  author?: string | string[] | Author[];
  /**
   * Document date.
   * @format date
   */
  date?: string;
  /** Format pattern for the document date. */
  "date-format"?: string;
  /**
   * Document date modified.
   * @format date
   */
  "date-modified"?: string;
  /** Summary of document content. */
  abstract?: string;
  /** Custom label for the document abstract. */
  "abstract-title"?: string;
  /** Displays the document Digital Object Identifier in the header. */
  doi?: string;
  /** Output format specification. */
  format?: string | FormatOptions;
  /** Theme name, SCSS file, or combination. */
  theme?: string | string[];
  /** One or more CSS stylesheet paths. */
  css?: string | string[];
  /**
   * Disables built-in features like theming and code behavior.
   * @default false
   */
  minimal?: boolean;
  /** Branding information or path to brand file. */
  brand?: string | Record<string, unknown>;
  /**
   * Include an automatically generated table of contents.
   * @default true
   */
  toc?: boolean;
  /**
   * Number of section levels in table of contents.
   * @default 3
   */
  "toc-depth"?: number;
  /**
   * Position of TOC.
   * @default "right"
   */
  "toc-location"?: "body" | "left" | "right" | "left-body" | "right-body";
  /** Custom title for table of contents. */
  "toc-title"?: string;
  /**
   * Layout mode.
   * @default "article"
   */
  "page-layout"?: "article" | "full" | "custom";
  /**
   * Enable section numbering.
   * @default false
   */
  "number-sections"?: boolean;
  /** Code folding behavior. */
  "code-fold"?: boolean | "show" | "hide";
  /** Execution options for code blocks. */
  execute?: ExecuteOptions;
}

/** Author information. */
interface Author {
  /** Author name. */
  name?: string;
  /** Author email. */
  email?: string;
  /** Author affiliation. */
  affiliation?: string;
  /** ORCID identifier. */
  orcid?: string;
}

/** Format-specific options. */
interface FormatOptions {
  /** HTML format options. */
  html?: Record<string, unknown>;
  /** PDF format options. */
  pdf?: Record<string, unknown>;
  /** DOCX format options. */
  docx?: Record<string, unknown>;
}

/** Code execution options. */
interface ExecuteOptions {
  /**
   * Execute code blocks.
   * @default true
   */
  eval?: boolean;
  /**
   * Include code in output.
   * @default true
   */
  echo?: boolean;
  /**
   * Include output in document.
   * @default true
   */
  output?: boolean | "asis";
  /**
   * Include warnings in output.
   * @default true
   */
  warning?: boolean;
  /**
   * Include errors in output.
   * @default false
   */
  error?: boolean;
  /**
   * Cache execution results.
   * @default false
   */
  cache?: boolean;
  /**
   * Freeze execution.
   * @default false
   */
  freeze?: boolean | "auto";
}
