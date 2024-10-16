import { ProductCategory } from "./ProductCategory";

export default class Product {
  #id: number;
  #name: string;
  #price: number;
  #description: string;
  #image: string;
  #category: ProductCategory;

  constructor(
    name: string,
    price: number,
    description: string,
    image: string,
    category: ProductCategory
  ) {
    // Each product has a unique Id, which is a number and 10 digits long.
    this.#id = Number(Date.now().toString().slice(-10));

    this.#name = name;
    this.#price = price;
    this.#description = description;
    this.#image = image;
    this.#category = category;
  }

  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get price(): number {
    return this.#price;
  }

  get description(): string {
    return this.#description;
  }

  get image(): string {
    return this.#image;
  }

  get category(): ProductCategory {
    return this.#category;
  }

  set name(name: string) {
    this.#name = name;
  }

  set price(price: number) {
    this.#price = price;
  }

  set description(description: string) {
    this.#description = description;
  }

  set image(image: string) {
    this.#image = image;
  }

  set category(category: ProductCategory) {
    this.#category = category;
  }

  toJSON() {
    return {
      id: this.#id,
      name: this.#name,
      price: this.#price,
      description: this.#description,
      image: this.#image,
      category: this.#category,
    };
  }
}
