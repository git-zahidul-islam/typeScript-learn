// array types

// two type of single define
let language : string[];
let framework : Array<string>

language = ["ts","Js"];
framework = ["angular","dd"]

console.log(language[0]);
console.log(framework[0]);

language.sort()
console.log("sorted",language);

// multiple data type define
let multipleType : (string | number) []

multipleType = ["hs",12]

