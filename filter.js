console.log('Filter function');

const arr = [10,20,30,40,50,60,5,4,2,1,70,80,90];

const filter = (array,instrunctions) => {
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(instrunctions(array[i]));
    }
    return output;
}

const greaterThan10 = num => num>10;

const output = arr.filter(greaterThan10);
console.log(output);