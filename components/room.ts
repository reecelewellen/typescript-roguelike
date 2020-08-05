import { Cell } from './cell.js';

const left_upper_wall = 0;
const upper_wall = 1;
const right_upper_wall = 2;
const right_wall = 3;
const right_lower_wall = 4;
const lower_wall = 5;
const left_lower_wall = 6;
const left_wall = 7;
const floor = 8;
const path = 9;

class Room {
  length:number = 0;
  width:number = 0;
  room: Cell[][];
  constructor() {
    this.length = randomBetweenInt(3, 8);
    this.width = randomBetweenInt(5, 10);
    this.room = new Array(this.length);
    for (let j = 0; j < this.room.length; j++){
      this.room[j] = new Array(this.width);
    }
  }

  createRoom = (): void => {
    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.width; i++) {
        let content = null;
        if (j == 0 && i == 0) {
          content = left_upper_wall;
        } 
        if (j == 0 && !(i == 0 || i == this.width - 1)) {
          content = upper_wall;
        }
        if (j == 0 && i == this.width - 1) {
          content = right_upper_wall;
        }
        if (!(j == 0 || j == this.length - 1) && i == 0) {
          content = left_wall;
        }
        if (!(j == 0 || j == this.length - 1) && !(i == 0 || i == this.width - 1)){
          content = floor;
        }
        if (!(j == 0 || j == this.length - 1) && i == this.width - 1) {
          content = right_wall;
        }
        if (j == this.length - 1 && i == 0) {
          content = left_lower_wall;
        }
        if (j == this.length - 1 && !(i == 0 || i == this.width - 1)) {
          content = lower_wall;
        }
        if (j == this.length - 1 && i == this.width - 1) {
          content = right_lower_wall;
        }
        this.room[j][i] = new Cell(i, j, content);
      }
    }
  }

  drawRoom = (): string => {
    let room = '';
    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i <this.width; i++) {
        room += this.room[j][i].drawCell();
      }
      room += '\n';
    }
    return room;
  }
}

const randomBetweenInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max-min) + 1) + min;
}

const room = new Room();
room.createRoom();
console.log(room.drawRoom());