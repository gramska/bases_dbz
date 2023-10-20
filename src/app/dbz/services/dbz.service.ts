import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character: Character[] = [
    {
      id: uuid(),
      name: 'Krillyn',
      power: 1000
    },{
      id: uuid(),
      name: 'Goku',
      power: 9_500
    },{
      id: uuid(),
      name: 'Vegeta',
      power: 10_500
    }
  ];

  constructor() { }

  addCharacter(character: Character): void {

    const newCharacter: Character = {
      ...character
    }

    this.character.push(newCharacter);
  }

  deleteCharacterById(id: string): void{
    this.character = this.character.filter(character => character.id !== id);
  }
}
