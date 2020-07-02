function multiply(x, y) {
    return x * y;
}

console.log(multiply(5, 3));

/* function factory */
function makeMultiplier(multiplier) {
    var myFunc = function (x){
        return multiplier * x;
    }
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));  // 30

/* functions as arguments */
function doOperation(x, operation) {
    return operation(x);
}

var result = doOperation(5, multiplyBy3);
console.log(result); //15

/* Pass by value */
function changePrimitive (primValue) {
    
    console.log("in changePrimitive...");
    console.log("before: " + primValue);

    primValue = 5;
    console.log("after: " + primValue);

}

var value = 7;
changePrimitive(value);
console.log("after function, origin value = " + value);

/* Pass by reference */
function changeObject (objValue) {
    
    console.log("in changeObject...");
    console.log("before: " + objValue);

    objValue.x = 5;
    console.log("after: " + objValue);

}

value = { x: 7};
changeObject(value);
console.log("after function, origin value = " + value);