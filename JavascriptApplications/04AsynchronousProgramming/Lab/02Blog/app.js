function attachEvents() {
    const url = 'https://baas.kinvey.com/appdata/kid_BJUeI35C7';
    const base64 = btoa('Pesho' + ':' + 'pesho');
    const authHeaders = { 'Authorization': 'Basic ' + base64 };

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPost);

    function loadPosts() {
        $.ajax({
            url: `${url}/posts`,
            headers: authHeaders
        }).then(data => makePostsOption(data))
        .catch(err => console.log(err));
    }

    function viewPost() {
        const selectedPostId = $('#posts').find(':selected').val();
        if (!selectedPostId) {
            return;
        }
        const selectedPost = $.ajax({
            url: `${url}/posts/${selectedPostId}`,
            headers: authHeaders
        });
        const comments = $.ajax({
            url: `${url}/comments/?query={"post_id":"${selectedPostId}"}`,
            headers: authHeaders
        });

        Promise.all([selectedPost, comments])
            .then(data => handleComments(data))
            .catch(err => console.log(err));
    }

    function makePostsOption(posts) {
        $('#posts').empty();
        posts.forEach(post => {
            $('<option>')
                .text(post.title)
                .val(post._id)
                .appendTo('#posts');
        });
    }

    function handleComments(data) {
        let comments = data[1];
        let post = data[0];
        $('#post-title').text(post.title);
        $('#post-body').empty();
        $('<li>')
            .text(post.body)
            .appendTo('#post-body');
        $('#post-comments').empty();
        comments.forEach(comment => {
            $('<li>')
                .text(comment.text)
                .appendTo($('#post-comments'));
        });
    }
}