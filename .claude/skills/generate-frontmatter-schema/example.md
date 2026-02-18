# 例

生成したスキーマの例を2つ掲載します。

1つ目の例は Claude Code Skill のマークダウンの frontmatter のスキーマです。

```typescript
/**
 * Claude Code Skill frontmatter schema.
 * @source https://code.claude.com/docs/en/skills#frontmatter-reference
 * @copyright Anthropic, Inc. (https://www.anthropic.com/)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag coding-agents
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
```

2つ目の例は Astro Paper テーマのブログ投稿のマークダウンの frontmatter のスキーマです。

```typescript

/**
 * Astro Paper post frontmatter schema.
 * @copyright satnaing (https://github.com/satnaing)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag astro
 * @tag theme
 */
export default interface Post {
  /** Title of the post. It is the main heading of the post. */
  title: string;
  /** Description of the post. Used in post excerpt and site description of the post. */
  description: string;
  /**
   * Published datetime in ISO 8601 format.
   * @format date-time
   */
  pubDatetime: string;
  /**
   * Modified datetime in ISO 8601 format. Only add this when the post is modified.
   * @format date-time
   */
  modDatetime?: string;
  /**
   * Author of the post.
   * @default SITE.author
   */
  author?: string;
  /** Slug for the post. If not specified, it will be auto-generated from the file name. */
  slug?: string;
  /**
   * Whether to display this post in the featured section of home page.
   * @default false
   */
  featured?: boolean;
  /**
   * Mark the post as unpublished.
   * @default false
   */
  draft?: boolean;
  /**
   * Related keywords for this post.
   * @default ["others"]
   */
  tags?: string[];
  /**
   * OG image of the post. Used for social media sharing.
   * @default SITE.ogImage
   */
  ogImage?: string;
  /**
   * Canonical URL of the post for previously published articles.
   * @default Astro.site + pathname
   */
  canonicalURL?: string;
  /**
   * Whether to hide the edit post button.
   * @default false
   */
  hideEditPost?: boolean;
  /**
   * Timezone for the post in IANA format.
   * @default SITE.timezone
   */
  timezone?: string;
}
```