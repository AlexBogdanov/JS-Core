function initializeTable() {
    $('#createLink').on('click', () => { createNewCountry(); });

    function createNewCountry() {
        let countryToAdd = $('#newCountryText').val();
        let capitalToAdd = $('#newCapitalText').val();
        
        let tdCountry = $('<td>').text(countryToAdd);
        let tdCapital = $('<td>').text(capitalToAdd);
        let tdButtons = $('<td>');

        let buttonUp = $('<a href="#">[Up]</a>').on('click', moveUp);
        let buttonDown = $('<a href="#">[Down]</a>').on('click', moveDown);
        let buttonDelete = $('<a href="#">[Delete]</a>').on('click', deleteCountry);

        tdButtons.append(buttonUp)
        .append(buttonDown)
        .append(buttonDelete);
        
        let tr = $('<tr>');
        tr.append(tdCountry)
        .append(tdCapital)
        .append(tdButtons);

        $('#countriesTable').append(tr);
        tr.fadeIn();

        fixRows();
    }

    function deleteCountry() {
        let countryToDelete = $(this).parent().parent();
        countryToDelete.fadeOut(() => {
            countryToDelete.remove();
        });

        fixRows();
    }

    function moveUp() {
        let countryToMove = $(this).parent().parent();
        
        countryToMove.fadeOut(() => {
            countryToMove.insertBefore(countryToMove.prev());
            countryToMove.fadeIn();
        });

        fixRows();
    }

    function moveDown() {
        let countryToMove = $(this).parent().parent();

        countryToMove.fadeOut(() => {
            countryToMove.insertAfter(countryToMove.next());
            countryToMove.fadeIn();
        });

        fixRows();
    }

    function fixRows() {
        let table = $('#countriesTable tr');

        $(table[2]).find('a:contains("Up")')
        .css('display', 'none');
        $(table[table.length-1]).find('a:contains("Down")')
        .css('display', 'none');
    }
}