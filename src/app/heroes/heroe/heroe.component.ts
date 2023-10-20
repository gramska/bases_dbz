import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public name: string = 'iroman';
  public age: number = 45;

  public get capitalizado(): string {
    return this.name.toUpperCase();
  }

  public getDescripcion(): string {
    return `${this.name} - ${this.age}`
  }

  public cambiarEdad(): void {
    this.age = 18;
  }

  public cambiarNombre(): void {
    this.name = 'spiterman'
  }

  public resetearDatos(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
