var users;
users = [];
var user1;
user1 = { userName: 'sathi', userId: 12 };
// console.log(user1);
users.push(user1);
var user2;
user2 = { userName: 'sumu', userId: 15 };
// console.log(user2);
users.push(user2);
console.log(users);
var getRequest;
var postRequest;
getRequest = "POST";
function handlePost(requestPost) {
    console.log(requestPost);
}
handlePost("POST");
