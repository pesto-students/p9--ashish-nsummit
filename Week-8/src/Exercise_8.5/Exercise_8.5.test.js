const nextGreaterElement = require('./Exercise_8.5')

test('Next Greater Element', () =>{
    expect(nextGreaterElement([6,8,0,1,3])).toStrictEqual([8, -1, 1, 3, -1])
});