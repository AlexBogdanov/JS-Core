function locateTreasure(data) {
    let tokelau = {
        x1: 8,
        x2: 9,
        y1: 0,
        y2: 1
    };

    let tuvalu = {
        x1: 1,
        x2: 3,
        y1: 1,
        y2: 3
    };

    let samoa = {
        x1: 5,
        x2: 7,
        y1: 3, 
        y2: 6
    };

    let tonga = {
        x1: 0,
        x2: 2,
        y1: 6,
        y2: 8
    };

    let cook = {
        x1: 4,
        x2: 9,
        y1: 7,
        y2: 8
    };

    let index = 0;

    for (let i = 1; i <= data.length / 2; i++) {
        let x = +data[index++];
        let y = +data[index++];

        if (x >= tokelau.x1 && x <= tokelau.x2 && y >= tokelau.y1 && y <= tokelau.y2) {
            console.log('Tokelau');
        } else if (x >= tuvalu.x1 && x <= tuvalu.x2 && y >= tuvalu.y1 && y <= tuvalu.y2) {
            console.log('Tuvalu');
        } else if (x >= samoa.x1 && x <= samoa.x2 && y >= samoa.y1 && y <= samoa.y2) {
            console.log('Samoa');
        } else if (x >= tonga.x1 && x <= tonga.x2 && y >= tonga.y1 && y <= tonga.y2) {
            console.log('Tonga');
        } else if (x >= cook.x1 && x <= cook.x2 && y >= cook.y1 && y <= cook.y2) {
            console.log('Cook');
        } else {
            console.log('On the bottom of the ocean');
        }
    }
}