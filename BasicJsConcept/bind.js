const user = {
  name: "Nyasha",
  greet() {
    console.log(`Hello ${this.name}`);
  }
};

//with bind
const boundFunction = user.greet.bind(user);
boundFunction(); //Hello Nyasha

//👉 bind permanently attaches this = user
// setTimeout(user.greet.bind(user), 1000); //Hello Nyasha



//without bind

// const boundFunction = user.greet;
// boundFunction();     //hello undefined
//OR
// setTimeout(user.greet, 1000); //Hello undefined



//Problem happens when the function is detached from the object.
// this is no longer user
// It becomes "window" (or undefined in strict mode)