function attachEvents() {
    let baseUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';

    $('#btnLoad').on('click', loadContacts);
    $('#btnCreate').on('click', createContact);

    function loadContacts() {
        $.get(`${baseUrl}.json`)
            .then(data => {
                $('#phonebook').empty();
                Object.keys(data).forEach(key => {
                    $('<li>')
                        .text(`${data[key].person}: ${data[key].phone}`)
                        .append($('<button>[Delete]</button>').on('click', () => deleteContact(key)))
                        .appendTo($('#phonebook'));
                });
            });
    }

    function deleteContact(key) {
        $.ajax({
            url: `${baseUrl}/${key}.json`,
            method: 'DELETE'
        }).then(loadContacts());
    }

    function createContact() {
        let contact = {
            person: $('#person').val(),
            phone: $('#phone').val()
        };
        $.post(`${baseUrl}.json`, JSON.stringify(contact))
            .then(loadContacts());
        $('#person').val('');
        $('#phone').val('');
    }
}