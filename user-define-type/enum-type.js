// enum is store constant: no duplicate value
// 3 emus have
// number - emus
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// string
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "read data";
    RequestType2["saveData"] = "save data";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2);
// console.log(RequestType2.readData);
// console.log(RequestType2["readData"]);
// Heterogeneous
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "read data";
    RequestType3["deleteData"] = "delete data boss";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
