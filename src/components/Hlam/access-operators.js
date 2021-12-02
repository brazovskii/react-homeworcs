const str = "abcdefg";

const arr = [1, 2, 3];

const obj = {
  one: "X",
  two: "Y",
  three: "Z",
};

const person = {
  age: 30,
  name: "Vladilen",
  sayHi: () => {
    console.log("Hi I'm Vladilen and I'm 30");
  },
};

//task1
console.log(arr[1], arr[2]);

//task2
console.log(
  str[2] +
    str[0] +
    str.slice(1, 2).repeat(2) +
    str.substring(0, 1) +
    str.substr(-1, 1) +
    str[4]
);

//task3
console.log(obj.one + obj.two + obj.three);

//task4
console.log(person["name"]);

//task5
console.log(person.sayHi());
