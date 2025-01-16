var person = {
    firstName: "Susheel",
    lastName: "Prajapati",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.firstName);
console.log(person.lastName);
console.log(person.id);
console.log(person.fullName());