function attachEvents() {
    let url = 'https://rest-http-req.firebaseio.com/messenger.json';

    $('#refresh').on('click', fetchMessages);
    $('#submit').on('click', submitMessage);

    function fetchMessages() {
        $('#messages').empty();
        $.get(url)
            .then(data => {
                Object.keys(data)
                .sort((a, b) => {
                    return a.timestamp - b.timestamp;
                })
                .forEach(key => {
                    $('#messages').append(`${data[key].author}: ${data[key].content}\n`);
                });
            }).catch(err => console.log(err));
    }

    function submitMessage() {
        let data = {
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };
        $.post(url, JSON.stringify(data))
            .then(fetchMessages());
    }
}