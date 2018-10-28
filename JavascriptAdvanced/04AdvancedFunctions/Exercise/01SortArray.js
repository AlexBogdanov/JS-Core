function arraySorter(data, command) {
    let sortArray = (() => {
        return {
            asc: (data) => {
                let arr = data.sort((a, b) => {
                    return a - b;
                });
                
                return arr;
            },
            desc: (data) => {
                let arr = data.sort((a, b) => {
                    return b - a;
                });
                
                return arr;
            }
        }
    })();
    
    return sortArray[command](data);
}