function printArr(data) {
    let delimeter = data[data.length-1];
    data.pop();

    console.log(data.join(delimeter));
}