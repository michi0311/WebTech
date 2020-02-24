
interface PersonI {
	firstname: string;
	lastname : string;
	sayHello() : string;
}

class Professor implements PersonI {
	researcharea : string;
	firstname: string;
	lastname : string;
	
	constructor(firstname: string, lastname: string, researcharea: string) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.researcharea = researcharea;
	}
	
	sayHello() : string {
		return `My name is ${this.firstname} ${this.lastname}.`;
	}
	
	introduce() : string {
		return `${this.sayHello()} I am working in the field of ${this.researcharea}`;
	}
	
}

let v= new Professor("Gottfried", "Vossen", "Databases");
console.log(v.sayHello());
console.log(v.introduce());


