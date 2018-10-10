function printTable(n) {
    let html = `<ul>\n`;

    for (let i = 1; i <= n; i++) {
        let color = '';

        if (i % 2 !== 0) {
            color = 'green';
        } else {
            color = 'blue';
        }

        html += `    <li><span style='color:${color}'>${i}</span>></li>\n`;
    }

    html += `</ul>`;

    console.log(html);
}