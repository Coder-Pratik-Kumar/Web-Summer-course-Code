//  .....................................................JAI MATA DI...........................................
//.......................................................JAVASCRIPT............................................
//printing first program
console.log("hello world");

//Variables
// var
//let
//const

var a = 5;
var a = 10; // allowed using var
console.log(a);

//let
let b = 5;
// let b = 10; // not allowed
b = 10;
console.log(b);

//const (fixed value)
const c = 10;
// const c = 20; not allowed
// c = 30; not allowed
console.log(c);

// DATA Types
// String
let name = "pratik";
console.log(name);
// Number
let num = 1;
console.log(num);
let num2 = 1.5;
console.log(num2);
// Boolean
let bool = 5 < 3;
console.log(bool);
// undefined
let un;
console.log(un);
// null
let nu = null;
console.log(nu);

//Dynamic typing
let aw = "pratik";
aw = 5;
console.log(aw); //5


//Operators

// Arithmetic
let nuum1 = 5;
let nuum2 = 6;
let ans1 = nuum1 + nuum2;
console.log(ans1);
let ans2 = nuum1 - nuum2;
console.log(ans2);
let ans3 = nuum1 * nuum2;
console.log(ans3);
let ans4 = nuum1 / nuum2;
console.log(ans4);
let ans5 = nuum1 % nuum2;
console.log(ans5);
let ans6 = nuum1 ** nuum2;
console.log(ans6);
// pre / post incr / decr operator
let p = 10;
let q = 11;
console.log(p++);
console.log(++p);
console.log(p--);
console.log(--p);
console.log(q++);
console.log(++q);
console.log(q--);
console.log(--q);
// Assignment
p += 5;
console.log(p);
// comparision operator
console.log(5<3);
console.log(5>3);
console.log(5<=3);
console.log(5>=3);
console.log(5===3);
console.log(5!==3);
// equality
// === (stict quality) => it checks DT and Val both
let eq = 1;
let eq1 = '1';
console.log(eq===eq1);
//== (loose equality) => it cjecks only the value
console.log(eq == eq1);

//Logical operator

//AND && 
console.log(5 > 3 && 5 !== 3 && 2 > 1); //=true => only if all conditions will be true
//OR ||
console.log(5 > 3 || 5 == 3 || 2 < 1); // truee => wheen only one condition will be true

//Logical operators with non booolean values
console.log(true && false); //false
console.log(true && "pratik" && "Kumar"); //kumar
console.log(true || false); //true
console.log(false || "pratik" || "Kumar"); //pratik

//Bitwise operator
console.log(2 & 3);
console.log(2 | 3);

// if-else if-else if-else

let marks = 90;
if (marks >= 90) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}
else if (marks >= 70) {
    console.log("C");
}
else if (marks >= 60) {
    console.log("D");
}
else {
    console.log("Fail");
}
// Switch case

switch (marks) {
    case 1:
        if (marks >= 90) {
            console.log("A");
        }
        break;
    case 2:
         if (marks >= 80) {
            console.log("B");
        }
        break;
    case 3:
        if (marks >= 70) {
            console.log("C");
        }
        break;
    case 4:
        if (marks >= 60) {
            console.log("D");
        }
        break;
    case 5:
        console.log("fail");
        break;
    default: 
        console.log("pass");
}

//Loops
//..................FOR Loop.........................
for (let a = 0; a <= 10; a++){
    console.log(a);
}

//....................while Loop................
let w = 0;
while (w <= 10) {
    console.log(w);
    w++;
}
//...................do-while Loop...............
let d = 0;
do {
    console.log(d);
    d++;
} while (d <= 10);