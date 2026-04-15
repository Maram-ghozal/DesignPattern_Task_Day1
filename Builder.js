class HTMLBuilder {
  constructor() {
    this._title       = "";
    this._image       = "";
    this._description = "";
    this._link        = "";
  }

  setTitle(title) {
    this._title = title;
    return this; 
  }

  setImage(url) {
    this._image = url;
    return this;
  }

  setDescription(description) {
    this._description = description;
    return this;
  }

  setLink(href) {
    this._link = href;
    return this;
  }

  build() {
    return `
<div class="card">
  ${this._image       ? `<img src="${this._image}" alt="card image" />` : ""}
  ${this._title       ? `<h2>${this._title}</h2>` : ""}
  ${this._description ? `<p>${this._description}</p>` : ""}
  ${this._link        ? `<a href="${this._link}">Learn more</a>` : ""}
</div>`.trim();
  }
}


const card = new HTMLBuilder()
  .setTitle("My Card")
  .setImage("https://example.com/photo.jpg")
  .setDescription("This is a beautifully built card.")
  .setLink("https://example.com")
  .build();

console.log(card);