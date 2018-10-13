function sortUsernames(data) {
    let usernames = [];

    data.filter(el => {return el;})
        .forEach(username => {
            if (!usernames.includes(username)) {
                usernames.push(username);
            }
        });

    usernames.sort((user1, user2) => {
        if (user1.toLowerCase() < user2.toLowerCase()) {
            return -1;
        } else if (user1.toLowerCase() > user2.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    }).sort((user1, user2) => {
        return user1.length - user2.length;
    }).forEach(username => {
        console.log(username);
    });
}