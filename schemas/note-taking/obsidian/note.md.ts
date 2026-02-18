/**
 * Obsidian note properties (frontmatter) schema.
 * @source https://help.obsidian.md/properties
 * @copyright Obsidian (https://obsidian.md)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag pkm
 * @tag note-taking
 */
export default interface Note {
  // Default properties

  /**
   * Tags are keywords or topics that help you quickly find the notes you want.
   * Tags in YAML should always be formatted as a list.
   */
  tags?: string[];
  /**
   * An alias is an alternative name for a note.
   * Use aliases for things like acronyms, nicknames, or to refer to a note in a different language.
   * Aliases should always be formatted as a list in YAML.
   */
  aliases?: string[];
  /**
   * Assign the name of a custom CSS class (or a list of CSS classes) to make one or more notes look different from others.
   */
  cssclasses?: string[];

  // Obsidian Publish properties

  /**
   * Set `publish: true` to automatically include the note for publishing.
   * Set `publish: false` to ignore the note in Obsidian Publish.
   * `publish: true` overrides excluded folders.
   */
  publish?: boolean;
  /**
   * You can rename the URL to your notes, using permalinks.
   * If someone visits a note using the original URL, they'll be automatically redirected to the permalink.
   * @example "about"
   */
  permalink?: string;
  /**
   * Obsidian automatically generates a description based on the note content, but you can provide your own using description.
   * Overrides the auto-generated description in `<meta name="description">` and the equivalents for `og:description` and `twitter:description`.
   */
  description?: string;
  /**
   * Custom image for the link preview. The path can be an absolute path from the root of your vault or an external URL.
   * Overrides the auto-generated image in `<meta property="og:image">`.
   * `image` and `cover` are identical. Only use one of them.
   * @example "Attachments/Cover image.png"
   * @example "https://example.com/cover%20image.png"
   */
  image?: string;
  /**
   * Custom image for the link preview. The path can be an absolute path from the root of your vault or an external URL.
   * Overrides the auto-generated image in `<meta property="og:image">`.
   * `image` and `cover` are identical. Only use one of them.
   * @example "Attachments/Cover image.png"
   * @example "https://example.com/cover%20image.png"
   */
  cover?: string;

  // Deprecated properties (deprecated in 1.4, support removed in 1.9)

  /**
   * Deprecated alias of tags.
   * @deprecated Use `tags` instead.
   */
  tag?: string[];
  /**
   * Deprecated alias of aliases.
   * @deprecated Use `aliases` instead.
   */
  alias?: string[];
  /**
   * Deprecated alias of cssclasses.
   * @deprecated Use `cssclasses` instead.
   */
  cssclass?: string[];
}
