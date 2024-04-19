function isAnagram(s1,s2){
  if(s1.split('').sort().join('')==s2.split('').sort().join(''))
    return true;
  return false;
}

const str1 = 'Satish';
const str2 = 'Satsh';
console.log(isAnagram(str1,str2)); 
