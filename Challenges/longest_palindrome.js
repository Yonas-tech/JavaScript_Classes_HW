
longestPalindrome = function(s){
                                console.log('\ns: ' + s)
  //your code here
  if (s == null) return null;

  function isReversible(str){
    let reversed = str.split(" ").map(word => word.split("").reverse().join(""))
    return reversed.join(" ") === str
  }
  let maxLength=0;
  let maxLenString = ""
  if(s.length>1)
    for(let i=0;i<s.length-1; i++){
      let currentString = s.slice(i,s.length);              console.log('current_i-th_String: '+currentString)        
      if(maxLength > currentString.length){break}
      let k = i+1                          
      while( (k<s.length+2) && (maxLength < currentString.length)){  //
                                                            console.log('i, k: '+ i + ", "+k)
        let current_i_k_Partition = s.slice(i,k);           console.log('current_i-k_string: '+ current_i_k_Partition)
        //if reversible
        if (isReversible(current_i_k_Partition)){
                                                            console.log(current_i_k_Partition + " >>> is a Polindrome")
          // if currentLength > maxLength
          if(current_i_k_Partition.length > maxLength ){
            // maxLength = currentLength
            maxLength = current_i_k_Partition.length
            maxLenString = current_i_k_Partition;           console.log("Current Max: "+maxLength)
          }    
            // else, do nothing
        } 
        k++;
        // else, do nothing
      }
    }
  else if(s.length==1){
    maxLength = 1;
    maxLenString = s;
  }
  console.log('Answer: ' + maxLength)
  return maxLength
}


// TEST
let answer = ['a', 'aa', 'baa', 'aab', 'abcde', 'baabcd','baablkj12345432133d',
                'noon', 'civic', 'racecar', 'level',  'mom'].map(str => longestPalindrome(str))
console.log(answer)
console.log('Should match: [1, 2, 2, 2, 1, 4, 9, 4, 5, 7, 5, 3]')
