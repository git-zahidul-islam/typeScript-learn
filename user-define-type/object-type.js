var users;
users = [];
var user1;
user1 = { userName: "JavaScript", id: 101 };
users.push(user1);
var user2;
user2 = { userName: "Node.js", id: 101 };
users.push(user2);
console.log(users);
for (var key in users) {
    console.log(users[key]["userName"]);
}
