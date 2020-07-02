
/* String concatination */
var string = "Hello";
string += "World";
console.log(string + "!");

/* Math operators */
console.log((5+4)/3);

/* Equality */
var x=4, y=4;
if (x == y) {
    console.log("x is equal to y");
}

x="4";
if (x == y) { 
    console.log("x is equal to y"); //type coercion
}

/* Strict equality */
if (x === y) {
    console.log("x is equal to y");
}
else {
    console.log("x is not equal to y");
}

/* if statement */
if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute");
}
else {
    console.log("All false");
}

if (true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}

/* {} style */
function a() 
{
    return   //undefined because it doesn't ready anything after the return
    {
        name: "Alicia"
    };
}

function b() {
    return {
        name: "Alicia"
    };
}

/* for loop */
var sum = 0;
for (var i = 0; i < 10; i++) {
    sum += i;
}

console.log("sum of 0 through 9 is: " + sum);

/* Default values */
function orderChickenWith(sideDish) {
    sideDish = sideDish || "whatever!";
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

