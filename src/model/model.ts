import MockData from "./MockData";
import Product from "./Product";
import { ProductCategory } from "./ProductCategory";

declare global {
  // eslint-disable-next-line no-var
  var modelInstance: Model | undefined;
}

export default class Model {
  #products: Product[] = [];

  constructor() {
    if (global.modelInstance) {
      return global.modelInstance;
    }

    this.#products = MockData.products;
    global.modelInstance = this;
    return this;
  }

  get products(): Product[] {
    return this.#products;
  }

  set products(products: Product[]) {
    this.#products = products;
  }

  createProduct(
    name: string,
    price: number,
    description: string,
    image: string,
    category: ProductCategory
  ) {
    const product = new Product(name, price, description, image, category);
    this.#products.push(product);
  }

  updateProduct(
    id: string | number,
    name?: string,
    price?: number,
    description?: string,
    image?: string,
    category?: ProductCategory
  ) {
    const product = this.#products.find((product) => product.id === id);
    if (product) {
      if (name) product.name = name;
      if (price) product.price = price;
      if (description) product.description = description;
      if (image) product.image = image;
      if (category) product.category = category;
    }
  }

  deleteProduct(id: string | number) {
    this.#products = this.#products.filter((product) => product.id !== id);
  }
}
