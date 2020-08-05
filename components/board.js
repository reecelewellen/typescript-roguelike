var NEWLINE = '\n';
var Board = /** @class */ (function () {
    function Board(length, width) {
        this.length = 10;
        this.width = 10;
        this.length = length;
        this.width = width;
        this.grid = new Array(this.length);
        for (var j = 0; j < this.length; j++) {
            this.grid[j] = new Array(this.width);
        }
    }
    return Board;
}());
export { Board };
