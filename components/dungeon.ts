import Cell from './cell'

const NEWLINE = '\n';

export class Board {
  length = 40;
  width = 100;
  grid: Cell[][];
  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
    
  }
}