function convertWords(input) {
    let arr = input.split(RegExp(/[\W\_\s]/));
    let res = arr.join(" ").split(' ');
    
    let output = '';

    for (let i = 0; i < res.length; i++) {
        if (res[i] === '')
            continue;

            output += res[i].toUpperCase() + ', ';
    }

    if (output.endsWith(', ')) {
        let temp = output;
        output = '';

        for (let i = 0; i < temp.length - 2; i++)
            output += temp[i];
    }

    console.log(output);
}