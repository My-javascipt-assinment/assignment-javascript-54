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

======================================= Answer =====================================*/
// function basic(){ let name = document.getElementById("accountHolderName").value;
//   let number = document.getElementById("accountNo").value;
//   let balance = Number(document.getElementById('initialBalance').value);
//   console.log(name);
//   console.log(number);
//   console.log(balance);
//   const maper = new Map();
// maper.set(number, { name: name, balance: balance })
  
//   console.log(maper);
//   let ul = document.getElementById('ul');
//   let output = '';
//   maper.forEach((item,val)=>{output = output + `Number : ${number} Name : ${name} Balance : ${balance}` })
//   ul.innerHTML = output;
 
// }
// function deposit(basic){let deposit = Number(document.getElementById('addBalance').value);
//    let balance = Number(document.getElementById('initialBalance').value);

//   let newBalance = balance + deposit;
 
//   // show update
//   const maper = new Map();
// maper.set(number, { name: name, balance: balance })
//   let ul = document.getElementById('ul');
//   let output = '';
//   maper.forEach((item,val)=>{output = output + `Number : ${number} Name : ${name} Balance : ${newBalance}` })
//   ul.innerHTML = output;

 
//  }

// //  withdraw

// function withdraw(){let deposit = Number(document.getElementById('addBalance').value);
//    let balance = Number(document.getElementById('initialBalance').value);

//   let newBalance = balance + deposit;
  
  
  
//   let withdraw = Number(document.getElementById('withdraw').value);
//   let remainingBalance = newBalance - withdraw;
  
//   // show update 
//   const maper = new Map();
// maper.set(number, { name: name, balance: balance })
//   let ul = document.getElementById('ul');
//   let output = '';
//   maper.forEach((item,val)=>{output = output + `Number : ${number} Name : ${name} Balance : ${remainingBalance}` })
//   ul.innerHTML = output;
  
// }
function createAccount(){let getName = document.getElementById('accountHolderName').value;
  let getAccountNumber = document.getElementById('accountNo').value; 
  let getBalance = Number(document.getElementById('initialBalance').value);
  console.log(getName);
  console.log(getAccountNumber);
  console.log(getBalance);
  const account = new Map();
  account.set(getAccountNumber,{Name : getName, Balance : getBalance});
  console.log(account)
  let output = '';
  account.forEach((item,val)=>{output += `Account Number : ${val}| Name : ${item.Name}| Balance : ${item.Balance}`})
  let ul = document.getElementById('ul');
  ul.innerHTML = output;
  
}
// deposit 
function deposit(){let getName = document.getElementById('accountHolderName').value;
  let getAccountNumber = document.getElementById('accountNo').value; 
  let getBalance = Number(document.getElementById('initialBalance').value);
  let add = Number(document.getElementById('addBalance').value);
  let newBalance = getBalance + add;
  const account = new Map();
  account.set(getAccountNumber,{Name : getName, Balance : newBalance});
  console.log(account)
  let output = '';
  account.forEach((item,val)=>{output += `Account Number : ${val}| Name : ${item.Name}| Balance : ${item.Balance}`})
  let ul = document.getElementById('ul');
  ul.innerHTML = output;
  
}
// withdraw 
function withdraw(){let getName = document.getElementById('accountHolderName').value;
  let getAccountNumber = document.getElementById('accountNo').value; 
  let getBalance = Number(document.getElementById('initialBalance').value);
  let add = Number(document.getElementById('addBalance').value);
  let newBalance = getBalance + add;
  let withdraw = Number(document.getElementById('withdraw').value);
  let availalbleBalance = newBalance - withdraw;
  const account = new Map();
  account.set(getAccountNumber,{Name : getName, Balance : availalbleBalance});
  console.log(account)
  let output = '';
  account.forEach((item,val)=>{output += `Account Number : ${val}| Name : ${item.Name}| Balance : ${item.Balance}`})
  let ul = document.getElementById('ul');
  ul.innerHTML = output;
  
}


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