function loadCommits() {
    const username = $('#username').val();
    const repo = $('#repo').val();
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    $.get(url)
        .then(data => handleData(data))
        .catch(err => handleErr(err));

    function handleData(data) {
        $('#commits').empty();
        Object.keys(data).forEach(key => {
            $('<li>')
                .text(`${data[key].commit.author.name}: ${data[key].commit.message}`)
                .appendTo($('#commits'));
        });
    }

    function handleErr(err) {
        $('<li>')
            .text(`Error: ${err.status} (${err.statusText})`)
            .appendTo($('#commits'));
    }
}