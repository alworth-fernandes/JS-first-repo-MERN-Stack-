var num = 10;
num = 30;
console.log("Before block scope: ",num);

{
    var num = 20;
    console.log("Inside block scope: ",num);
}

console.log("After block scope: ",num);