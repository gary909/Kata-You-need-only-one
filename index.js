// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// function check(a, x) {
//   // your code here
// }

// Test.describe("Basic tests",_=>{
// Test.assertEquals(check([66, 101], 66), true);
// Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
// Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
// Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
// })

//***************************************************** */

// Method using a for loop to compare
function check(a, x) {

    for (var i = 0; i < a.length; i++) {
        // if a is equal to x, return true, else return false
        if (a[i] == x) {
            return true;
        }
    }
    return false;
    // your code here
}


//**************************************************** */

// Method using .includes to check;

// function check(a, x) {
//   if (a.includes(x)) {
//     return true;
//   } else {
//     return false;
//   }
// }


console.log(check([66, 101], 66));


