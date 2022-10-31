console.log('Course--The-Hard-Parts-of-Functional-JavaScript');

const myArray = [1,2,3];

const num = 3;
const multiplyBy2 = inputNumber => {
    const result = inputNumber*2;
    return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);


console.log(output);
console.log(newOutput);

const copyArrayAndMultiplyBy2 = array => {
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(array[i]*2);
    }
    return output;
}

const copyArrayAndDivideBy2 = array => {
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(array[i]/2);
    }
    return output;
}
const resultMultiply = copyArrayAndMultiplyBy2(myArray);
const resultDivide = copyArrayAndDivideBy2(myArray);
console.log(resultMultiply);
console.log(resultDivide);

const newArray = [2,3,4,5,6];

const copyArrayAndManipulate = (array,instruction) => {
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(instruction(array[i]));
    }
    return output;
}

const newMultiplyBy2 = number => number*2;
const newDivideBy2 = number => number/2;

console.log('New Array = '+ newArray)
const multiply = copyArrayAndManipulate(newArray,newMultiplyBy2);
const divide = copyArrayAndManipulate(newArray,newDivideBy2);
console.log(multiply);
console.log(divide);

let str = '';
newArray.forEach(element => {
    str += element;
});

console.log(str);

