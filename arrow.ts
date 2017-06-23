// version 1
class Person {
  constructor(public age: number) {
  }

  growOld = function () {
    this.age++;
  }
}

// version 2
// class Person {
//   constructor(public age: number) {
//   }
//
//   growOld = () => {
//     this.age++;
//   }
// }


const person = new Person(1);
setTimeout(person.growOld, 1000);

setTimeout(function () {
  console.log(person.age);
}, 2000); // 2