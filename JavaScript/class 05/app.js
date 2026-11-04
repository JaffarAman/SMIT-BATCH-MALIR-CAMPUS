// var num1  = 10



// // num1 = num1 + 5 

// num1 +=  5





// console.log(num1) //10 , 15 , 5






// var fullName = "Jaffar" //string


// // fullName = fullName + "Aman"
// fullName += "Aman"


// console.log(fullName)



// var num1  = 100

// // num1 = num1 - 10
// num1 /= 20

// console.log(num1 + num2)



// var num1 = 100

// num1 = num1 + 1
// num1 += 1


// num1++

// Increment
// num1++  //101
// num1++  //102
// num1++  //103


// Decrement
// num1--


// console.log(num1)




// Increment
// POST Increment / PRE Increment

// var num1 = 10
// num1++ //post increment

// ++num1 //pre increment

// POST Increment=> pehly value print karo osky bad increment karo
// PRE Increment=> pehly value increment karo osky bad print karo

// var a = 20 //21
// var num1 = a++ 
//     //      20
// console.log("num1" , num1)
// console.log("a" , a)




// var a  = 10 //11

// var num1 = a++ + a
//       =  10 + 11 ==> 21

// var a  = 10 //11 

// var num1 = ++a + a
// //          11 + 11
// console.log(num1)


// var num1 = 10 //11

// var res = num1 + num1++ + num1
//          10 +  10    +  11

// var num1 = 10  //11 //12
// var res = num1++ +  num1 + ++num1  + num1
// //          10   +   11  +    12    +  12



// console.log(res)




// var num1 = 10 //11 //12 //13

// var res = num1++ +  ++num1 + num1++ + num1
//          10   +     12  +  12   +   13



// var num1 = 5  //6 //7 //8

// var res = ++num1 + num1 + ++num1 + num1++ + num1
//  6    +  6   +   7    +  7  +    8
// console.log(res)


// a++ ==> Post increment
// ++a ==> Pre increment
// a-- ==> Post Decrement
// --a ==> Pre Decrement


// var num1 = 10 //11 //10  // 9  //10
// var res = num1++ + --num1 + num1-- + ++num1 + num1
//     //      10   +    10  +  10     +  10  +   10




// var num1 = 20 //21 //22 //23 //22  //23 //22

// var res = ++num1 - num1++  + ++num1  -  --num1 - num1++ + num1 + --num1  
// //      =        +    23     -    22      +  23 

// console.log(res)



// prompt

// var userName = "Jaffar Aman"

// console.log(userName)


// var userName = prompt("Enter your fullName")

// console.log('userName', userName)


// // prompt=> user sy input lehne...
//                             // label            ,   placeholder
// var firstName = prompt("Enter your first Name" ,  "Jaffar"  );
// var lastName = prompt("Enter your last name");
// var age = prompt("Enter your age");

// console.log("firstName", firstName)
// console.log("lastName", lastName)
// console.log("age", age)



// var num1 = +prompt("Enter num1")
// // var num2 = +prompt("Enter num2")


// console.log(num1)

// console.log(typeof num1)

// alert(num1 + num2)