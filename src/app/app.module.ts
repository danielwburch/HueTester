import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HueControllerComponent } from './components/hue-controller/hue-controller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { HueApiService } from './services/hue-api/hue-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HueControllerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [HueApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
