function increment(wrapper) {
    let div = $(wrapper);

    let textArea = $('<textarea>0</textarea>')
    .addClass('counter')
    .attr('disabled', true);

    let incrementBtn = $('<button>Increment</button>')
    .addClass('btn')
    .attr('id', 'incrementBtn')
    .on('click', () => {
        let value = Number($(textArea).text());
        $(textArea).text(value + 1);
    });

    let addBtn = $('<button>Add</button>')
    .addClass('btn')
    .attr('id', 'addBtn')
    .on('click', () => {
        let li = $('<li>');
        $(li).text($(textArea).text());
        ul.append(li);
        $(textArea).text(0);
    });

    let ul = $('<ul>');

    $(div).append(textArea)
    .append(incrementBtn)
    .append(addBtn)
    .append(ul);
}