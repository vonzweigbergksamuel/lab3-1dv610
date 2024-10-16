import Product from "./Product";
import { ProductCategory } from "./ProductCategory";

export default class MockData {
  static products: Product[] = [
    new Product(
      "iPhone 12",
      799,
      "Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed Premium)",
      "/static/capybara_barista_transparent-min.png",
      ProductCategory.Electronics
    ),
    new Product(
      "MacBook Air",
      999,
      "Apple MacBook Air 13-inch, 8GB RAM, 256GB SSD Storage - Space Gray (Renewed Premium)",
      "/static/capybara_barista_transparent-min.png",
      ProductCategory.Electronics
    ),
    new Product(
      "iPad Pro",
      899,
      "Apple iPad Pro 12.9-inch, Wi-Fi, 128GB - Space Gray (4th Generation)",
      "/static/capybara_barista_transparent-min.png",
      ProductCategory.Electronics
    ),
    new Product(
      "Apple Watch",
      399,
      "Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band",
      "/static/capybara_barista_transparent-min.png",
      ProductCategory.Electronics
    ),
    new Product(
      "AirPods Pro",
      199,
      "Apple AirPods Pro",
      "/static/capybara_barista_transparent-min.png",
      ProductCategory.Electronics
    ),
  ];
}
