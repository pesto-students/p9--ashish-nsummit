function paranthesisChecker(str){
	let stack = []

	for( let ch of str){
		switch (ch){
			case '[':
				stack.push(ch)
				continue
			case ']':
				if (stack.pop() == '[') continue;
				else return false;
			case '(':
				stack.push(ch)
				continue
			case ')':
				if (stack.pop() == '(') continue;
				else return false;
			case '{':
				stack.push(ch)
				continue
			case '}':
				if (stack.pop() == '{') continue;
				else return false;
		}
		i++
	}

	return !(!stack)	
}

module.exports = paranthesisChecker