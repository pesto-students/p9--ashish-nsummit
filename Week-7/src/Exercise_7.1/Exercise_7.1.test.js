const maxSubarraySum = require("./Exercise_7.1")

test('Max Sub Array Sum',() => {
    expect(maxSubarraySum([1, 2, 3, 4, -10])).toBe(10);
});