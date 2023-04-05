const paranthesisChecker = require('./Exercise_8.3')

test('Paranthesis Checker', () =>{
    expect(paranthesisChecker("[()]{}{()()}")).toBe(true)
});