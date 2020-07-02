var array = new Array();
array[0] = "example"
array[1] = 2;
array[2] = function (name) {
    console.log("Hello");
}
array[3] = {course: "HTML & CSS & JS"};

console.log(array);
console.log(array[3]);
array[2]();

/* Short hand array creation */
var names = ["Alicia", "Paola", "Alan"];

for (var i=0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

for (var n in names) {
    console.log("Hello " + names[n]);
}

