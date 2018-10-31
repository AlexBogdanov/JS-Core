function createBook(wrapper, bookTitle, bookAuthor, isbn) {
    let idCounter = 0;
    
    let addBook = (() => {
        idCounter++;

        let titleP = $('<p>')
        .addClass('title')
        .text(`${bookTitle}`);
        
        let authorP = $('<p>')
        .addClass('author')
        .text(`${bookAuthor}`);

        let isbnP = $('<p>')
        .addClass('isbn')
        .text(`${isbn}`);

        let selectBtn = $('<button>')
        .text('Select')
        .on('click', (e) => {
            $(bookDiv).css('border', '2px solid blue');
        });

        let deselectBtn = $('<button>')
        .text('Deselect')
        .on('click', (e) => {
            $(bookDiv).css('border', 'medium none');
        });

        let bookDiv = $('<div>')
        .attr('id', `book${idCounter}`)
        .css('border', 'medium none')
        .append(titleP)
        .append(authorP)
        .append(isbnP)
        .append(selectBtn)
        .append(deselectBtn);

        $(wrapper).append(bookDiv);
    })();
}