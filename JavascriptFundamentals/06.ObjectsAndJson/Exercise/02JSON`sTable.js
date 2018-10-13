function JSONtoHTMLTable(data) {
    let HTMLTable = `<table>\n`;

    data.forEach(input => {
        let currObj = JSON.parse(input);

        HTMLTable += `    <tr>\n`;

        HTMLTable += `        <td>${currObj.name}</td>\n`;
        HTMLTable += `        <td>${currObj.position}</td>\n`;
        HTMLTable += `        <td>${currObj.salary}</td>\n`;

        HTMLTable += `    <tr>\n`;
    });

    HTMLTable += `</table>`;

    console.log(HTMLTable);
}