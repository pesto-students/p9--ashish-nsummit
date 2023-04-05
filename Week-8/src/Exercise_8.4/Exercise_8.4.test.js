const {detectLoop, head} = require('./Exercise_8.4')

test('Detect Loop in Linked List', () =>{
    expect(detectLoop(head)).toBe(true)
});