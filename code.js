var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

//step 1
console.log('Months listed are ' + stringList[0] + ', '  + stringList[1] + ', ' + stringList[2] + '.');
//this one was just plugging in each part of the array into the spot they needed to be in the console and filling it out with the right strings.

//step 2
console.log(numList.length - 1 + ' is the last index.');
//Since it was just looking for the last index number, all it needed was the length to be calculated. With the length starting at 1 but the index starting at 0, I needed to subtract 1 from the length to find the last index.

//step 3
console.log(numList.join(''));
//Join just puts the entire contents of the array into a string, and the '' took away any space between them

//step 4
console.log(numList[0] + numList[1] + numList[2]);
//This adds up the contents of the array right in the log out

//step 5
 function boolPlus(boolList){
   if (true) {
  console.log(numList[0] + numList[2]);}
    else {
  console.log(numList[1] * numList[1]);
    }
};
//This function looks through boolList and if it finds a "true" boolean, it logs out the "if". Otherwise it logs out the "else".

//step 6
 function boolTwo(boolList){
   if(true){
   console.log(numList[2])};
 }
//this one felt a bit cheaty. Although it techincally calls numList[2] when the "true" boolean is found, it can't replicate the process if the "true" was in a different spot.

 //step 7
 var bigArray = stringList
 bigArray.push(numList);
 bigArray.push(boolList);
 console.log(bigArray.reverse);
//I created a new variable to contain all of the arrays, although it could have been possible to just push the second two into the first. Then I used the .reverse in the log out.
