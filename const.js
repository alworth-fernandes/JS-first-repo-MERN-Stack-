const num = 10;
// const num = 30;
console.log("Before block scope: ",num);

{
    const num = 20;
    console.log("Inside block scope: ",num);
}

console.log("After block scope: ",num);
