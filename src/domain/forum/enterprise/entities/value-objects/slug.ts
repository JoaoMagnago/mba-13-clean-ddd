export class Slug {
  public value: string

  private constructor(value: string) {
    this.value = value
  }

  static create(slug: string) {
    return new Slug(slug)
  }

  /**
   * Recieves a string and normalize it as a slug
   *
   * Example: "An example title" => "an-example-title
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim() // remove white spaces in the start and end of string
      .replace(/\s+/g, '-') // replace all white spaces for hyphens
      .replace(/[^\w-]+/g, '') // removes everything that does not match a word
      .replace(/_/g, '-') // replaces all underscores for a hyphen
      .replace(/_/g, '-') // replaces all underscores for a hyphen
      .replace(/--+/g, '-') // removes all hyphen duplications by the end of slug creation
      .replace(/-$/g, '-') // removes a hyphen from end of final slug if there is one

    return new Slug(slugText)
  }
}
