/**
 * OpenAI Codex CLI skill frontmatter schema.
 * @source https://developers.openai.com/codex/skills/
 * @source https://github.com/openai/codex
 * @copyright OpenAI (https://github.com/openai)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag coding-agent
 */
export default interface Skill {
  /** The skill identifier; used for references and display. */
  name: string;
  /** Defines scope and trigger conditions; determines implicit invocation matching. */
  description: string;
  /** Interface configuration for Codex app integration. */
  interface?: SkillInterface;
  /** Policy configuration for skill behavior. */
  policy?: SkillPolicy;
  /** Dependencies configuration for tools. */
  dependencies?: SkillDependencies;
}

/** Interface configuration for Codex app integration. */
interface SkillInterface {
  /** User-facing name for the Codex app. */
  display_name?: string;
  /** User-facing description. */
  short_description?: string;
  /** Path to small logo (.svg). */
  icon_small?: string;
  /** Path to large logo (.png). */
  icon_large?: string;
  /**
   * Brand color in hex format.
   * @pattern ^#[0-9A-Fa-f]{6}$
   */
  brand_color?: string;
  /** Surrounding prompt for skill usage. */
  default_prompt?: string;
}

/** Policy configuration for skill behavior. */
interface SkillPolicy {
  /**
   * Set false to disable automatic invocation.
   * @default true
   */
  allow_implicit_invocation?: boolean;
}

/** Dependencies configuration for tools. */
interface SkillDependencies {
  /** List of tool dependencies. */
  tools?: SkillTool[];
}

/** Tool dependency configuration. */
interface SkillTool {
  /**
   * Type of the tool.
   * @example "mcp"
   */
  type: string;
  /** Tool identifier. */
  value: string;
  /** Purpose explanation. */
  description?: string;
  /**
   * Transport method.
   * @example "streamable_http"
   */
  transport?: string;
  /** Tool endpoint URL. */
  url?: string;
}
