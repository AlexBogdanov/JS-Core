function scoreToHtml(data) {
    let dataArr = data[0].split('},{')
        .map((el, index) => {
            if (index % 2 === 0) {
                el = el.substring(1);
                return el += `}`;
            } else {
                el = el.substring(0, el.length - 1);
                return el = `{${el}`;
            }
        });

    let output = `<table>\n    <tr><th>name</th><th>score</th></tr>\n`;

    for (let i = 0; i < dataArr.length; i++) {
        let currObj = JSON.parse(dataArr[i]);

        output += `    <tr><th>${currObj.name}</th><th>${currObj.score}</th></tr>\n`;
    }

    output += `</table>`;
    console.log(output);
}