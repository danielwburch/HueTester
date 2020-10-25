import { Component, Input, OnInit } from '@angular/core';
import { Light } from '../../models/light';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.scss']
})
export class LightCardComponent implements OnInit {

  @Input() light: Light

  constructor() { }

  ngOnInit(): void {
  }

}
