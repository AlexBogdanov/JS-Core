function warehouseMachine(data) {
    let inCommand = (coffees, tokens) => {
        const [command, brand, type, date, quantityStr] = tokens;
        const quantity = +quantityStr;

        if (!coffees.has(brand)) {
            coffees.set(brand, new Map());
        }

        if (!coffees.get(brand).has(type)) {
            coffees.get(brand).set(type, {date: '', quantity: 0});
        }

        const date1Arr = coffees.get(brand).get(type).date.split('-');
        const date2Arr = date.split('-');

        if (coffees.get(brand).get(type).quantity === 0) {
            coffees.get(brand).get(type).quantity = quantity;
            coffees.get(brand).get(type).date = date;
        }
        else if (date1Arr[0] < date2Arr[0]) {
            coffees.get(brand).get(type).quantity = quantity;
            coffees.get(brand).get(type).date = date;
        } else if (date1Arr[0] === date2Arr[0] && date1Arr[1] < date2Arr[1]) {
            coffees.get(brand).get(type).quantity = quantity;
            coffees.get(brand).get(type).date = date;
        } else if (date1Arr[0] === date2Arr[0] && date1Arr[1] === date2Arr[1] && date1Arr[2] < date2Arr[2]) {
            coffees.get(brand).get(type).quantity = quantity;
            coffees.get(brand).get(type).date = date;
        } else if (date1Arr[0] === date2Arr[0] && date1Arr[1] === date2Arr[1] && date1Arr[2] === date2Arr[2]) {
            coffees.get(brand).get(type).quantity += quantity;
        }

        return coffees;
    };

    let outCommand = (coffees, tokens) => {
        const [command, brand, type, date, quantityStr] = tokens;
        const quantity = +quantityStr;

        if (coffees.has(brand) && coffees.get(brand).has(type)) {
            let date1Arr = coffees.get(brand).get(type).date.split('-');
            let date2Arr = date.split('-');

            if (+date1Arr[0] > +date2Arr[0]) {
                if (coffees.get(brand).get(type).quantity >= quantity) {
                    coffees.get(brand).get(type).quantity -= quantity;
                }
            } else if (+date1Arr[0] === +date2Arr[0] && +date1Arr[1] > +date2Arr[1]) {
                if (coffees.get(brand).get(type).quantity >= quantity) {
                    coffees.get(brand).get(type).quantity -= quantity;
                }
            } else if (+date1Arr[0] === +date2Arr[0] && +date1Arr[1] === +date2Arr[1] && +date1Arr[1] > +date2Arr[1]) {
                if (coffees.get(brand).get(type).quantity >= quantity) {
                    coffees.get(brand).get(type).quantity -= quantity;
                }
            }
        }

        return coffees;
    };

    let reportCommand = (coffees) => {
        console.log(`>>>>> REPORT! <<<<<`);

        Array.from(coffees.keys()).forEach(brand => {
            console.log(`Brand: ${brand}:`);

            Array.from(coffees.get(brand).keys()).forEach(type => {
                console.log(`-> ${type} -> ${coffees.get(brand).get(type).date} -> ${coffees.get(brand).get(type).quantity}.`);
            })
        })
    };

    let inspectionCommand = (coffees) => {
        console.log(`>>>>> INSPECTION! <<<<<`);

        let sortedBrands = Array.from(coffees.keys()).sort((brand1, brand2) => {
          if (brand1 < brand2) {
              return -1;
          } else if (brand1 > brand2) {
              return 1;
          } else {
              return 0;
          }
      });

      sortedBrands.forEach(brand => {
          console.log(`Brand: ${brand}:`);

          Array.from(coffees.get(brand).keys()).sort((type1, type2) => {
              let quantity1 = coffees.get(brand).get(type1).quantity;
              let quantity2 = coffees.get(brand).get(type2).quantity;

              return quantity2 - quantity1;
          }).forEach(type => {
              console.log(`-> ${type} -> ${coffees.get(brand).get(type).date} -> ${coffees.get(brand).get(type).quantity}.`);
          })
      })
    };

    let coffees = new Map();

    for (let i = 0; i < data.length; i++) {
        let tokens = data[i].split(/\s*,\s*/g)
            .filter(el => {return el;})
            .map(el => {return el.trim()});

        if (tokens[0] === 'IN') {
            coffees = inCommand(coffees, tokens);
        } else if (tokens[0] === 'OUT') {
            coffees = outCommand(coffees, tokens);
        } else if (tokens[0] === 'REPORT') {
            reportCommand(coffees);
        } else if (tokens[0] === 'INSPECTION') {
            inspectionCommand(coffees);
        }
    }
}