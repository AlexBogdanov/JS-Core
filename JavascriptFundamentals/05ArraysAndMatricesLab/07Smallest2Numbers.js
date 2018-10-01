function printSmallest2(data) {
    data.sort((x, y) => {
        return x - y;
    });

    console.log(`${data[0]} ${data[1]}`);
}