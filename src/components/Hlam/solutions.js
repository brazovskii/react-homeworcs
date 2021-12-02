const _ = require("lodash");
const data1 = [
  {
    age: 3,
    name: "Curtis Greene",
    email: "curtis.greene@zaj.ca",
  },
  {
    age: 23,
    name: "Nikki Lowe",
    email: "nikki.lowe@darwinium.tv",
  },
  {
    age: 39,
    name: "Barr Copeland",
    email: "barr.copeland@nipaz.me",
  },
];
const data2 = [
  {
    age: 29,
    name: "Calhoun Woodward",
    email: "calhoun.woodward@medmex.info",
  },
  {
    age: 21,
    name: "Leta Lee",
    email: "leta.lee@qnekt.com",
  },
  {
    age: 40,
    name: "James Dinh",
    email: "j.dink@erw.com",
  },
];

//task 1
const getAge = (obj, num) => _.findIndex(obj, { age: num });
console.log(getAge(data1, 23));

//task 2
const mergeMass = (massOne, massTwo) => _.union(massOne, massTwo);
console.log(mergeMass(data1, data2));

//task 3
const obj = {
  age: 21,
  name: "Leta Lee",
  email: "leta.lee@qnekt.com",
};

const newObj = (object, value) => _.omit(object, [value]);
console.log(newObj(obj, "age"));

//task 4
const getObj = (object, value) => {
  const objNew = {};
  for (let key in object) {
    if (key !== value) {
      objNew[key] = object[key];
    }
  }
  return objNew;
};
console.log(getObj(obj, "age"));
