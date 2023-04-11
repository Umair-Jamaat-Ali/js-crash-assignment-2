
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


//// 6. Write a function that saves an object to localStorage. The function should take two arguments: the first argument 
//is a string representing the key to use for storing the object, and the second argument is the object to store.

let student1 = {
    name: "Saqib",
    age: 15,
    class: "ninth",
    teacher: "Umair",
    subjects: "Math, Physics",
    schoolTiming: 7.15,
};

console.log(student1);

localStorage.setItem("name", "Saqib");

//// Write a function that retrieves an object from localStorage. The function should take one argument,
// which is a string representing the key used to store the object. The function should return the object.
let students = [];
function ProvdeData() {
    let student2 = {
    name: prompt("Enter your name"),
    age: +prompt("Enter your age"),
    class: prompt("Enter your class"),
    teacher: prompt("Enter your teacher name"),
    subjects: prompt("Enter your subjects"),
    schoolTiming: +prompt("Enter your school timing"),
} 
    students.push(student2);
    console.log(students);
    let stringify = JSON.stringify(students);
    localStorage.setItem("students", stringify);
};

//// 8. Write a function that takes an object and saves each property to localStorage using the property 
// name as the key and the property value as the value. The function should also retrieve the object from localStorage
//and return it as a new object.

let prevStudentsData = localStorage.getItem("studentsNine");

let studentsNine = prevStudentsData ? JSON.parse(prevStudentsData): [];
function ProvdeData1() {
    let student3 = {
    name: prompt("Enter your name"),
    age: +prompt("Enter your age"),
    class: prompt("Enter your class"),
    teacher: prompt("Enter your teacher name"),
    subjects: prompt("Enter your subjects"),
    schoolTiming: +prompt("Enter your school timing"),
} 
    students.push(student3);
    console.log(studentsNine);
    let stringify = JSON.stringify(students);
    localStorage.setItem("studentsNine", stringify);
};




















