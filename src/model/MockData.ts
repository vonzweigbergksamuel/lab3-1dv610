import Product from "./Product";
import { ProductCategory } from "./ProductCategory";

export default class MockData {
  static products: Product[] = [
    new Product(
      "iPhone 12",
      799,
      "Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed Premium)",
      "https://m.media-amazon.com/images/I/71ZOtNdaZCL._FMwebp__.jpg",
      ProductCategory.Electronics
    ),
    new Product(
      "MacBook Air",
      999,
      "Apple MacBook Air 13-inch, 8GB RAM, 256GB SSD Storage - Space Gray (Renewed Premium)",
      "https://m.media-amazon.com/images/I/71k3fJh5EwL._FMwebp__.jpg",
      ProductCategory.Electronics
    ),
    new Product(
      "iPad Pro",
      899,
      "Apple iPad Pro 12.9-inch, Wi-Fi, 128GB - Space Gray (4th Generation)",
      "https://m.media-amazon.com/images/I/81SGb5l+lZL._FMwebp__.jpg",
      ProductCategory.Electronics
    ),
    new Product(
      "Apple Watch",
      399,
      "Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band",
      "https://m.media-amazon.com/images/I/71bf9IpGjtL._FMwebp__.jpg",
      ProductCategory.Electronics
    ),
    new Product(
      "AirPods Pro",
      199,
      "Apple AirPods Pro",
      "https://m.media-amazon.com/images/I/71zny7BTRlL._FMwebp__.jpg",
      ProductCategory.Electronics
    ),
  ];
}
