/****************************************************************************************
/ *  https://www.codewars.com/kata/5878520d52628a092f0002d0

/ * Task: Given a string, return a new string that has transformed based on the input:
 Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:
"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

/*****************************************************************************************/

/*************************************** my solution *************************************/
function stringTransformer(string) {
  const arrayFromString = [...string];
  return arrayFromString
    .map(eachLetter =>
      eachLetter === eachLetter.toUpperCase()
        ? eachLetter.toLowerCase()
        : eachLetter.toUpperCase()
    )
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}
stringTransformer("Input Example");

/*********************************** the best solution ***********************************/

const stringTransformer = s =>
  s
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map(invertCase)
    .join("");
const invertCase = c => (/[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase());
