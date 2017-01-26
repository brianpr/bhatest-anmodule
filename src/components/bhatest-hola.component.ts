import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bhatest-hola',
  templateUrl: './bhatest-hola.component.html',
  styleUrls: ['./bhatest-hola.component.css']
})
export class BhatestHolaComponent implements OnInit {

  saludar: string = "Hola module";

  constructor() { }

  ngOnInit() {
  }

}
