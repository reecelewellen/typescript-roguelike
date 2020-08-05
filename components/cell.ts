const terrain_symbols = [
  '┌',
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
  pos_x:number;
  pos_y:number;
  contains: string;
  constructor(x: number, y: number, wall_type: number) {
    this.pos_x = x;
    this.pos_y = y;
    this.contains = terrain_symbols[wall_type];
  }

  setContents = (wall_type): void => {
    this.contains = terrain_symbols[wall_type];
  }

  drawCell = (): string => {
    return this.contains;
  }
}