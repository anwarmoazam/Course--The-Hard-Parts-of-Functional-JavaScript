console.log('Closures');

const createFunction = ()=>{
    let counter = 0;
    const add3 = (num) => {
        const result = num+3;
        return result;
    }
    return add3;
}


const generatedFunction = createFunction();
const generatedFunction1 = createFunction();


console.log(generatedFunction);

const result = generatedFunction(10);
const result1 = generatedFunction(0);

console.log(result);
console.log(result1);