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
var Player = /** @class */ (function () {
    function Player(first, last) {
        this._score = 0; // properties are 'public' be default, so not needed but you can add to be explicit esp if you have some that are 'private'. 'protected' allows to access within child classes as well.
        // typescript will automatically infer the type as number even if we don't add the ": number", so you can do that as well.
        this.numLives = 10; // typescript will infer number type, don't need to be explicit
        this.first = first;
        this.last = last;
    }
    Player.prototype.secretMethod = function () {
        console.log("SECRET Method!!!");
    };
    Object.defineProperty(Player.prototype, "fullName", {
        get: function () {
            return "".concat(this.first, " ").concat(this.last);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (newScore) {
            if (newScore < 0) {
                throw new Error("Score cannot be negative!");
            }
            this._score = newScore;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var elton = new Player("Elton", "Steele");
console.log(elton.score);
console.log(elton.fullName);
elton.score = 123;
console.log(elton);
// elton.secretMethod();
// shortcut for setting up the first and last properties in the constructor, note commented out initial lines for first and last.
var PlayerAlt = /** @class */ (function () {
    // typescript will automatically infer the type as number even if we don't add the ": number", so you can do that as well.
    function PlayerAlt(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0; // properties are 'public' be default, so not needed but you can add to be explicit esp if you have some that are private.
        this.first = first;
        this.last = last;
    }
    PlayerAlt.prototype.secretMethod = function () {
        console.log("SECRET Method!!!");
    };
    return PlayerAlt;
}());
var bill = new PlayerAlt("Bill", "Stephens");
console.log(bill);
var SuperPlayer = /** @class */ (function (_super) {
    __extends(SuperPlayer, _super);
    function SuperPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    SuperPlayer.prototype.maxScore = function () {
        this._score = 9999999; // can access this property in parent because set to "protected" instead of "private" which allows sharing with child classes
    };
    return SuperPlayer;
}(Player));
var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    return Bike;
}());
var bike1 = new Bike("red");
var Jacket = /** @class */ (function () {
    function Jacket(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    Jacket.prototype.print = function () {
        console.log("".concat(this.color, " ").concat(this.brand, " jacket"));
    };
    return Jacket;
}());
var jacket1 = new Jacket("Prada", "black");
console.log(jacket1);
jacket1.print();
// you cannot create an instance of an 'abstract' class. Generally used when you are using as a parent class
// and instances are only created on the child classes
var Employee = /** @class */ (function () {
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    Employee.prototype.greet = function () {
        console.log("Hello!");
    };
    return Employee;
}());
// must use 'getPay' method since marked as 'abstract' in the parent Employee class
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getPay = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(first, last, hourlyRate, hoursWorked) {
        var _this = _super.call(this, first, last) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    PartTimeEmployee.prototype.getPay = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return PartTimeEmployee;
}(Employee));
var betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
var billiam = new PartTimeEmployee("Billiam", "Billerson", 24, 1100);
console.log(billiam.getPay());
