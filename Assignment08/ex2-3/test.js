import { Professor } from "./Professor.js";
import { Student } from "./Student.js";
import { Course } from "./Course.js";
import { StudyPlan } from "./StudyPlan.js";
import { ProfessorPosition } from "./ProfessorPosition.js";

// Courses
// informatics
let c1 = new Course(622752, "Security Infrastructures");
let c2 = new Course(623500, "Data Engineering");
let c3 = new Course(623503, "Advanced Software Engineering");
// information management
let c4 = new Course(601651, "Management Accounting II");
let c5 = new Course(620200, "Introduction to object-oriented Programming");
let c6 = new Course(311950, "Mathematics I");
// economics
let c7 = new Course(140010, "Global Management");
let c8 = new Course(601910, "Entrepreneurship and Innovation");
let c9 = new Course(160240, "Statistics I");

// Study plans
let sp1 = new StudyPlan(0, "Applied Informatics");
let sp2 = new StudyPlan(1, "Information Management");
let sp3 = new StudyPlan(2, "Economics");

// professors
let p1 = new Professor("Gottfried", "Vossen", new Date("06/24/1955"), "Muenster", 0, ProfessorPosition.full);
let p2 = new Professor("Yoshua", "Bengio", new Date("06/24/1964"), "Montreal", 1, ProfessorPosition.adjunct);
let p3 = new Professor("Elinor", "Ostrom", new Date("06/24/1933"), "Los Angeles", 2, ProfessorPosition.associate);

// students
let s1 = new Student("Kendall", "Beach", new Date("08/10/1995"), "Los Angeles", 201801, sp1);
let s2 = new Student("Kristin", "Fleming", new Date("04/20/1991"), "Klagenfurt", 201802, sp2);
let s3 = new Student("Adam", "Dixie", new Date("01/01/1998"), "Villach", 201803, sp3);

// assign courses to professors
c1.assignTo(p1);
c2.assignTo(p1);
c3.assignTo(p1);
c4.assignTo(p2);
c5.assignTo(p2);
c6.assignTo(p2);
c7.assignTo(p3);
c8.assignTo(p3);
c9.assignTo(p3);

// assign courses to study plans
sp1.addCourse(c1);
sp1.addCourse(c2);
sp1.addCourse(c3);
sp2.addCourse(c4);
sp2.addCourse(c5);
sp2.addCourse(c6);
sp3.addCourse(c7);
sp3.addCourse(c8);
sp3.addCourse(c9);
// try to add already existing courses
sp1.addCourse(c1);
sp2.addCourse(c5);
sp3.addCourse(c8);

// add courses to students
s1.enrol(c1);
s1.enrol(c2);
s1.enrol(c3);
s2.enrol(c4);
s2.enrol(c5);
s2.enrol(c6);
s3.enrol(c7);
s3.enrol(c8);
s3.enrol(c9);
// remove some courses
s2.cancel(c5);
s3.cancel(c9);
s3.cancel(c8);
s3.cancel(c1); // try to cancel course the student is not enrolled in

// test outputs
console.log("Professors:");
console.log(p1.introduce());
console.log(p2.introduce());
console.log(p3.introduce());
console.log("Students:");
console.log(s1.introduce());
console.log(s2.introduce());
console.log(s3.introduce());
