function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = "Jane User";
console.log(greeter(user)); //This works fine

let user1: string[] = ["Jane", "User"];
console.log(greeter(user1)); //This also works fine