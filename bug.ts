function greeter(person: string): string {
  return "Hello, "+ person;
}

let user = "Jane User";
console.log(greeter(user)); //This works fine

let user1: string = ["Jane", "User"]; //Type 'string[]' is not assignable to type 'string'.
console.log(greeter(user1));