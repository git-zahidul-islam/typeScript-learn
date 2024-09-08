// enum is store constant: no duplicate value
// 3 emus have

// number - emus
enum RequestType{
    readData = 1,
    saveData,
    deleteData,
}
// console.log(RequestType);

// string
enum RequestType2 {
    readData = "read data",
    saveData = "save data",
}
// console.log(RequestType2);
// console.log(RequestType2.readData);
// console.log(RequestType2["readData"]);

// Heterogeneous
enum RequestType3 {
    readData = "read data",
    deleteData = "delete data boss",
    id = 101
}
console.log(RequestType3);
