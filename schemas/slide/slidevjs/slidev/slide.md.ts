/**
 * Slidev individual slide frontmatter schema.
 * @source https://sli.dev/custom/#frontmatter-configures
 * @copyright slidevjs (https://github.com/slidevjs)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag slide
 * @tag vue
 */
export default interface Slide {
  /** Layout component to apply to the slide. */
  layout?: string;
  /** Custom click count for the slide. */
  clicks?: number;
  /** Transition effect for this slide. */
  transition?: string | SlidevTransition;
  /** Custom zoom scale for the slide. */
  zoom?: number;
  /** Hide the slide from the presentation. */
  disabled?: boolean;
  /** Hide the slide from the presentation. Alias for disabled. */
  hide?: boolean;
  /** Hide the slide in presenter view. */
  hideInToc?: boolean;
  /** Slide-specific class names. */
  class?: string;
  /** Background image URL. */
  background?: string;
  /** Background color. */
  backgroundSize?: string;
  /** Preload next slide. */
  preload?: boolean;
}

/** Slidev transition configuration. */
interface SlidevTransition {
  /** Transition name or custom CSS. */
  name?: string;
  /** Transition duration in milliseconds. */
  duration?: number;
}
