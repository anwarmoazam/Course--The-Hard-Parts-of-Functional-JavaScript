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