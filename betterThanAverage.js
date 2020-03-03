/****************************************************************************************
 * https://www.codewars.com/kata/5601409514fc93442500010b
 Task: There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!


/*****************************************************************************************/

/*************************************** my solution *************************************/

function betterThanAverage(classPoints, yourPoints) {
    let totalPoints=0
    for(let i = 0; i<classPoints.length; i++){
      totalPoints += classPoints[i]
    }
    let avgPoints = totalPoints/classPoints.length;
    if( avgPoints<yourPoints) return true; else return false
  }
  
  /*********************************** the best solution ***********************************/

  function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }