//q1
// function power(a,b){
//     document.write("power of "+a+"="+ Math.pow(a,b));

// }
// let x=+prompt("enter value of base");
// let y=+prompt("enter value of power");
// power(x,y);

//q2
// function isLeapYear(year) {

    //     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    
    //       return true;
    
    //     }
    
    //     else {
    
    //       return false;
    
    //     }
    
    //   }

    //q3
    // let s;
    // function triangleS(a,b,c){
    //   return  s=(a+b+c)/2;
    // }
    // function triangle(a,b,c){
    //     let S=triangleS(a,b,c);
    //     let area=S*(S-a)*(S-b)*(S-c);
    //     document.write("Area of Triangle"+area);

    // }
    // var a=+prompt("Enter first side");

    //  var b=+prompt("Enter second side");
    
    //  var c=+prompt("Enter third side");
    //  triangle(a,b,c);

    //q4

// //4.

// function avg(sub1,sub2,sub3){

//     return (sub1+sub2+sub3)/3;

// }

// function perc(sub1,sub2,sub3){

//     return ((sub1+sub2+sub3)/300)*100;

// }

// function mainFunc(sub1,sub2,sub3){

//     var average=avg(sub1,sub2,sub3);

//     var percentage=perc(sub1,sub2,sub3);

//     document.write("Marks of first subject: "+sub1+" <br>Marks of second subject: "+sub2+" <br>Marks of third subject: "+sub3+"<br>Average: "+average+"<br>percentage: "+percentage);

// }

// var sub1=+prompt("Enter marks of first subject");

// var sub2=+prompt("Enter marks of second subject");

// var sub3=+prompt("Enter marks of third subject");

// mainFunc(sub1,sub2,sub3);

 

// //5.

// function indexOf(str,ch){

//     for(var i=0;i<=str.length-1;i++){

//         if(str[i]==ch){

//             return i;

//         }

//     }

//     if(str[i]!=ch){

//         return "Character do not exist in string"

//     }

// }

// var str=prompt("Enter string");

// var ch=prompt("Enter character whose index you want to find out");

// console.log(indexOf(str,ch));

 

// //6.

// function delVowels(sent){

//     return sent.replaceAll(/[aeiouAEIOU]/g,'');

// }

// var sent=prompt("Enter a sentence");

// document.write(delVowels(sent));

//q7
// function countSuccessiveVowels(text) {
//     text = text.toLowerCase(); // Convert the text to lowercase to make it case-insensitive.
//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i];
//         let nextChar = text[i + 1];

//         switch (currentChar + nextChar) {
//             case 'aa':
//             case 'ee':
//             case 'ii':
//             case 'oo':
//             case 'uu':
//                 count++;
//                 break;
//         }
//     }

//     return count;
// }

// const text = "Pleases read this application and give me gratuity";
// const vowelCount = countSuccessiveVowels(text);
// console.log(`Number of successive vowels in the text: ${vowelCount}`);

 

// //8.

// function meters(dist){

//     return dist*1000;

// }

// function feet(dist){

//     var m=meters(dist);

//     return m*3.28084;

// }

// function inches(dist){

//     var f=feet(dist);

//     return f*12;

// }

// function centimeter(dist){

//     var i=inches(dist);

//     return i*2.54;

// }

// var dist=+prompt("Enter distance in km");

// document.write("Meter: "+meters(dist)+"<br>Feet: "+feet(dist)+"<br>Inches: "+inches(dist)+"<br>Centimeter: "+centimeter(dist));

//q9
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40; // The regular working hours
//     const overtimeRate = 12.00; // Overtime pay rate per hour

//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         const overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     } else {
//         return 0.0; // No overtime pay if worked 40 hours or less
//     }
// }

// // Get the number of hours worked from the user
// const hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));

// const overtimePay = calculateOvertimePay(hoursWorked);

// if (overtimePay > 0) {
//     console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
// } else {
//     console.log("No overtime pay earned.");

//q10
// function calculateCurrencyNotes(amountInHundreds) {
    
//     const totalAmount = amountInHundreds * 100;

//     let numHundreds = 0;
//     let numFifties = 0;
//     let numTens = 0;

  
//     while (totalAmount >= 100) {
//         totalAmount -= 100;
//         numHundreds++;
//     }

//     while (totalAmount >= 50) {
//         totalAmount -= 50;
//         numFifties++;
//     }

//     while (totalAmount >= 10) {
//         totalAmount -= 10;
//         numTens++;
//     }

    
//     console.log(`Number of 100 rupee notes: ${numHundreds}`);
//     console.log(`Number of 50 rupee notes: ${numFifties}`);
//     console.log(`Number of 10 rupee notes: ${numTens}`);
// }


// const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));

// calculateCurrencyNotes(amountInHundreds);

