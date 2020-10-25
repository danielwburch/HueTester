import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HueControllerComponent } from './components/hue-controller/hue-controller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { HueApiService } from './services/hue-api/hue-api.service';
import { LightCardComponent } from './components/light-card/light-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HueControllerComponent,
    LightCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HueApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
