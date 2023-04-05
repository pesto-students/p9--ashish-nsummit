const queue = require('./Exercise_8.6')

test('Queue', () =>{
    expect(queue(5, "1 2 1 3 2 1 4 2")).toStrictEqual(["2", "3"])
});