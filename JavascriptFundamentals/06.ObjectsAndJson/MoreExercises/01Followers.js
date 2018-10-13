function usersRelations(data) {
    let users = new Map();

    for (let i = 0; i < data.length; i++) {
        if (data[i].startsWith('Welcome')) {
            const [user] = data[i].split(/Welcome,\s*/g)
                .filter(el => {return el;})
                .map(el => {return el.trim();});

            if (!users.has(user)) {
                users.set(user, {});
                users.get(user).followers = [];
                users.get(user).following = 0;
            }
        } else {
            const [userStartsFollowing, userGetsFollowed] = data[i].split(/\s*followed\s*/g)
                .filter(el => {return el;})
                .map(el => {return el.trim();});

            if (users.has(userStartsFollowing) && users.has(userGetsFollowed) &&
                userStartsFollowing !== userGetsFollowed && !users.get(userGetsFollowed).followers.includes(userStartsFollowing)) {
                users.get(userGetsFollowed).followers.push(userStartsFollowing);
                users.get(userStartsFollowing).following++;
            }
        }
    }

    console.log(`Total users registered: ${users.size}`);

    Array.from(users.keys()).sort((user1, user2) => {
        if (user1 > user2) {
            return -1;
        } else if (user1 < user2) {
            return 1;
        } else {
            return 0;
        }
    }).sort((user1, user2) => {
       return users.get(user2).followers.length - users.get(user1).followers.length;
    }).forEach((user, index) => {
        console.log(`${index + 1}. ${user} : ${users.get(user).following} following, ${users.get(user).followers.length} followers`);

        if (index === 0) {
            users.get(user).followers.sort((user1, user2) => {
                if (user1 < user2) {
                    return -1;
                } else if (user1 > user2) {
                    return 1;
                } else {
                    return 0;
                }
            }).forEach(follower => {
                console.log(`*  ${follower}`);
            })
        }
    })
}