function Plant() {
    this.country = "Mexico";
    this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function() {
    console.log("I am a " + this.name + " and my color is " + this.color)
}

Plant.prototype.amIOrganic = function() {
    if (this.isOrganic) {
        console.log("I am organic, Baby!")
    }
}

function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

Fruit.prototype = new Plant();

var aBanana = new Fruit("Banana", "Yellow");
// aBanana.country = "Columbia";
console.log(aBanana.name);
console.log(aBanana.country);

aBanana.showNameAndColor();

var myFriends = {name: "Pete"};
console.log(myFriends.toString());