function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi! (this refers to the global obj)

let person = {
    name: 'Bob',
    greet: greet
}

person.greet(); // my name is Bob, hi!

let sally = { name: 'Sally' };

greet.call(sally);
// my name is Sally, hi!

greet.apply(sally);
// my name is Sally, hi!

// we can use call or apply to invoke a function with a specified context
//Both call and apply let us set the value of this to whatever we pass as the first argument

let newGreet = greet.bind(sally); // newGreet is context-bound to sally

newGreet('Bob');
// Hi Bob, my name is Sally!


class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}
 
class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
 
    matchInterests(event) {
        return event.keywords.some(
            function(word) {
                return this.interests.includes(word);
            }.bind(this) // added to the and of the callback function
        );
    }
}
 
let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
 
billy.matchInterests(freeMusic);

matchInterests(event) {
    return event.keywords.some(word => this.interests.includes(word));
  }