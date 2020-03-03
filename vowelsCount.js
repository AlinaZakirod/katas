// ____________task: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Task: Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.
// ____________my solution_______________

 function getCount(str){
  let vowelsCount=0;

  const vowels=['a', "e", 'i', 'o', 'u'];
  for (let i=0; i<str.length; i++){
    for (let j=0; j<vowels.length; j++){
      if(str[i] === vowels[j]){
        vowelsCount ++;
      }
    }
  }

  return vowelsCount;
}


// ____________best solution_____________
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}