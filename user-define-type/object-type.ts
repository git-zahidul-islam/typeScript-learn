let users: object[];
users = [];

let user1 : {userName: string,id: number}
user1 = {userName: "JavaScript",id: 101}
users.push(user1)

let user2 : {userName: string,id: number}
user2 = {userName: "Node.js",id: 101}
users.push(user2)
console.log(users);

for (const key in users) {
    console.log(users[key]["userName"]);
}