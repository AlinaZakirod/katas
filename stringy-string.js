
/***********************
 * https: https://www.codewars.com/kata/stringy-strings/train/javascript
 * Task:
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.

/*****************************************************************************************/


/*************************************** my solution *************************************/

function stringy(size) {
    let str = "";
    for(let i = 1; i <= size; i++){
      if(i % 2 === 0){
     str = str + '0'
      }
      else {
        str = str + '1'
      }
     }
     return str ;
   };


/*********************************** the best solution ***********************************/

function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
  }