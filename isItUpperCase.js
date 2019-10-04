/****************************************************************************************
 * https: https://www.codewars.com/kata/is-the-string-uppercase/train/javascript
 * Task: Is the string uppercase?
Task
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:


/*****************************************************************************************/


/*************************************** my solution *************************************/
String.prototype.isUpperCase = function() {
  if(this == this.toUpperCase()){
    return true
} else return false
}

/*********************************** the best solution ***********************************/
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

