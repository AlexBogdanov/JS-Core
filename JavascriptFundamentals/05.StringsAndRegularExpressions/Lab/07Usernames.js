function createUsername(data) {
        let usernames = [];

        for (let i = 0; i < emails.length; i++) {
            let currMail = emails[i].split(/[@\.]+/g);

            let currUsername = currMail[0] + '.';

            for (let j = 1; j < currMail.length; j++) {
                currUsername += currMail[j][0];
            }

            usernames.push(currUsername);
        }

        console.log(usernames.join(', '));
}