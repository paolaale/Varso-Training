function Circle (radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
}

var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());

/* object literals */
var literalCircle = {
    radius: 10,

    getArea: function () {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
            self.radius = 20;
        };

        increaseRadius();
        return Math.PI * Math.pow(this.radius, 2);
    }
}

literalCircle.getArea();