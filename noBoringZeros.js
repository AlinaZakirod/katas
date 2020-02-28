/****************************************************************************************
 https://www.codewars.com/kata/570a6a46455d08ff8d001002
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

/*****************************************************************************************/

/*************************************** my solution *************************************/
function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10;
  }
  return n;
}

/*********************************** the best solution ***********************************/

function noBoringZeros(n) {
  while (n % 10 == 0 && n != 0) {
    n /= 10;
  }
  return n;
}
