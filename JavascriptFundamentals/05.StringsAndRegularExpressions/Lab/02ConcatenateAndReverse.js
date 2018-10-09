function reverse(data) {
    let output = data.map(el => {
        let newEl = '';

        for (let i = el.length-1; i >= 0; i--) {
            newEl += el[i];
        }

        return newEl;
    }).reverse();

    console.log(output.join(''));
}