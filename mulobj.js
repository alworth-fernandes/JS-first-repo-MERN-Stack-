// const obj1 = {
//     name1 : "Shubham",
//     age : 17
// };

// const obj2 = {
//     email : "shubham@gmail.com"
// }

// const obj3 = {
//     year : "Ty",
//     name1 : "Karan"
// }

// const allObject = Object.assign({},obj3,obj2,obj1)
// console.log(allObject)
// const allobject2 = {...obj1, ...obj2, ...obj3}
// console.log(allobject2);

// //Object D-Stracture
// const {name1, age, email, year} = allObject;
// console.log(name1);
// console.log(age);
// console.log(email);
// console.log(year);

// Syntax: function (accumulator,cuurentvalue){
//     // logic
// }

// const fruits = ["apple", "banana" ,"apple" , "orange" , "banana"];

// const count = fruits.reduce((acc,fruit) => 
// {
//     acc[fruit] = (acc [fruit] || 0) + 1;
//     console.log(acc);
//     return acc;
// }, {});

// console.log(count);

// reduce()
// reduce array to single value 
// return single value
// does not mutate original array 
// aggregate data

const Array = [10, 20, 30, 40, 50];
// reduce(() => {
//         acc[Array] = (acc [Array] || 0) + 1;
//     // console.log(acc);
//     return acc;
// }, {});
// console.log(reduce());

const sum = Array.reduce((acc,currVal) => (acc + currVal), 0);

console.log(sum);