function extractText() {
    let arr = $('#items li').toArray()
    .map(el => {
        return el.textContent;
    });

    $('#result').text(arr.join(', '));
}