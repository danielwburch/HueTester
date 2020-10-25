import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HueApiService {

  constructor(private httpClient: HttpClient) { }

  public async NewUser(bridgeIP: string): Promise<string> {

    let retval: string = '';

    try {

      const body = '{ "devicetype": "my_hue_app" }';

      await this.httpClient.post<string>("http://" + bridgeIP + '/api', body)
        .toPromise()
        .then(result => {

          retval = JSON.stringify(result)

        });

    } catch (error) {

      alert(error);

    }

    return retval;

  }

}
