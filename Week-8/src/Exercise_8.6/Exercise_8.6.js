function enqueue(value, s1, s2){
 
    while(s1.length != 0){
      s2.push(s1.pop())
    }
   
    s1.push(value)
    
    while(s2.length != 0){
      s1.push(s2.pop())
    }
  }
  
  function dequeue(s1){
    if (s1.length == 0){
      return 0
    }
    let dequeueValue = s1[s1.length - 1]
    s1.pop()
    return dequeueValue
  }
  
  function queue(count, query){
    let s1 = []
    let s2 = []
    let output = []
    query = query.split(" ")
  
    for(let i = 0; i<=count; i++){
      
      if (query[i] == "1"){
        enqueue(query[i+1], s1, s2)
        i++
      }
      if (query[i] == "2"){
        output.push(dequeue(s1))
      }
    }
    
    return output
  }
  
//   console.log(queue(5, "1 2 1 3 2 1 4 2"))

module.exports = queue