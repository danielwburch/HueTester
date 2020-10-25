import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Light } from '../../models/light';
import { State } from '../../models/state';

@Injectable({
  providedIn: 'root'
})
export class HueApiService {

  constructor(private httpClient: HttpClient) { }

  public async NewUser(bridgeIP: string): Promise<string> {

    let retval: string = '';

    try {

      const body = '{ "devicetype": "my_hue_app" }';

      await this.httpClient.post<string>('http://' + bridgeIP + '/api', body)
        .toPromise()
        .then(result => {

          retval = JSON.stringify(result)

        });

    } catch (error) {

      alert(error);

    }

    return retval;

  }

  public async GetLights(bridgeIP: string, username: string): Promise<Light[]> {

    let retval: Light[] = new Array();

    try {

      await this.httpClient.get<string[]>('http://' + bridgeIP + '/api/' + username + '/lights')
        .toPromise()
        .then(result => {

          for (const light in result) {

            const newLight: Light = new Light();

            newLight.id = light;
            newLight.modelId = result[light]['modelid'];
            newLight.manufacturerName = result[light]['manufacturername'];
            newLight.name = result[light]['name'];
            newLight.productName = result[light]['productname'];
            newLight.type = result[light]['type'];

            const newState: State = new State();

            newState.on = result[light]['state']['on'];
            newState.bri = result[light]['state']['bri'];
            newState.hue = result[light]['state']['hue'];
            newState.sat = result[light]['state']['sat'];
            newState.effect = result[light]['state']['effect'];
            newState.xy = result[light]['state']['xy'];
            newState.ct = result[light]['state']['ct'];
            newState.alert = result[light]['state']['alert'];
            newState.colorMode = result[light]['state']['colormode'];
            newState.mode = result[light]['state']['mode'];
            newState.reachable = result[light]['state']['reachable'];

            newLight.state = newState;

            retval.push(newLight);

          }

        });

    } catch (error) {

      alert(error);

    }

    return retval;

  }

}
