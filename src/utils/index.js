/**
 * This function calculates the total price of a new order
 * @Param {Array:Cart}
 * @Returns Number
 */

export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)   
}