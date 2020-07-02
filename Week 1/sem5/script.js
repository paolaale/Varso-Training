
function sayHello () {

    var name = document.getElementById("name").value;
    var message = "Hello " + name + "!";

    document.getElementById("content").innerHTML = message;

    if (name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & learning about it";
        document.querySelector("h1").textContent = title;
    }
} 

document.querySelector("button").addEventListener("click", sayHello);

document.querySelector("body").addEventListener("mousemove", function(event) {
    console.log("x = " + event.clientX);
    console.log("y = " + event.clientY);
});