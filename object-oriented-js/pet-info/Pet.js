  class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  get activity() {      //value (activity) is dynamic because it depends on the time of the date, we can't set to the constructured method
    const today = new Date();   // hold a new instance of js object. Data ()returns a string representation of the current date and time
    const hour = today.getHours(); //returns the hour for the specified date, according to local time.
  
    if (hour > 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  } //if we output to the console, we won't see the activity.
  //we only get the gette value when we access it, but never attach to the object.
  //we have to access it directly otherwise the value won't show.
  
  get owner() {       //if we need to retrieve owner value at setter function, we need to declare it in order to access it. 
    return this._owner;
  }
  
  set owner(owner) {  //setter always with one parameter
    this._owner = owner; //the name of the property would never be the same as the getter or setter property. we can't do this.own, we need backing property like ._owner.  
    console.log(`setter called: ${owner}`);
  }
  
  
  speak() {
    console.log(this.sound);
  }
} 

class Owner {
  constructor(name, address){
    this.name = name;
    this.address = address;
  }
  set phone(phone) {        // great to use setter when we want to store a logic value or simplify your coding process, we can normalize the phone number here
    const phoneNormalized = phone.replace(/[^0-9]/g, ''); // second argument, replace any non-numerial string to an empty space here
    this._phone = phoneNormalized
  }
  get phone() {
    return this._phone;
  }
}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

ernie.owner = 'Ashley', '123 Main Street';
ernie.owner.phone = '(555) 555-5555';

console.log(ernie.owner.name);
console.log(ernie.owner.phone);



