# Lab 3 - 1dv610

> This project uses the Shopping Cart module to create a visual shopping cart interface. The user can add products to the cart, increment and decrement/remove them from the cart. When added the cart is displayed when clicking a hamburger icon button that toggles a sheet from the right side. There you can se all the products in the cart and information about them such as name, price and quantity. The cart also persists when refreshing the page.

`npm install` to install dependencies
`npm run build` to build the project
`npm run start` to start the project

<br>

## Requirements

- Visual elements to add/increment items to the cart
- Visual elements to remove/decrement items from the cart
- Visual elements to view products in the cart

<br>

## Testing

| Test                                                                   | Expected                        | Actual               | Pass/Fail |
| ---------------------------------------------------------------------- | ------------------------------- | -------------------- | --------- |
| Clicking the add button should increment the item count in the Cart    | Item count should increase by 1 | Count increases by 1 | Pass      |
| Clicking the remove button should decrement the item count in the Cart | Item count should decrease by 1 | Count decreases by 1 | Pass      |
| Clicking the hamburger icon button should display the cart             | Cart should be displayed        | Cart is displayed    | Pass      |
| Refreshing the page should not clear the cart                          | Cart should persist             | Cart persists        | Pass      |

<br>

**Video**

https://youtu.be/etq2s2QYstU
