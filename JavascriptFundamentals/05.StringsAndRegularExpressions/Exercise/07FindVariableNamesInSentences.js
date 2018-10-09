function findVars(str) {
    let pattern = new RegExp('\\b\\_[A-Za-z]+\\b', 'gm');

    let result = str.match(pattern)
        .map(el => {
            return el.slice(1);
        });

    console.log(result.join());
}