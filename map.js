console.log("Map Function");

const arr = [10,20,30,40,50];

const map = (array,instructions) => {
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(instructions(array[i]));
    }
    return output;
}

const multiplyBy2 = num => num * 2;

const result = map(arr,multiplyBy2);

console.log(result);