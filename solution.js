function palindrome(str) {
    // your code here!
    let len = str.length;
    str = str.toLowerCase();
 
    for(let index=0;index<len/2;index++){
        if(str[index]!==str[len-1-index]){
            return false;
        }
    }
    return true;
    //code end. don't edit anything below
  }


module.exports = palindrome
// const str = prompt('Enter a string: ');

// call the function
const value = palindrome('racecar');

console.log(value);