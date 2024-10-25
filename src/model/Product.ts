import { randomUUID } from "crypto";
import { ProductCategory } from "./ProductCategory";

export default class Product {
  #id: string;
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
    category: ProductCategory,
    id?: string
  ) {
    this.#id = id || randomUUID().slice(0, 8);
    this.#name = name;
    this.#price = price;
    this.#description = description;
    this.#image = image;
    this.#category = category;
  }

  get id(): string {
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

  inJSON(): object {
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
