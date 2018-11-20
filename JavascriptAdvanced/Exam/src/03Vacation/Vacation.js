class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    // Might have a mistake
    registerChild(name, grade, budget) {
        if (this.budget <= budget) {
            if (!this.kids.hasOwnProperty(grade)) {
                this.kids[grade] = [];
            }
            let kidsNames = [];
            this.kids[grade].forEach(kid => {
                kidsNames.push(kid.split('-')[0]);
            });
            if (kidsNames.includes(name)) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }
            this.kids[grade].push(`${name}-${budget}`);
            return this.kids[grade];
        } else {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
    }

    removeChild(name, grade) {
        let kidsNames = [];
        this.kids[grade].forEach(kid => {
            kidsNames.push(kid.split('-')[0]);
        });
        if (kidsNames.includes(name)) {
            let index = kidsNames.indexOf(name);
            this.kids[grade].splice(index, 1);
            return this.kids[grade];
        }
        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {
        let sortedGrades = Object.keys(this.kids).sort((grade1, grade2) => {
            return grade1.localeCompare(grade2);
        });
        let output = '';
        if (Object.keys(this.kids).length > 0) {
            output = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
            sortedGrades.forEach(grade => {
                output += `Grade: ${grade}\n`;
                this.kids[grade].forEach((kid, number) => {
                    output += `${number+1}. ${kid}\n`;
                });
            });
        } else {
            output += `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        return output;
    }

    get numberOfChildren() {
        let output = 0;
        let grades = Object.keys(this.kids);
        grades.forEach(grade => {
            output += this.kids[grade].length;
        });
        return output;
    }
}

module.exports = Vacation;