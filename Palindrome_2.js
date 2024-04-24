/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


function transform(s){
    var str = '';
    for(let i=0;i<s.length;i++){
      if(s[i]===' ' || s[i]===',' || s[i]==='!' || s[i]==='"' || s[i]==="'" || s[i]==='?' || s[i]==='.'){
        
      }
      else
      str+=s[i];
    }
    return str;
  }
  
  
  function reverse(s){
    var str = "";
    for(var i=s.length-1;i>=0;i--){
      str += s[i];
    }
    return str;
  }
  
  function isPalindrome(s1){
    var s1 = s1.toLowerCase();
    s1 = transform(s1);
    var s2 = reverse(s1);
    if(s1==s2)
      return true;
    else
      return false;
  };



  module.exports = isPalindrome;