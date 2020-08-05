var terrain_symbols = ['┌',
    '─',
    '┐',
    '│',
    '┘',
    '─',
    '└',
    '│',
    '.',
    '▒',
];
var Cell = /** @class */ (function () {
    function Cell(x, y, wall_type) {
        var _this = this;
        this.pos_x = 0;
        this.pos_y = 0;
        this.contains = null;
        this.drawCell = function () {
            return _this.contains;
        };
        this.pos_x = x;
        this.pos_y = y;
        this.contains = terrain_symbols[wall_type];
    }
    return Cell;
}());
export { Cell };
