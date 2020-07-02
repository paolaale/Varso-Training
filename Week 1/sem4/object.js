/* Objects */
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log(company.ceo.favColor);
console.log(company["name"]);

/* ---- */

var company = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    $stock: 110
};

console.log(company);