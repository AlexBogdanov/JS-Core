function cutProcedure(data) {
    let cut = (crystal) => crystal / 4;
    let lap = (crystal) => crystal - (crystal * 0.20);
    let grind = (crystal) => crystal - 20;
    let etch = (crystal) => crystal - 2;
    let xRay = (crystal) => crystal + 1;
    let transportingAndWashing = (crystal) => Math.floor(crystal);

    let finalCrystal = +data[0];

    for (let i = 1; i < data.length; i++) {
        let currChunk = +data[i];

        console.log(`Processing chunk ${currChunk} microns`);

        while (currChunk > finalCrystal) {
            if (currChunk >= finalCrystal * 4) {
                let count = 0;

                while (currChunk >= finalCrystal * 4) {
                    count++;
                    currChunk = cut(currChunk);
                }

                console.log(`Cut x${count}`);
                currChunk = transportingAndWashing(currChunk);
                console.log('Transporting and washing');
            } else if (currChunk >= finalCrystal + (finalCrystal * 0.20)) {
                let count = 0;

                while (currChunk >= finalCrystal + (finalCrystal * 0.20)) {
                    count++;
                    currChunk = lap(currChunk);
                }

                console.log(`Lap x${count}`);
                currChunk = transportingAndWashing(currChunk);
                console.log('Transporting and washing');
            } else if (currChunk >= finalCrystal + 20) {
                let count = 0;

                while (currChunk >= finalCrystal + 20) {
                    count++;
                    currChunk = grind(currChunk);
                }

                console.log(`Grind x${count}`);
                currChunk = transportingAndWashing(currChunk);
                console.log('Transporting and washing');
            } else if (currChunk >= finalCrystal + 1) {
                let count = 0;

                while (currChunk >= finalCrystal + 1) {
                    count++;
                    currChunk = etch(currChunk);
                }

                console.log(`Etch x${count}`);
                currChunk = transportingAndWashing(currChunk);
                console.log('Transporting and washing');
            }
        }

        if (currChunk < finalCrystal) {
            currChunk = xRay(currChunk);
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${currChunk} microns`);
    }
}