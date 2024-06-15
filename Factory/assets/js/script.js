function createPerson(name, lasName, age) {
    return {
        name,
        lasName,
        age
    }
}

let person1 = createPerson('Bonieky', 'Lacerda', 90);
let person2 = createPerson('lucas', 'Moraes', 33);
console.log(person1.name);
