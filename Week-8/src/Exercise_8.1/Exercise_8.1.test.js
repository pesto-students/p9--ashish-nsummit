const {printLL, head} = require('./Exercise_8.0')

test('Reverse Linked List', () =>{
    expect(printLL(head)).toStrictEqual("22->40->12->76->NULL")
});