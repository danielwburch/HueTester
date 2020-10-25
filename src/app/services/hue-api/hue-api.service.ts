import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HueApiService {

  constructor() { }

  public testService(): void {

    console.log('service works!');

  }

}
