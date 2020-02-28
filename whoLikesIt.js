/****************************************************************************************
 * https://www.codewars.com/kata/who-likes-it
 Task: You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:


/*****************************************************************************************/

/*************************************** my solution *************************************/
function likes(arrayOfFans) {
  const fanscount = arrayOfFans.length;
  if (!fanscount) return "no one likes it";
  else if (fanscount === 1) return `${arrayOfFans[0]} likes it`;
  else if (fanscount === 2)
    return `${arrayOfFans[0]} and ${arrayOfFans[1]}like it`;
  else if (fanscount === 3)
    return `${arrayOfFans[0]}, ${arrayOfFans[1]} and ${arrayOfFans[2]}like it`;
  else if (fanscount > 3)
    return `${arrayOfFans[0]}, ${arrayOfFans[1]} and ${fanscount - 2} like it`;
}

// likes("Joe, Max, Silvia, Maria")
