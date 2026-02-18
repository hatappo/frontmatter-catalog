/**
 * Cooklang recipe metadata schema.
 * @source https://cooklang.org/docs/spec/
 * @copyright cooklang (https://github.com/cooklang)
 * @attribution Schema structure and descriptions are derived from the source documentation.
 * @tag recipe
 * @tag cooking
 */
export default interface Recipe {
  /** Title of the recipe. */
  title?: string;
  /** Origin point, typically a URL or text reference. */
  source?: string | RecipeSource;
  /** Recipe creator. */
  author?: string;
  /**
   * Portion count; leading number enables scaling.
   * @default 1
   */
  servings?: string | number;
  /** Meal type (e.g., dinner). */
  course?: string;
  /** ISO 639 language code, optionally with ISO 3166 country code. */
  locale?: string;
  /** Combined prep and cook duration. */
  time?: string | RecipeTime;
  /** Complexity level. */
  difficulty?: string;
  /** Recipe's culinary tradition. */
  cuisine?: string;
  /** Dietary suitability (e.g., gluten-free). */
  diet?: string | string[];
  /** Descriptive labels. */
  tags?: string[];
  /** Image URL(s). */
  image?: string | string[];
  /** Contextual notes or background. */
  description?: string;
}

/** Source information for a recipe. */
interface RecipeSource {
  /** Source name or reference. */
  name?: string;
  /** Web address of the source. */
  url?: string;
  /** Author of the source. */
  author?: string;
}

/** Time breakdown for a recipe. */
interface RecipeTime {
  /** Preparation phase duration. */
  prep?: string;
  /** Cooking phase duration. */
  cook?: string;
}
