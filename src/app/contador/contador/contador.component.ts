import { Component } from '@angular/core' 

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>la base es: <strong>{{base}}</strong></h3>
    <button (click)="acum( base )"> +{{base}} </button>
    <span> {{cont}} </span>
    <button (click)="acum( -base )"> -{{base}} </button>
    `
})
export class ContadorComponent{
    public title: string = 'Contador App';
    public cont : number = 1;
    public base : number = 5;

    acum(num: number): void {
        this.cont += num;
    }
}