import { Cell } from './cell'

const NEWLINE = '\n';

export class Board {
  length = 10;
  width = 10;
  grid: Cell[][];
  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
    this.grid = new Array(this.length);
    for (let j = 0; j < this.length; j++) {
      this.grid[j] = new Array(this.width);
    }
  }
}