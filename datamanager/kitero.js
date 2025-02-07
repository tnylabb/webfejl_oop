const sum = (a,b) => {
    return a + b;
}

console.log(sum(4,5)); // 9

const obj = {}

obj.calculate1 = sum;

console.log(obj.calculate1(4,5)); // 9

obj.calculate2 = (callback) => {
    return callback(4,5);
    
}

const res1 = obj.calculate2((a,b) => {
    return a + b;
})
const res2 = obj.calculate2((a,b) => {
    return a * b;
})

console.log(res1); // 9
console.log(res2); // 20

obj.calculate3 = (a,b , callback) => {
    return callback(a,b);

}

obj.calculate3(4,5, (a,b) => {return a + b});

const theFunction = () => {
    const szam = 10
    const res3 = obj.calculate3(4,5 ,(a,b) => {return a*szam + b});
    console.log(res3);
}

theFunction()

