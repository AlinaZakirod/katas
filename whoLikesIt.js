/****************************************************************************************
 * https://www.codewars.com/kata/who-likes-it
 Task: You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:


/*****************************************************************************************/

/*************************************** my solution *************************************/
function likes(names) {
  arrayOfNames = names.split(", ");
  console.log(arrayOfNames.length);
  if (arrayOfNames.length <= 0) return "no one likes it";
  else if (arrayOfNames.length < 2) {
    return arrayOfNames[0] + " likes this";
  } else if (arrayOfNames.length < 3) {
    return arrayOfNames[0] + " and " + arrayOfNames[1] + " like it";
  } else if (arrayOfNames.length < 4) {
    return (
      arrayOfNames[0] +
      ", " +
      arrayOfNames[1] +
      " and " +
      arrayOfNames[2] +
      " like it"
    );
  } else
    return (
      arrayOfNames[0] +
      ", " +
      arrayOfNames[1] +
      " and " +
      (arrayOfNames.length - 2) +
      " others like it"
    );
}
// likes("Joe, Max, Silvia, Maria")

/*********************************** the best solution ***********************************/
