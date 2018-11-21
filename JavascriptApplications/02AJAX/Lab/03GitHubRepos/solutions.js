function loadRepos() {
    const username = $('#username').val();
    const url = `https://api.github.com/users/${username}/repos`;
    $.ajax({ url,
        success: displayRepos,
        error: displayError
    });
    function displayRepos(repos) {
        for (let repo of repos) {
            let link = $('<a>')
                .text(repo.full_name)
                .attr('href', repo.html_url);
            $('#repos').append(
                $('<li>').append(link)
            );
        }
    }
    function displayError(err) {
        $('#repos').append($('<li>Error</li>'));
    }
}