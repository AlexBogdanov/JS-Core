function printChessboard(n) {
    let html = `<div class="chessboard">\n`;

    for (let i = 1; i <= n; i++) {
        let color1 = '';
        let color2 = '';

        if (i % 2 !== 0) {
            color1 = 'black';
            color2 = 'white';
        } else {
            color1 = 'white';
            color2 = 'black';
        }

        html += `    <div>\n`;

        for (let j = 1; j <= n; j++) {
            if (j % 2 !== 0) {
                html += `        <span class="${color1}"></span>\n`;
            } else {
                html += `        <span class="${color2}"></span>\n`;
            }
        }

        html += `    </div>\n`;
    }

    html += `</div>`;

    console.log(html);
}