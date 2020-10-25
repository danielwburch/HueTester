import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hue-controller',
  templateUrl: './hue-controller.component.html',
  styleUrls: ['./hue-controller.component.scss']
})
export class HueControllerComponent implements OnInit {

  public bridgeIP: string = '';
  public debugText: string = '';

  constructor() { }

  ngOnInit(): void {

    this.bridgeIP = '192.168.0.130';

  }

  public test(): void {

    this.writeToDebug('hi');

  }

  public writeToDebug(text: string): void {

    this.debugText += '\r\n' + text;

  }

}
