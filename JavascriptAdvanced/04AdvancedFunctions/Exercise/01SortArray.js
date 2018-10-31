function sortArray(data, command) {
    function finalSort() {
        return {
            asc: (data) => {
                return data.sort((a, b) => a - b);
            },
            desc: (data) => {
                return data.sort((a, b) => b - a);
            }
        }
    }
    
    return finalSort()[command](data);
}