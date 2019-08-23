
/****************************************************************************************
 * https: https://www.codewars.com/kata/century-from-year/train/javascript
 * Task: Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
Task :
Given a year, return the century it is in.


/*****************************************************************************************/


/*************************************** my solution *************************************/
function century(year) {
    let dividedYear = Number(year) / 100
    if(dividedYear === 0){
      return(dividedYear);
    } else {
      return  Math.ceil(dividedYear) 
    }
  
  }


/*********************************** the best solution ***********************************/

const century = year => Math.ceil(year/100)
