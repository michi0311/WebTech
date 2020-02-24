
interface PersonI {
  firstname: string;
  lastname: string;
  sayHello(): string;
}

// change code below
class Person implements PersonI {
  firstname: string;
  lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  sayHello(): string {
    return `My name is ${this.firstname} ${this.lastname}.`;
  }

  introduce(): string {
    // your code here
  }

}

let v = new Professor("Gottfried", "Vossen", "Databases");
console.log(v.sayHello());
console.log(v.introduce());
