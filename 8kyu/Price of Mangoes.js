function mango(quantity, price) {
    // Calculate the number of mangoes that must be paid for
    const paidMangoes = Math.floor(quantity / 3) * 2 + (quantity % 3);

    // Calculate the total cost
    return paidMangoes * price;
}
