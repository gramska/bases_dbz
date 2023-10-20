import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  public count: number = 10;

  add(valor: number): void {
    this.count += valor;
  }

  reset(valor: number): void {
    this.count = valor;
  }

}
