function filterByAge(minAge, name1, age1, name2, age2) {
    let person1 = {
        name: name1,
        age: age1
    };

    let person2 = {
        name: name2,
        age: age2
    };
    
    if (person1.age >= minAge && person2.age >= minAge) {
        if (person1.age >= person2.age) {
            console.log(person1);
            console.log(person2);
        } else {
            console.log(person2);
            console.log(person1);
        }
    } else if (person1.age >= minAge && person2.age < minAge) {
        console.log(person1);
    } else if (person1.age < minAge && person2.age >= minAge) {
        console.log(person2);
    }
}