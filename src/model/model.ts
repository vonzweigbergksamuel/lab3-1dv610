import Product from "./Product";
import { ProductCategory } from "./ProductCategory";

export default class Model {
  #products: Product[];

  constructor() {
    this.#products = [];
  }

  public createProduct(
    name: string,
    price: number,
    description: string,
    image: File,
    category: ProductCategory
  ) {
    const product = new Product(name, price, description, image, category);
    this.#products.push(product);
  }
}
