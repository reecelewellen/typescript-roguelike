import { Cell } from './cell.js';
var left_upper_wall = 0;
var upper_wall = 1;
var right_upper_wall = 2;
var right_wall = 3;
var right_lower_wall = 4;
var lower_wall = 5;
var left_lower_wall = 6;
var left_wall = 7;
var floor = 8;
var path = 9;
var Room = /** @class */ (function () {
    function Room() {
        var _this = this;
        this.length = 0;
        this.width = 0;
        this.createRoom = function () {
            for (var j = 0; j < _this.length; j++) {
                for (var i = 0; i < _this.width; i++) {
                    var content = null;
                    if (j == 0 && i == 0) {
                        content = left_upper_wall;
                    }
                    if (j == 0 && !(i == 0 || i == _this.width - 1)) {
                        content = upper_wall;
                    }
                    if (j == 0 && i == _this.width - 1) {
                        content = right_upper_wall;
                    }
                    if (!(j == 0 || j == _this.length - 1) && i == 0) {
                        content = left_wall;
                    }
                    if (!(j == 0 || j == _this.length - 1) && !(i == 0 || i == _this.width - 1)) {
                        content = floor;
                    }
                    if (!(j == 0 || j == _this.length - 1) && i == _this.width - 1) {
                        content = right_wall;
                    }
                    if (j == _this.length - 1 && i == 0) {
                        content = left_lower_wall;
                    }
                    if (j == _this.length - 1 && !(i == 0 || i == _this.width - 1)) {
                        content = lower_wall;
                    }
                    if (j == _this.length - 1 && i == _this.width - 1) {
                        content = right_lower_wall;
                    }
                    _this.room[j][i] = new Cell(i, j, content);
                }
            }
        };
        this.drawRoom = function () {
            var room = '';
            for (var j = 0; j < _this.length; j++) {
                for (var i = 0; i < _this.width; i++) {
                    room += _this.room[j][i].drawCell();
                }
                room += '\n';
            }
            return room;
        };
        this.length = randomBetweenInt(3, 8);
        this.width = randomBetweenInt(5, 10);
        this.room = new Array(this.length);
        for (var j = 0; j < this.room.length; j++) {
            this.room[j] = new Array(this.width);
        }
    }
    return Room;
}());
var randomBetweenInt = function (min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
};
var room = new Room();
room.createRoom();
console.log(room.drawRoom());
