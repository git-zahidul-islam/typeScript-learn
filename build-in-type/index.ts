// typescript types learn  
let fullName:string;
let firstName:string;
let lastName:string;
let age:number;
let role:string;
let fow:any;

firstName = "zahidul";
lastName = " islam";
age= 25;
role = "developer";
fow = "fow lock"

function vo():void{
    console.log("hi");
}
vo()

fullName = firstName.concat(lastName)

console.log(`the name is ${fullName} , age is ${age} and role ${role}, what the ${fow} kotha`);
