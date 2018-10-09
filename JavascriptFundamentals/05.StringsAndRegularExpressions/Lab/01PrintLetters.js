function printLetters(text) {
    let arr = text.split('');

    arr.map((el, index) => {
        console.log(`str[${index}] -> ${el}`);
    })
}