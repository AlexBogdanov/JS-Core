function convertInchesIntoFootsAndInches(inputInches) {
    inputInches = +inputInches;

    let foots = Math.floor(inputInches / 12);
    let inches = Math.floor(inputInches % 12);

    console.log(`${+foots}'-${+inches}"`);
}