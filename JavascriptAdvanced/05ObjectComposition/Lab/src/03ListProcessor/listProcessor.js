let processCommands = (function(data) {
    let result = [];

    function processList() {
        return {
            add: (strToAdd) => {
                return result.push(strToAdd);
            },
            remove: (strToRemove) => {
                result.filter(el => el !== strToRemove);
            },
            print: () => {
                console.log(result.join());
            }
        };
    }

    for (let tokens of data) {
        let [command, str] = tokens.split(' ');
        processList[command](str);
    }
})();

module.exports = processCommands;