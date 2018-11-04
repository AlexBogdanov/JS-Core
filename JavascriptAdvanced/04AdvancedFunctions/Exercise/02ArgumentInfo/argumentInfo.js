function argumentInfo() {
    let argTypes = new Map();

    for(let i = 0; i < arguments.length; i++) {
        let currArg = arguments[i];

        if (!argTypes.has(typeof(currArg))) {
            argTypes.set(typeof(currArg), 0);
        }
        
        argTypes.set(typeof(currArg), argTypes.get(typeof(currArg)) + 1);

        console.log(`${typeof(currArg)}: ${currArg}`);
    }
}

module.exports = argumentInfo;