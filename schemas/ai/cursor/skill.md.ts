/**
 * Cursor skill frontmatter schema.
 * @source https://cursor.com/docs/context/skills
 * @copyright Cursor (https://cursor.com)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag coding-agent
 */
export default interface Skill {
  /**
   * Skill identifier. Lowercase letters, numbers, and hyphens only.
   * Must match the parent folder name.
   * @pattern ^[a-z0-9-]+$
   */
  name: string;
  /** Describes what the skill does and when to use it. Used by the agent to determine relevance. */
  description: string;
  /** License name or reference to a bundled license file. */
  license?: string;
  /** Environment requirements (system packages, network access, etc.). */
  compatibility?: string;
  /** Arbitrary key-value mapping for additional metadata. */
  metadata?: Record<string, unknown>;
  /**
   * When true, the skill is only included when explicitly invoked via /skill-name.
   * The agent will not automatically apply it based on context.
   * @default false
   */
  "disable-model-invocation"?: boolean;
}
