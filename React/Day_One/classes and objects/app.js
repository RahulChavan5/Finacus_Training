// object : collection of key value pair 
    // in this example laptop is the object and rest are the properties.
const laptop = {
    color:'Black',
    model:'Dell05'
}

console.log(laptop.color);

//another example

const person={
    name:'Rahul',
    age:25,
    profession:'Student'
}

console.log(person.name)


// classes
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  const myCar = new Car("BMW", 2018);
  document.getElementById("example").innerHTML =
  myCar.name + " " + myCar.year;

// The example above creates a class named "Car".

// The class has two initial properties: "name" and "year".