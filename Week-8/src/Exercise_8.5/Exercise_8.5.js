function nextGreaterElement(str){
	let stack = []      
    for (let i = 0; i<str.length; i++){
      let valueToPush = -1
      for(let j = i; j<str.length; j++){

        if(str[i] < str[j]){
          valueToPush = str[j];
          console.log(valueToPush)
          break;
        }
         
      }
      stack.push(valueToPush)
    }
	return stack	
}

module.exports = nextGreaterElement