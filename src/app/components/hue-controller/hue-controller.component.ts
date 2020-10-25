import { Component, OnInit } from '@angular/core';
import { HueApiService } from '../../services/hue-api/hue-api.service'
import { Light } from '../../models/light'

@Component({
  selector: 'app-hue-controller',
  templateUrl: './hue-controller.component.html',
  styleUrls: ['./hue-controller.component.scss']
})
export class HueControllerComponent implements OnInit {

  public bridgeIP: string = '';
  public lights: Light[] = new Array();
  public username: string = '';
  public debugText: string = '';

  constructor(private hueAPI: HueApiService) { }

  ngOnInit(): void {

    this.bridgeIP = '192.168.0.130';

  }

  public async NewUser(): Promise<void> {

    this.writeToDebug(await this.hueAPI.NewUser(this.bridgeIP));

  }

  public async GetLights(): Promise<void> {

    this.lights = await this.hueAPI.GetLights(this.bridgeIP, 's1VXTcqyG5qlHORW04F8M8bZ-KYTTDOUkI0FC9TK');

  }

  public writeToDebug(text: string): void {

    this.debugText += '\r\n' + text;

  }

}
