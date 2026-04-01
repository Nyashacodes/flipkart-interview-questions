const user1 = {
  name: "Nyasha"
};

const user2 = {
  name: "Alex"
};

function greet(city) {
  console.log(`${this.name} from ${city}`);
}

// reuse same function
greet.call(user1, "Bangalore");
greet.call(user2, "Delhi");

const users = [
  { name: "Nyasha" },
  { name: "Alex" },
  { name: "John" }
];

users.forEach(user => greet.call(user, "India"));

// 👉 Without call, you’d have to:

// attach greet to every object ❌ messy
// 🔵 When each approach is used
// Approach	When to use
// user.greet()	Function belongs to object
// call/apply	Borrow function / dynamic context
// bind	Preserve this for later

// "We can call user.greet() only if the function is defined inside the object. But when the function is standalone or needs to be reused across multiple objects dynamically, we use call or apply to explicitly set this."


// 👉 user.greet() = function owned by object
// 👉 call/apply = function borrowed by object


// apply just take arguments as array
// greet.apply(user1, ["Bangalore"]);
// greet.apply(user2, ["Delhi"]);