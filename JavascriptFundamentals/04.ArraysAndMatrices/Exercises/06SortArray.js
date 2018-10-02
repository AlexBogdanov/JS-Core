function sortArr(data) {
    data.sort()
    .sort((x, y) => {
        return x.length - y.length
    });
    
    data.forEach(el => console.log(el));
}