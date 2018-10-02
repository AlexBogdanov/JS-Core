function makeTemplate(data) {
    let output = '';

    output += `<?xml version="1.0" encoding="UTF-8"?>
    <quiz>\n`;

    for (let i = 0; i < data.length; i+=2) {
        output += `  <question>
        ${data[i]}
      </question>\n`;

        output += `  <answer>
        ${data[i+1]}
      </answer>\n`;
    }
    
    output += `</quiz>`;

    console.log(output);
}