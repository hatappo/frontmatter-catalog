/**
 * Marp slide frontmatter schema.
 * @source https://github.com/marp-team/marp-core
 * @source https://marp.app/docs
 * @copyright marp-team (https://github.com/marp-team)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag slide
 * @tag presentation
 */
export default interface Slide {
  /**
   * Enable Marp processing for the document.
   * @default false
   */
  marp?: boolean;
  /**
   * Theme to apply (e.g., "default", "gaia", "uncover").
   * @default "default"
   */
  theme?: string;
  /**
   * Slide dimensions. Built-in themes support "16:9" (1280x720) and "4:3" (960x720).
   * @default "16:9"
   */
  size?: string;
  /**
   * Math typesetting engine. Set to false to disable.
   * @default "mathjax"
   */
  math?: "mathjax" | "katex" | boolean;
  /** Enable pagination display across slides. */
  paginate?: boolean;
  /** Header content for slides. Supports Markdown. */
  header?: string;
  /** Footer content for slides. Supports Markdown. */
  footer?: string;
  /** Background color for slides. */
  backgroundColor?: string;
  /** Background image URL for slides. */
  backgroundImage?: string;
  /** Background position for slides. */
  backgroundPosition?: string;
  /** Background repeat for slides. */
  backgroundRepeat?: string;
  /** Background size for slides. */
  backgroundSize?: string;
  /** Text color for slides. */
  color?: string;
  /** Custom CSS class for slides. */
  class?: string;
}
