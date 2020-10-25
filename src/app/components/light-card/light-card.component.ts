import { Component, Input, OnInit } from '@angular/core';
import { HueApiService } from '../../services/hue-api/hue-api.service'
import { Light } from '../../models/light';
import { State } from '../../models/state';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.scss']
})
export class LightCardComponent implements OnInit {

  @Input() light: Light

  constructor(private hueAPI: HueApiService) { }

  ngOnInit(): void {

  }

  public ToggleOn(): void {

    let state: State = new State();

    state.on = !this.light.state.on;
    state.brightness = this.light.state.brightness

    this.light.state.on = state.on;

    this.hueAPI.ChangeState("192.168.0.130", "s1VXTcqyG5qlHORW04F8M8bZ-KYTTDOUkI0FC9TK", this.light.id, state);

  }

  public UpdateState(): void {

    this.hueAPI.ChangeState("192.168.0.130", "s1VXTcqyG5qlHORW04F8M8bZ-KYTTDOUkI0FC9TK", this.light.id, this.light.state);

  }

}
