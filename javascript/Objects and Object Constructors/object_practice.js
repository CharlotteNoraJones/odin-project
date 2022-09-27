const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
    name: "jenn", 
    marker: "0"
}

// Object Constructor
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(name);
    }
}

const player = new Player("steve", "Y");
player.sayName();