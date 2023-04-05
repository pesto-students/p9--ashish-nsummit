const buyAndSellStock = require("./Exercise_7.4")

test('Buy & Sell Stocks',() => {
    expect(buyAndSellStock([7, 1, 5, 3, 6, 4])).toBe(7);
});