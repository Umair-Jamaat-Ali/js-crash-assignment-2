
// 1. Write a function that creates a closure and returns a function that can add
//a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed to it.

function sumValue(sum1) {
    return function (sum2) {
        console.log(sum1 + sum2);
    }
    
}

let innerValue = sumValue(15);
innerValue(55);
let innerValue1 = sumValue(20);
innerValue1(80);



// Write a recursive function that searches an array for a specific value. The function 
//should return true if the value is found, and false if it is not. You can assume that the array is not nested.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

function searchArray(array, value) {
    if (array % 3 === 0) {
        console.log(true);
    }
    else if( value % 3 !== 0){
        console.log(false);
    }
    return
};

searchArray(3 , 6);


// 3. Write a function that adds a new paragraph element to the bottom of an HTML document. 
//The function should take a string argument that will be used as the text content of the new paragraph element.


let myPara = document.getElementById("my-para");
myPara.innerText = "Sylani Web & Mobile App";
// myPara.style.color = "#285";
// myPara.style.backgroundColor= "#000"
console.log(myPara);

// 4. Write a function that adds a new list item to an unordered list in an HTML document. 
//The function should take a string argument that will be used as the text content of the new list item.

let unOrderList = document.getElementById("un-list");
let listItem1 = document.getElementById("listitem1");
let listItem2 = document.getElementById("listitem2");
let listItem3 = document.getElementById("listitem3");
let listItem4 = document.getElementById("listitem4");

listItem1.innerText = "Cricket"
listItem2.innerText = "Foot Ball"
listItem3.innerText = "Tennis"
listItem4.innerText = "Hockey"


console.log(unOrderList);
console.log(listItem1);
console.log(listItem2);
console.log(listItem3);
console.log(listItem4);

//5.Write a function that changes the background color of an HTML element. The function should take two arguments: 
//the first argument is a reference to the HTML element, and the second argument is a string representing the 
//new background color.

let yourPara = document.getElementById("your-para");
yourPara.innerText = "Sylani Web & Mobile App";
yourPara.style.color = "#285";
yourPara.style.backgroundColor= "#000"
console.log(yourPara);























