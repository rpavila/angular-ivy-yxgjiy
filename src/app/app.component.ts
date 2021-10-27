import { Component, VERSION, ViewChild } from '@angular/core';
import { NgbDropdown } from '@@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  summary = [
    {
      text: 'Total',
      total: 20,
    },
    {
      text: 'Abiertas',
      total: 20,
    },
    {
      text: 'Asignadas',
      total: 20,
    },
    {
      text: 'Cotizadas',
      total: 20,
    },
    {
      text: 'Obsoletas',
      total: 20,
    },
    {
      text: 'Canceladas',
      total: 20,
    },
  ];

  @ViewChild('myDrop') myDrop: NgbDropdown;
}
