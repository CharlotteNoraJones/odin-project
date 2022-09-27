//IIFE: Immediately invoked function expression
const message = (function(name) {
    return 'Hello ' + name + '!';
})('World');

// this is not the same in an inner function as in an outer function
// thus, .call(this) is necessary. 
const numbers = {
    numberA: 5,
    numberB: 10,

    sum: function() {
        console.log(this === numbers); // => true

        function calculate() {
            console.log(this === numbers); // => true, but only because of .call
            return this.numberA + this.numberB;
        }

        return calculate.call(this); // .call calls the function as normal, but sets the context to the value specified by the first paramater. 
                                    // Using an arrow function would also work. 
    }
}

console.log(numbers.sum()); 

// In JS, a method is a function stored in a property of an object. 

// in a method invocation, this is the object that owns the method. 

const calc = {
    num: 0,
    increment() {
        console.log(this === calc); // => true
        this.num++
        return this.num;
    }
}

calc.increment();
calc.increment();
console.log(calc.num);