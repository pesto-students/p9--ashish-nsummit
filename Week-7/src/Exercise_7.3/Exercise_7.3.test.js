const sortOneTwoZero = require("./Exercise_7.3")

test('Sort 1, 2 & 0',() => {
    expect(sortOneTwoZero([0,2,1,1,0,2])).toStrictEqual([0,0,1,1,2,2]);
});