/****************************************************************************************
 * https: https://www.codewars.com/kata/difference-of-volumes-of-cuboids/javascript
 * Task: In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.

/*****************************************************************************************/


/*************************************** my solution *************************************/

function findDifference(a, b) {
    let volA =a.reduce((total, currentValue) => 
      total*currentValue
    )
    let volB = b.reduce((total, currentValue) => 
      total*currentValue
    )
    let x = Math.abs(volA-volB)
     console.log(x)
     return x
      
  }

/*********************************** the best solution ***********************************/
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }