function ticketsScan(text, info) {
    let name = (text, twoNamePattern, threeNamePattern) => {
      let twoNameArr = text.match(twoNamePattern);
      let threeNameArr = text.match(threeNamePattern);

      if (twoNameArr) {
          twoNameArr = text.match(twoNamePattern)
              .filter(el => {return el;})
              .map(el => {return el.trim();});
          let finalArr = twoNameArr[0].split(/-/g)
              .filter(el => {return el;})
              .map(el => {return el.trim()});
          console.log(`Mr/Ms, ${finalArr[0]} ${finalArr[1]}, have a nice flight!`);
      } else if (threeNamePattern) {
          threeNameArr = text.match(threeNamePattern)
              .filter(el => {return el;})
              .map(el => {return el.trim();});
          let finalArr = threeNameArr[0].split(/-/g)
              .filter(el => {return el;})
              .map(el => {return el.trim()});
          console.log(`Mr/Ms, ${finalArr[0]} ${finalArr[1]} ${finalArr[2]}, have a nice flight!`);
      }
    };

    let flight = (text, airportPattern, flightPattern) => {
        let newAirports = text.match(airportPattern)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
        let airports = newAirports[0].split(/\//g)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
        let flightNum = text.match(flightPattern)
            .filter(el => {return el;})
            .map(el => {return el.trim();});

        console.log(`Your flight number ${flightNum[0]} is from ${airports[0]} to ${airports[1]}.`);
    };

    let company = (text, companyNamePattern) => {
      let nameOfCompany = text.match(companyNamePattern)
          .filter(el => {return el;})
          .map(el => {return el.trim();});
      let finalCompany = nameOfCompany[0].split(/\*|-\s/g)
          .filter(el => {return el;})
          .map(el => {return el.trim();});

        console.log(`Have a nice flight with ${finalCompany[0]} ${finalCompany[1]}.`);
    };

    let all = (text, threeNamePattern, twoNamePattern, airportPattern, flightPattern, companyNamePattern) => {
        let twoNameArr = text.match(twoNamePattern);
        let threeNameArr = text.match(threeNamePattern);
        let newAirports = text.match(airportPattern)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
        let airports = newAirports[0].split(/\//g)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
        let flightNum = text.match(flightPattern)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
        let nameOfCompany = text.match(companyNamePattern)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
        let finalCompany = nameOfCompany[0].split(/\*|-\s/g)
            .filter(el => {return el;})
            .map(el => {return el.trim();});

        if (twoNameArr) {
            twoNameArr = text.match(twoNamePattern)
                .filter(el => {return el;})
                .map(el => {return el.trim();});
            let finalArr = twoNameArr[0].split('-')
                .filter(el => {return el;})
                .map(el => {return el.trim()});
            console.log(`Mr/Ms, ${finalArr[0]} ${finalArr[1]}, your flight number ${flightNum[0]} is from ${airports[0]} to ${airports[1]}. Have a nice flight with ${finalCompany[0]} ${finalCompany[1]}.`);
        } else if (threeNamePattern) {
            threeNameArr = text.match(threeNamePattern)
                .filter(el => {return el;})
                .map(el => {return el.trim();});
            let finalArr = threeNameArr[0].split('-')
                .filter(el => {return el;})
                .map(el => {return el.trim()});
            console.log(`Mr/Ms, ${finalArr[0]} ${finalArr[1]} ${finalArr[2]}, your flight number ${flightNum[0]} is from ${airports[0]} to ${airports[1]}. Have a nice flight with ${finalCompany[0]} ${finalCompany[1]}.`);
        }
    };

    const threeNamePattern = new RegExp('\\s[A-Z][A-Za-z]*-[A-Z][A-Za-z]*\\.-[A-Z][A-Za-z]*', 'g');
    const twoNamePattern = new RegExp('\\s[A-Z][A-Za-z]*-[A-Z][A-Za-z]*\\s', 'g');
    const airportPattern = new RegExp('\\s[A-Z]{3}\\/[A-Z]{3}\\s', 'g');
    const flightPattern = new RegExp('\\s[A-Z]{1,3}[0-9]{1,5}\\s', 'g');
    const companyNamePattern = new RegExp('-\\s[A-Z][A-Za-z]*\\*[A-Z][A-Za-z]*\\s', 'g');

    if (info === 'name') {
        name(text, twoNamePattern, threeNamePattern);
    } else if (info === 'flight') {
        flight(text, airportPattern, flightPattern);
    } else if (info === 'company') {
        company(text, companyNamePattern);
    } else if (info === 'all') {
        all(text, threeNamePattern, twoNamePattern, airportPattern, flightPattern, companyNamePattern);
    }
}