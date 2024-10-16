import MockData from "./MockData";
import Product from "./Product";
import { ProductCategory } from "./ProductCategory";

export default class Model {
  #products: Product[];

  constructor() {
    this.#products = MockData.products;
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
    id: number,
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

  deleteProduct(id: number) {
    this.#products = this.#products.filter((product) => product.id !== id);
  }

  getProductsInJSON(): object[] {
    return this.#products.map((product) => product.toJSON());
  }
}
