//composition

const addFive = (num) => {
    return num + 5;
}
const subtractTwo = (num) => {
    return num - 2;
}
const multiplyFour = (num) => {
    return num * 4;
}



function compose(...fns) {
    return function (init) {
        //let value = init;
        //  for (let i = fns.length -1; i >= 0; i--) {
        //     value = fns[i](value);

        //  }
        //  return value;
        return fns.reduceRight((acc, cur) => {
            return cur(acc)
        }, init)
    }
}
let evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5));


//pipe
function pipe(...fns) {
    return function (init) {
        return fns.reduce((acc, cur) => {
            return cur(acc);
        }, init)
    }
}
let evaluatePipe = pipe(addFive, subtractTwo, multiplyFour);
console.log(evaluatePipe(5));