console.clear();
/*
Reference types in JS
1. functions
2. objects
3. arrays
*/
let fName = 'John'
let lName = 'Cash'
let age = 30
console.log(fName);//"John"
//1. Creating person object
let person = {
  fName : 'John',
  lName : 'Cash',
  age : 30
}
/*
There are 2 ways to access the object properties.
1. Dot notation . This is more common.
2. Square Bracket notation []
*/
console.log(person.fName);//John
console.log(person.lName);//Cash
console.log(person['age']);//30


//Editting Existing property
console.log(person)
person.fName = 'Tim';//assigning new value for fName
console.log(person)
person['lName']='Thomson';
console.log(person)
//Adding a new property
person.country='USA';
console.log(person)
person['isEmployed'] = true;
console.log(person)
//Delete properties from an object
delete person.age;
console.log(person);

//3. Iteration of an object: let VARNAME in OBJECTNAME
let addressInfo = {
    street : 'Little Elm Creek',
    aptNumber : 1550,
    state : 'CA',
    city : 'LA',
    country : 'USA'
  }
  let counter=0;
  for(let eachItem in addressInfo){
    counter++
    console.log('KEY : '+counter +' =>  '+eachItem);
    console.log('VALUE : '+counter+' => '+addressInfo[eachItem]);
  /*
  "Little Elm Creek"
  1550
  "CA"
  "LA"
  "USA" 
  KEY : 1 =>  street
 VALUE : 1 => Little Elm Creek
 KEY : 2 =>  aptNumber
 VALUE : 2 => 1550
 KEY : 3 =>  state
 VALUE : 3 => CA
 KEY :  4 =>  city
 VALUE : 4 => LA
 VALUE : 5 => USA
  */
  }
  //Before destructuring accession street
  console.log(addressInfo.street);//"Little Elm Creek"
  //4. Destructuring Objects
  //Desctructing allows us to extract the properties from an object
  //It is to make the accessing properties easier
  const {street,aptNumber,state,city,country} = addressInfo;//desctructuring the object
  console.log(street);//"Little Elm Creek"
  console.log(city);//"LA"
  //done!
  
