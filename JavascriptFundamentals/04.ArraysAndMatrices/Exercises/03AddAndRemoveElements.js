function addAndRemove(data) {
    let add = (arr, el) => {
        arr.push(el);
        return arr;
    };

    let remove = (arr) => {
        arr.pop();
        return arr;
    };

    let output = [];

    for (let i = 0; i < data.length; i++) {
        let index = i + 1;
        let command = data[i];

        if (command === 'add') {
            output = add(output, index);
        } else if (command === 'remove') {
            output = remove(output);
        }
    }

    if (output.length < 1) {
        console.log('Empty');
    } else {
        output.forEach(el => console.log(el));
    }
}