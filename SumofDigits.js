/* Problem:

 Write a function to calculate the sum of digits of a given number.
 Example: Input: 1234 → Output: 1 + 2 + 3 + 4 = 10 */

/*
Explanation:

Use a loop to get the last digit using % 10
Add it to sum
Remove the last digit using Math.floor(num / 10)
Repeat until number becomes 0  

*/

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumOfDigits(1234)); // Output: 10