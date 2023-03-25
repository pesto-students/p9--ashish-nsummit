const {printLL, head} = require('./Exercise_8.2')

test('Rotate Linked List', () =>{
    expect(printLL(head)).toStrictEqual("4->20->85->15->NULL")
});