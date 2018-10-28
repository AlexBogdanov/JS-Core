function commandProcessor(commands) {
  let processCommand = (() => {
    let output = "";

    return {
      append: input => {
        output += input;
      },
      removeStart: n => {
        output = output.slice(n);
      },
      removeEnd: n => {
        output = output.slice(0, output.length - n);
      },
      print: () => {
        console.log(output);
      }
    };
  })();

  for (cmd of commands) {
    let [command, argument] = cmd.split(" ");
    processCommand[command](argument);
  }
}