/*==================================== Question No 1 =========================================
const student = { name: "Ali", class: "10th" };

// ✅ Task:
// 1. Make a shallow copy using spread operator
// 2. Change the name in the copy
// 3. Check: does the original object change or not?
======================================= Answer =====================================*/
// const  student = {name : 'Ali',
//     class : '10th'
// }
// // const shallow = {...student};
// // const shallow = student;
// const shallow = Object.assign({},student)
// shallow.name = 'sania';
// console.log(student);
// console.log(shallow)


/*==================================== Question No 2 =========================================
/ Make a deep copy of this nested object
const school = {
  name: "City School",
  location: "Karachi",
  teachers: {
    english: { name: "Sara", exp: 5 },
    math: { name: "Ahmed", exp: 10 }
  }
};

// ✅ Task:
// 1. Make a deep copy
// 2. Change "math" teacher's name in the copy
// 3. Print both objects to prove independence

======================================= Answer =====================================*/

// const school = {
//   name: "City School",
//   location: "Karachi",
//   teachers: {
//     english: { name: "Sara", exp: 5 },
//     math: { name: "Ahmed", exp: 10 }
//   }
// };
// const shallow = Object.assign({},school);
// shallow.teachers.math = 'Klsoom';
// console.log(school);
// console.log(shallow);


/*==================================== Question No 3 =========================================

shallow copy
======================================= Answer =====================================*/
// const student = {name : 'Aziz',
//     teacherName : {name  : 'Ahmed'}
// }
// const shallow = {...student};
// shallow.name = 'Hanif';
// shallow.teacherName.name = 'shahzadd';
// console.log(shallow)
// console.log(student)
// console.log(student.teacherName);
// console.log(shallow.teacherName)



/*==================================== Question No 4=========================================
deep copy
======================================= Answer =====================================*/
// const student = {name : 'Aziz',
//     teacherName : {name : 'Ahmed'
//     }}

//     const copy = JSON.parse(JSON.stringify(student));
//     copy.name = 'shakir';
//     copy.teacherName.name = 'klsoom';
//     console.log(student);
//     console.log(copy)



/*==================================== Question No 5=========================================
Create an Object
Make an object called student with properties: name, age, class, isEnrolled.
👉 Task: Print each property using dot . notation and bracket [] notation.
======================================= Answer =====================================*/
// const student = {name : 'Aziz',
//     age : 24,
//     class : 'Matric',
//     isEnrolled : true};
//     console.log(student.isEnrolled);
//  console.log(student["age"]);

/*==================================== Question No 6=========================================
Update an Object
Add a new property grade to the student object and update the age value.
👉 Task: Show the updated object in the console.
======================================= Answer =====================================*/
// const student = {name : 'Aziz',
//     age : 24,
//     class : 'Matric',
//     isEnrolled : true};
//     student.grade = 'A';
//     student.age = 12;
//     console.log(student)
// delete student.isEnrolled;
// console.log(student)
// let check = student.hasOwnProperty('age');
// let che = 'age' in student;
// console.log(che);
// console.log(check)
/*=================================== Question No 7=========================================
Loop through Object
Make an object car with properties: brand, model, year, color.
👉 Task: Use a for...in loop to print all keys and values.
======================================= Answer =====================================*/
// const car = {brand : 'Toyota',
//   model : 2023,
//   color : 'black'
// }
// console.log(car)
// for(let key in car){console.log(`${key} : ${car[key]}`)}


/*==================================== Question No 8 =========================================
Goal: Create a Map that stores 3 user IDs (numbers) as keys and names as values. Then read the name for a given ID.
Input (example): add (1, "Ali"), (2, "Sara"), (3, "Omar") — then get id 2.
Expected output: "Sara"
Hint: use map.set() and map.get().
======================================= Answer =====================================*/
// const map = new Map();
// map.set('1','Umer');
// map.set('2','Habib');
// map.set('3','sara');
// console.log(map)
// console.log(map.get('1'))
// console.log(map.get('3'));

/*==================================== Question No 9 =========================================
new Map()
======================================= Answer =====================================*/

// const map = new Map();
// map.set('name','Aziz');
// map.delete('name');
// map.set('let','okok');
// map.set('1992','BirthYear');
// map.set('isAvailable','true');
// console.log(map.size);
// console.log(map.has('1992'));
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
// map.delete('name')
// console.log(map)



/*==================================== Question No 10 =========================================
simple bank account
======================================= Answer =====================================*/

// function createAccount(){let getName = document.getElementById('accountHolderName').value;
//   let getAccountNumber = document.getElementById('accountNo').value; 
//   let getBalance = Number(document.getElementById('initialBalance').value);
//   console.log(getName);
//   console.log(getAccountNumber);
//   console.log(getBalance);
//   const account = new Map();
//   account.set(getAccountNumber,{Name : getName, Balance : getBalance});
//   console.log(account)
//   let output = '';
//   account.forEach((item,val)=>{output += `Account Number : ${val}| Name : ${item.Name}| Balance : ${item.Balance}`})
//   let ul = document.getElementById('ul');
//   ul.innerHTML = output;
  
// }
// // deposit 
// function deposit(){let getName = document.getElementById('accountHolderName').value;
//   let getAccountNumber = document.getElementById('accountNo').value; 
//   let getBalance = Number(document.getElementById('initialBalance').value);
//   let add = Number(document.getElementById('addBalance').value);
//   let newBalance = getBalance + add;
//   const account = new Map();
//   account.set(getAccountNumber,{Name : getName, Balance : newBalance});
//   console.log(account)
//   let output = '';
//   account.forEach((item,val)=>{output += `Account Number : ${val}| Name : ${item.Name}| Balance : ${item.Balance}`})
//   let ul = document.getElementById('ul');
//   ul.innerHTML = output;
  
// }
// // withdraw 
// function withdraw(){let getName = document.getElementById('accountHolderName').value;
//   let getAccountNumber = document.getElementById('accountNo').value; 
//   let getBalance = Number(document.getElementById('initialBalance').value);
//   let add = Number(document.getElementById('addBalance').value);
//   let newBalance = getBalance + add;
//   let withdraw = Number(document.getElementById('withdraw').value);
//   let availalbleBalance = newBalance - withdraw;
//   const account = new Map();
//   account.set(getAccountNumber,{Name : getName, Balance : availalbleBalance});
//   console.log(account)
//   let output = '';
//   account.forEach((item,val)=>{output += `Account Number : ${val}| Name : ${item.Name}| Balance : ${item.Balance}`})
//   let ul = document.getElementById('ul');
//   ul.innerHTML = output;
  
// }


/*==================================== Question No 11 =========================================
render obj data on dom


//  const student = {
//       name : 'Aziz',
//       class : 'Matric',
//       address : 'District Mianwali, Tehsil Essa khel, p/o kalabagh, kot chandan punjab'
//     };

//     let addr = student.address;

//     let ul = document.getElementById('ul');
//     let output = '';

//     Object.entries(student).forEach(([key, value]) => {
//       if (key === "address") {
//         // Add buttons for address
//         output += `<li>
//           ${key} : <span id="addressText">${value}</span>
//           <button onclick="truncate()">Truncate</button>
//           <button onclick="complete()">Full</button>
//         </li>`;
//       } else {
//         output += `<li>${key} : ${value}</li>`;
//       }
//     });

//     ul.innerHTML = output;

//     // function for truncating
//     function truncate() {
//       let shortAddress = addr.slice(0, 13) + '....';
//       document.getElementById("addressText").innerText = shortAddress;
//     }

//     // function for full address
//     function complete() {
//       let completeAddress = addr;
//       document.getElementById("addressText").innerText = completeAddress;
//     }
/*==================================== Question No 12 =========================================
promise and api
======================================= Answer =====================================*/
// https://dummyjson.com/users 

// const myPromise = new Promise((resolve,reject)=>{
//   let num = prompt('enter number')
//   if(num % 2 === 0){resolve('promise succeede')}
// else{reject('promise failed')}})
// myPromise
// .then((resolve)=>{console.log(resolve)})
// .catch((reject)=>{console.log(reject)})

// function api(){const apiUrl = 'https://dummyjson.com/users';
//   fetch(apiUrl)
//   .then((sucees)=>{return sucees.json()})
//   .then((realData)=>{console.log(realData);
//     show(realData.users)
//   })
//   .catch((err)=>{console.log(err)})
// }
// api()
// function show(api){let ul = document.getElementById('ul');
//   ul.innerHTML = api.map((item)=>{return `
//     <li>${item.id}: ${item.firstName}: ${item.lastName}</li>`}).join('')
// }
// show()

/*==================================== Question No 13 =========================================
api practice
======================================= Answer =====================================*/
   

// let display = document.getElementById('display');
// function showData(showApi){if(Array.isArray(showApi) && showApi.length > 0){
//   display.innerHTML = showApi.map((item)=>{return `
//     <li>${item.id} : ${item.firstName} : ${item.lastName}</li>`}).join('');
// }
// }




// const showApi = async()=>{const apiUrl = "https://dummyjson.com/users";
//   try{let response = await fetch(apiUrl);
//     let realData = await response.json();
//     console.log(realData);
//     showData(realData.users
//     )
//   }
//   catch(err){console.log(err);
//     display.innerHTML = `Failed to load users`
//   }
// }
// showApi()


/*==================================== Question No 14 =========================================
api learing
======================================= Answer =====================================*/
// let display = document.getElementById('result');
// function showData(apiLearing){if(Array.isArray(apiLearing) && apiLearing.length >0){
//   display.innerHTML = apiLearing.map((item)=>{return `
//     <p>${item.id} : ${item.title}</p>`}).join('')
// }}

// async function apiLearing() {const apiUrl = "https://dummyjson.com/posts";
//   try{let response = await fetch(apiUrl);
//     let realData = await response.json();
//     console.log(realData);
//     showData(realData.posts)
    
//   }
//   catch(err){console.log(err)}
  
// }

// apiLearing()

/*==================================== Question No 15 =========================================
weather api
======================================= Answer =====================================*/
// const result = document.getElementById('result');

// function show(fetchweather) {
//   result.innerHTML = `
//     <h2>Weather in ${fetchweather.name}</h2>
//     <p>🌡 Temperature: ${fetchweather.main.temp} °C</p>
//     <p>💧 Humidity: ${fetchweather.main.humidity}%</p>
//     <p>☁ Condition: ${fetchweather.weather[0].description}</p>
//   `;
// }

// const myKey = "524de47951348514881bedc93af15627";
// const city = "Islamabad";

// const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}&units=metric`;

// async function fetchweather() {
//   try {
//     let data = await fetch(link);
//     let realData = await data.json();
//     console.log(realData); // check full response in console
//     show(realData);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// fetchweather();
/*==================================== Question No 16 =========================================
object oriented programming
======================================= Answer =====================================*/
// var obj = {user : 'Ahmed',
//   greet : function (){console.log('hello',this)}
// }
// console.log(obj)
// obj.greet()

// pillar no 2 Class 
// class Person {
//   constructor (name) {this.name = name}
//   greet(){console.log(`hello ${this.name}`)}
// }
// let p1 = new Person('john');
// console.log(p1)
// p1.greet()
// let p2 = new Person('Faraz');
// p2.greet()

/*==================================== Question No 17 =========================================
Task: Create a Car class

The class should have a constructor that takes:

brand

model

year
======================================= Answer =====================================*/

// class Car {
//   constructor (brand,model,year){this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   displayInfo(){console.log(`This car is ${this.year} ${this.brand} ${this.model}`)}
//   start(){console.log(`The ${this.brand} ${this.model} is starting....`)}
// }
// let output = new Car('Toyota','civic',2024)
// console.log(output);
// output.displayInfo();
// output.start();
// Add a method displayInfo() that logs:

// This car is a 2020 Toyota Corolla

/*==================================== Question No 18 =========================================
Create a Student class with properties: name, age, and grade.

Add a method introduce() → logs:

Hi, my name is Ali, I am 20 years old, and I am in grade A.
======================================= Answer =====================================*/
// class Student {
//   constructor(name,age,grade){this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
//   introduce(){console.log(`Hi, my name is ${this.name}, I am ${this.age} Years old, and I am in grade ${this.grade}`)}
// }
// let student = new Student('Aziz',30,'A');
// console.log(student);
// student.introduce();
// let student2 = new Student('Ahmed',40,'B');
// student2.introduce();


/*==================================== Question No 19 =========================================
Task 2: BankAccount Class

Create a BankAccount class with properties: accountHolder, balance.

Add methods:

deposit(amount) → increases balance.

withdraw(amount) → decreases balance (but only if enough money).

checkBalance() → logs current balance.
======================================= Answer =====================================*/

// class BankAccount {
//   constructor(Name,Balance){this.Name = Name;
//     this.Balance = Balance;
//   }
//   // deposit 
//   deposit(amount){this.Balance = this.Balance + amount;
//     console.log(`NewBalance : ${this.Balance}`)
//   }
//   // withdraw 
//   withdraw(amount){if(amount < this.Balance){this.Balance = this.Balance - amount;
//     console.log(`UpdatedBalance : ${this.Balance}`)
//   }}
//   currentBalance(){console.log(`CurrentBalance : ${this.Balance}`)}
// }
// let bankDetails = new BankAccount('Saleem',1000);
// console.log(bankDetails);
// bankDetails.deposit(500);
// bankDetails.withdraw(300);
// bankDetails.currentBalance();

   

/*==================================== Question No 20 =========================================
Object oriented programming inheritence
======================================= Answer =====================================*/
// class Person {
//   constructor (name){this.name = name};
//   greet(){console.log('hello',this.name)}
// }
// let output = new Person('amir');
// console.log(output);
// output.greet();
// // inheritence class 
// class Employee extends Person {
// constructor (name,title){
//   super(name)
//   this.name = name;
//   this.title = title;
// }
// work(){console.log(`${this.name} has a designation of ${this.title}`)}
// }
// const employee1 = new Employee('simith','engineer');

// console.log(employee1);
// employee1.work();
// employee1.greet()


/*==================================== Question No 21 =========================================
oop inheritence
======================================= Answer =====================================*/

// class Student {
//   constructor(name){this.name = name;}
//   greeting(){console.log(`Hello ${this.name}`)}
// }
// class Teacher extends Student {
//   constructor(name,title){
//     super(name)
//     this.title = title;
//   }
//   working(){console.log(`${this.name} is ${this.title} student`)}
// }

// const output = new Teacher('Aziz','Not Genius');
// console.log(output);
// output.working();
// output.greeting();

/*==================================== Question No 22 =========================================
Add Subjects for Students

Add a property subjects (array).

Create a method addSubject(subject) to push new subjects.

Create a method listSubjects() to display all subjects.
======================================= Answer =====================================*/
// class Subjects {
//   constructor(subject1, subject2){
//     this.subjects = [];
//     if(subject1){this.subjects.push(subject1)}
//     if(subject2){this.subjects.push(subject2)}
//   }
//   show(){console.log(this.subjects)}
// }
// // let final = new Subjects('Math','science');
// // final.show()
// class SubjectsFinal extends Subjects {
//   constructor(subject1,subject2,subject3,subject4){
//     super(subject1,subject2)
//     if(subject3){this.subjects.push(subject3)}
//     if(subject4){this.subjects.push(subject4)}

//   }
//   work(){console.log(this.subjects)}
// }
// let finalOutput = new SubjectsFinal('Education','Social','Islamiat','Geo');
// finalOutput.work();


/*==================================== Question No 23 =========================================
School System

Person → properties: name, age.

Student extends Person → add property grade.

Teacher extends Person → add property subject.

Both should have introduce() method but customized.
======================================= Answer =====================================*/
// class Person {
//   constructor(name,age){this.name = name;
//     this.age = age;
//   }
// }

// let output = new Person('Aleem',30);
// class Student extends Person {
//   constructor(name,age,Grade){
//     super(name,age);
//     this.Grade = Grade;
//   }
// }
// let output2 =  new Student('A')

// class Teacher extends Student {
//   constructor(name,age,Grade,subject){
//     super(name,age,Grade);
//     this.subject = subject;

//   }
//   inroduce(){console.log(`The students name is ${this.name} and age is ${this.age}. The student subject 
//     is ${this.subject} and he got grade ${this.Grade}`)}
    
// }
// let result = new Teacher('amir',20,'B','science');
// result.inroduce()
/*==================================== Question No 24 =========================================
Employee → Manager

Employee has name and salary.

Method info() → "Employee {name} earns {salary}".

Manager extends Employee with extra property department.

Method info() should override and show "Manager {name} of {department} earns {salary}".
======================================= Answer =====================================*/
// class Employee {
//   constructor(name,salary){this.name = name;
//     this.salary = salary;
//   }
//   info(){console.log(`${this.name} earns ${this.salary}`)}
// }
// class Manager extends Employee {
//   constructor(name,salary,department){
//     super(name,salary);
//     this.department = department;

//   }
//   info(){console.log(` Manager ${this.name} of ${this.department} earns ${this.salary}`)}
// }
// let result = new Manager('umer','20000','Live stock');
// result.info();

/*==================================== Question No 25 =========================================
polymorphism in oop
======================================= Answer =====================================*/
// polymorphism 
// class Animals {
//   constructor(){}
//   speak(){ console.log('animals are talking')}
// }
// const newAnimal = new Animals();
// newAnimal.speak();

// class Humans extends Animals {
//   speak(){console.log('Human are talking with each other')}
// }

// const newHuman = new Humans();
// newHuman.speak();


/*==================================== Question No 26 =========================================
Task 1: Vehicles

Create a parent class Vehicle with a method move().

Override move() in child classes:

Car → "The car drives on the road"

Boat → "The boat sails on water"

Plane → "The plane flies in the sky"

Store all objects in an array and call move() in a loop (polymorphism in action).
======================================= Answer =====================================*/
// class Vehicle {
//   move(){console.log('vehicle is moving')}
// }
// let output = new Vehicle();
// output.move();
// class Car extends Vehicle{
//   move(){console.log('The car drives on the roads')}
// }
// let output2 = new Car();
// output2.move();
// class Boat { 
//   move(){console.log('Boat sails on water')}
// }
// let output3 = new Boat();
// output3.move();

/*==================================== Question No 27 =========================================
Parent class Employee with method work().

Child classes override:

Developer → "Developer writes code"

Designer → "Designer creates UI"

Tester → "Tester tests the software"

Create an array of employees and loop through calling work().
======================================= Answer =====================================*/
// class Employee {
//   work(){console.log('Employee is working')}
// }

// let resul1 = new Employee();
// resul1.work();
// class Developer extends Employee {
//   work(){console.log('Developer writes code')}
// }
// let resul2 = new Developer();
// resul2.work();
// // designer
// class Designer extends Developer {
//   work(){console.log('Designer creates UI')}
// }
// let resul3 = new Designer();
// resul3.work();
// // tester
// class Tester extends Designer {
//   work(){console.log('Tester tests code')}

// }
// let resul4 = new Tester();
// resul4.work();
// let employees = [new Employee,new Developer,new Designer, new Tester];
// for(let emp of employees){emp.work()}


/*==================================== Question No 28 =========================================
Encapsulation(abstraction)
======================================= Answer =====================================*/
// class BankAccount {
// #Balance = 10;
// deposit(amount){console.log('Amount: ', amount);
//   if(amount > 0){this.#Balance = this.#Balance + amount;
  
//   }
// }
// getBalance(){return this.#Balance;}
// }
// const newAccount = new BankAccount();
// newAccount.deposit(100);
// let result = newAccount.getBalance();
// console.log(result);


/*==================================== Question No 29 =========================================
Task 1: Bank Account (Extend your example)

Keep #balance private.

Add methods:

withdraw(amount) → deduct only if enough balance.

getBalance() → return balance but never allow direct access.

Test by depositing, withdrawing, and checking balance.
======================================= Answer =====================================*/
// class BankAccount {
//   #balance = 100;
//   deposit(amount){this.#balance = this.#balance + amount;
//     console.log(`New Balance :  ${this.#balance}`)
//   }
//   withdraw(amount){if(this.#balance > amount){this.#balance = this.#balance - amount
//     console.log(`UpdatedBalance:  ${this.#balance}`)
//   }
// else{console.log('insufficient balance')}}
// }

// let newAccount = new BankAccount();
// newAccount.deposit(500);
// newAccount.withdraw(2000);

/*==================================== Question No 30 =========================================
Student Marks

Create Student class with private field #marks.

Add method addMarks(marks) → only allow if marks are between 0–100.

Add method getMarks() → return marks.

Try adding wrong marks to test validation.
======================================= Answer =====================================*/
// class Student {
//   #marks = 0;
//   addMarks(marks){if(marks >= 0 && marks <=100){
// this.#marks = this.#marks + marks;
//   }else{console.log('not valid marks entry')}
// }
// getMarks(){return this.#marks}
// }


// const result = new Student();
// result.addMarks(89);
// let ans = result.getMarks();
// console.log(ans)




/*==================================== Question No 31 =========================================
User Password System

Create User class with private field #password.

Method setPassword(pass) → must be at least 6 characters.

Method checkPassword(pass) → return true if correct, else false.

Ensure password cannot be accessed directly.
======================================= Answer =====================================*/
// class Private {
//   #password = '';
//   setPassword(pass){if(pass.length >= '6'){this.#password = this.#password + pass}
// else{console.log('passowrd length must not be less than 6')}}
// checkPassword(){if(this.#password.length >= '6'){console.log('ture')}
// else{console.log('false')}}
// }
// let result = new Private();
// result.setPassword('87ab7')
// result.checkPassword()

/*==================================== Question No 32 =========================================
object
======================================= Answer =====================================*/
// let person = {
//   name: 'Aziz',
//   age: 30,
//   greet: function () {
//     return 'hello ' + this.name;
//   }
// }

// console.log(person.greet()); 
// Output: hello Aziz


/*==================================== Question No 33 =========================================
class in oop
======================================= Answer =====================================*/
// class Student {
// constructor(name,age,designation){this.name = name;
//   this.age = age;
//   this.designation = designation;
// }
// details(){return `My name is ${this.name} and my age is ${this.age} and my designation is ${this.designation}`}
// }
// const newStudent = new Student('Aziz',30,'Designer')
// console.log(newStudent);
// let ans = newStudent.details();
// console.log(ans)


/*==================================== Question No 34 =========================================
inheritence in oop
======================================= Answer =====================================*/
// class Student {
//   constructor (name){this.name = name;}
// }
// class Student2 extends Student {
//   constructor(name,age){super(name)
//     this.age = age}
//   show(){return `My name is ${this.name} and age is ${this.age}`}
// }
// const result = new Student2('Ahmed',30);
// let ans = result.show();
// console.log(ans)



/*==================================== Question No 35 =========================================
polymorphism in  oop
======================================= Answer =====================================*/
// class Cars {
//   works(){return `cars are driving on roads`}
// }
// let ans1 = new Cars();
// let result = ans1.works();
// console.log(result)
// // 2 
// class Boats extends Cars{
//   works(){return `Boats are sailing on water`}
// }
// let ans2 = new Boats();
// let resul1 = ans2.works();
// console.log(resul1);
// // 3 
// class Kites extends Boats{
//   works(){return `kites are flying in air`}
// }
// let ans3 = new Kites();
// let resul3 = ans3.works();
// console.log(resul3)


/*==================================== Question No 36 =========================================
Encapsulation in oop
======================================= Answer =====================================*/
// class BankAccount {
//   #balance = 100;
//   // deposit
//   deposit(amount){if(this.#balance >= 0){ return this.#balance = this.#balance + amount}}
//   // withdraw 
//   withdraw(amount){if(this.#balance > amount){return this.#balance = this.#balance - amount}
// else{return `insufficient balance`}}
// getBalance(){return this.#balance}

// }
// const newAccount = new BankAccount();
// let checkBalance = newAccount.deposit(100);
// console.log(checkBalance);
// let checkAfterWithdraw = newAccount.withdraw(800);
// console.log(checkAfterWithdraw);
// let currentBalance = newAccount.getBalance();
// console.log(currentBalance);


/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/
class Remote {
  turnOn() {
    this.#sendSignal("Power On");
  }

  changeChannel(channel) {
    this.#sendSignal(`Changing to channel ${channel}`);
  }

  // hidden process
  #sendSignal(signal) {
    console.log("Signal sent:", signal);
  }
}

let remote = new Remote();
remote.turnOn();           // Signal sent: Power On
remote.changeChannel(5);   // Signal sent: Changing to channel 5

// ❌ remote.#sendSignal("hack"); // Error: private method



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*/