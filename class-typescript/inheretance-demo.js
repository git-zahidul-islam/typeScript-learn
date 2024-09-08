var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Person.prototype.showUserName = function () {
        console.log("userName ".concat(this.userName, " age ").concat(this.age));
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(userName, age, subjectPPPP) {
        var _this = _super.call(this, userName, age) || this;
        _this.subject = subjectPPPP;
        return _this;
    }
    Teacher.prototype.teacherName = function () {
        console.log("userName ".concat(this.userName, " age ").concat(this.age, " and teacher ").concat(this.subject));
    };
    return Teacher;
}(Person));
var teacherData1 = new Teacher("ss", 12, "bangla");
teacherData1.showUserName();
teacherData1.teacherName();
