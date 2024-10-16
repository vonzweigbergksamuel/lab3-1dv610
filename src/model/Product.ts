import { randomUUID } from "crypto";
import { ProductCategory } from "./ProductCategory";

export default class Product {
  #id: string;
  #name: string;
  #price: number;
  #description: string;
  #image: File;
  #category: ProductCategory;

  constructor(
    name: string,
    price: number,
    description: string,
    image: File,
    category: ProductCategory
  ) {
    this.#id = randomUUID();

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

  get image(): File {
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

  set image(image: File) {
    this.#image = image;
  }

  set category(category: ProductCategory) {
    this.#category = category;
  }
}
