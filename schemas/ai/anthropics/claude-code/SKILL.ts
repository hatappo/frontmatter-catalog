
/**
 * Claude Code Skill frontmatter schema.
 * @source https://code.claude.com/docs/en/skills#frontmatter-reference
 * @copyright Anthropic, Inc. (https://www.anthropic.com/)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag coding-agent
 */
export default interface Skill {
  /**
   * Display name for the skill. Lowercase letters, numbers, and hyphens only (max 64 characters).
   * @default directory name
   */
  name?: string;
  /**
   * What the skill does and when to use it. Claude uses this to decide when to apply the skill.
   * @default first paragraph of markdown content
   */
  description?: string;
  /**
   * Hint shown during autocomplete to indicate expected arguments. Example: `[issue-number]` or `[filename]` `[format]`.
 * @example [issue-number]
 * @example [filename] [format]
   */
  "argument-hint"?: string;
  /**
   * Set to true to prevent Claude from automatically loading this skill. Use for workflows you want to trigger manually with /name.
   * @default false
   */
  "disable-model-invocation"?: boolean;
  /**
   * Set to false to hide from the / menu. Use for background knowledge users shouldn't invoke directly.
   * @default true
   */
  "user-invocable"?: boolean;
  /** Tools Claude can use without asking permission when this skill is active. */
  "allowed-tools"?: string[];
  /** Model to use when this skill is active. */
  model?: string;
  /** Set to fork to run in a forked subagent context. */
  context?: "fork";
  /**
   * Which subagent type to use when context: fork is set.
   * @default "general-purpose"
   */
  agent?: "general-purpose" | "Explore" | "Plan" | string;
  /** Hooks scoped to this skill's lifecycle. See [Hooks in skills and agents](https://code.claude.com/docs/en/hooks#hooks-in-skills-and-agents) for configuration format. */
  hooks?: any;
}
