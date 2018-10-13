function keepLog(data) {
    let travellers = new Map();

    for (let i = 0; i < data.length; i++) {
        const tokens = data[i].split(/\s+/g)
            .filter(el => {return el;})
            .map(el => {return el.trim();});

        if (tokens[1] === 'gets') {
            const [name, moneyStr] = data[i].split(/\s*gets\s*/g)
                .filter(el => {return el;})
                .map(el => {return el.trim();});
            const money = +moneyStr;

            if (!travellers.has(name)) {
                travellers.set(name, {});
            }

            travellers.get(name).budget += money;
            travellers.get(name).conuntriesAndLandmarks = new Map();
        } else if (tokens[1] === 'visited') {
            const currTokens = data[i].split(/\s+/g)
                .filter(el => {return el;})
                .map(el => {return el.trim();});
            const name = currTokens[0];
            const landmark = currTokens[3];
            const country = currTokens[5];
            const cost = +currTokens[8];


        }
    }
}

keepLog(
    ['Peter gets 100',
        'Peter visited the StatueOfLiberty in USA - 50',
        'Bill gets 250',
        'Tim visited the ChristTheRedeemer in Brazil - 150',
        'Bill gets 400',
        'Bill visited the MountFuji in Japan - 600',
        'Bill visited the TeatroAmazonas in Brazil - 50',
        'Bill gets 150',
        'Bill visited the ChristTheRedeemer in Brazil - 150',
        'Tim gets 500',
        'Bill visited the StatueOfLiberty in USA - 440',
        'Tim visited the StatueOfLiberty in USA - 440',
        'Maria gets 650',
        'Maria visited the StatueOfLiberty in USA - 440',
        'Maria visited the CapeCod in USA - 100']
);