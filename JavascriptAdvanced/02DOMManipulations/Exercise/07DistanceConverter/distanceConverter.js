function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', () => {
        let inputUnits = document.getElementById('inputUnits');
        let chosenInput = inputUnits.options[inputUnits.selectedIndex].text;
        let outputUnits = document.getElementById('outputUnits');
        let chosenOutpu = outputUnits.options[outputUnits.selectedIndex].text;
        let inputValue = Number(document.getElementById('inputDistance').value);
        let outputValie = 0;

        if (inputUnits === 'Kilometers') {
            switch (outputUnits) {
                case 'Kilometers': out
            }
        }
    })
}