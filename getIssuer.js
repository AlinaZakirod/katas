/****************************************************************************************
 * https://www.codewars.com/kata/credit-card-issuer-checking
 Task: Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.


/*****************************************************************************************/

/*************************************** my solution *************************************/
function getIssuer(number) {
  // number += "";
  number = number.toString();
  if ((number.startsWith(34) || number.startsWith(37)) && number.length === 15)
    return "Amex";
  else if (number.startsWith(6011) && number.length === 16) return "Discover";
  else if (number.match(/^5[1-5]/) && number.length === 16) return "Mastercard";
  else if (
    number.startsWith(4) &&
    (number.length === 13 || number.length === 16)
  )
    return "Visa";
  else return "Unknown";
}
//    getIssuer(340999887688123)

/*********************************** the best solution ***********************************/
function getIssuer(n) {
  var s = n.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
  if (/^6011\d{12}$/.test(s)) return "Discover";
  if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
  if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
  return "Unknown";
}
