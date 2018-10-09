function countWordsMap(data) {
    let pattern = new RegExp('\\w+', 'gi');

    let dataArr = data[0].match(pattern)
        .map(el => {
            return el.toLowerCase()
        });
    let result = new Map();

    dataArr.forEach(key => {
        let check = result.has(key);
        if (!check) {
            result.set(key, 1);
        } else {
            result.set(key, result.get(key) + 1);
        }
    });

    let keys = Array.from(result.keys())
        .sort();

    keys.forEach(el => {
        console.log(`'${el}' -> ${result.get(el)} times`);
    });
}