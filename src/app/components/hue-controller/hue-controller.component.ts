import { Component, OnInit } from '@angular/core';
import { HueApiService } from '../../services/hue-api/hue-api.service'

@Component({
  selector: 'app-hue-controller',
  templateUrl: './hue-controller.component.html',
  styleUrls: ['./hue-controller.component.scss']
})
export class HueControllerComponent implements OnInit {

  public bridgeIP: string = '';
  public username: string = '';
  public debugText: string = '';

  constructor(private hueAPI: HueApiService) { }

  ngOnInit(): void {

    this.bridgeIP = '192.168.0.130';

  }

  public async test(): Promise<void> {

    this.writeToDebug(await this.hueAPI.NewUser(this.bridgeIP));

  }

  public writeToDebug(text: string): void {

    this.debugText += '\r\n' + text;

  }

}
