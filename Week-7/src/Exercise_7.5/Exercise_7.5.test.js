const pairWithDifference = require("./Exercise_7.5")

test('Pair with difference',() => {
    expect(pairWithDifference([5, 10, 3, 2, 50, 80], 78)).toBe(1);
});