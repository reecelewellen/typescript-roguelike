const enum Terrain_Types {
  "left_upper_corner" = '┌',
  'right_upper_corner' = '┐',
  'right_lower_corner' = '┘',
  'left_lower_corner' = '└',
  'horizontal_wall' = '─',
  'vertical wall' = '│',
  'floor' = '.',
  'path' = '▒'
}

console.log(Terrain_Types.left_lower_corner);

class Cell {
  pos_x:number;
  pos_y:number;
  contains: string;
  constructor(x: number, y: number) {
    this.pos_x = x;
    this.pos_y = y;
    this.contains = Terrain_Types.floor;
  }

  setContents = (ter_type: string): void => {
    this.contains = Terrain_Types.floor;
  }

  drawCell = (): string => {
    return this.contains;
  }
}

export default Cell;