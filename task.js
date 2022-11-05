// pure function
// immutability
// this

const multiplyByTwo = num => num * 2;
const greaterThan10 = num => num>10;

const arr1 = [10,20,30,40,50];
const arr2 = [10,20,30,40,50];

// let output = arr1.filter(greaterThan10);
// console.log(output);

// const result = arr.map(multiplyByTwo);

Array.prototype.anwar_map = function(fn){
    const output = [];
    for(let i=0; i<this.length; i++){
        output.push(fn(this[i]));
    }
    return output;
}

const result1 = arr1.anwar_map(multiplyByTwo);
const result2 = arr2.anwar_map(multiplyByTwo);

console.log(result1);
console.log(result2);

Array.prototype.anwar_filter = function(fn){
    const output = [];
    for(let i=0; i<this.length; i++){
        if(fn(this[i])){
            output.push(this[i]);
        }
    }
    return output;
}

const result3 = arr1.anwar_filter(greaterThan10);
const result4 = arr2.anwar_filter(greaterThan10);

console.log(result3);
console.log(result4);

const sum = (a,b) => a + b;

const result5 = arr1.reduce(sum,10);
console.log(result5)

Array.prototype.anwar_reduce = function(fn,acc){
    for(let i=0; i<this.length; i++){
        acc = fn(acc,this[i])
    }
    return acc;
}

const result6 = arr1.anwar_reduce(sum,5);
console.log(result6);

// Pure function

let arr3 = [1,2,3,4,5];

// Impure function - because it cause side effect to arr3
function addElement(array,value){
    array.push(value);
    return array;
}

console.log(addElement(arr3,10));
console.log(arr3);

// Impure Function example - because it returns different output on same arguments each time
function add(a,b){
    return Math.random()+a+b;
}

console.log(add(2,2));
console.log(add(2,2));

// Pure function - it not cause any side effect to global variable
function addValue(array,value){
    return [...array,value];
}

console.log(addValue(arr3,50));
console.log(arr3);

function counter(){
    let counter = 0;
    console.log({counter});
    const add = (value)=>{
        console.log({counter,value})
        counter += value;
        return counter;
    }    
    return add;
}


let counter1 = counter();
let counter2 = counter();

console.log(counter1(5));
console.log(counter2(10));
console.log(counter1(1));
console.log(counter2(1));

/*
add(5) // 5
add(5)(2) // 7
add(3)(1)(3)(2) // 9
add(5)(10)(15)(0)(2)(3) // 35
*/

function add(num1){
    return function(num2){
        if(num2 || num2===0) return add(num1+num2);
        return num1;
    };
}

console.log(add(5)());
console.log(add(5)(2)());
console.log(add(3)(1)(3)(2)());
console.log(add(5)(10)(15)(0)(2)(3)());

/*
add(5)() // 5
add(5)(2)() // 7
add(3)(1)(3)(2)() // 9
add(5)(10)(15)(0)(2)(3)() // 35
*/

function curriedSum(num1){
    return function(num2){
        if(num2) return curriedSum(num1+num2);
        return num1;
    };
}

console.log(curriedSum(5));
console.log(curriedSum(5)(2));
console.log(curriedSum(3)(1)(3)(2));
// console.log(curriedSum(5)(10)(15)(0)(2)(3));
