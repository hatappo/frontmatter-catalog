/**
 * Nuxt Content document frontmatter schema (native parameters only).
 * @source https://content.nuxt.com/guide/writing/markdown
 * @copyright nuxt (https://github.com/nuxt)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag cms
 * @tag vue
 * @tag nuxt
 */
export default interface Document {
  /**
   * Title of the page, will also be injected in metas.
   * @default First `<h1>` element
   */
  title?: string;
  /**
   * Description of the page, will be shown below the title and injected into the metas.
   * @default First `<p>` element
   */
  description?: string;
  /**
   * Define if the page will be included in `queryCollectionNavigation` return value.
   * @default true
   */
  navigation?: boolean;
}
