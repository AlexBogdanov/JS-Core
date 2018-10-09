function splitAString(text, deliemeter) {
    let output = text.split(deliemeter);

    output.forEach(el => {
        console.log(el);
    });
}