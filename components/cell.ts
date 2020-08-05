const terrain_symbols = ['┌',
'─',
'┐',
'│',
'┘',
'─',
'└',
'│',
'.',
'▒',
]

export class Cell {
  pos_x = 0;
  pos_y = 0;
  contains: string = null;
  constructor(x: number, y: number, wall_type: number) {
    this.pos_x = x;
    this.pos_y = y;
    this.contains = terrain_symbols[wall_type];
  }

  drawCell = (): string => {
    return this.contains;
  }
}