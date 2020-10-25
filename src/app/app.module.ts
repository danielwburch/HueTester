import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HueControllerComponent } from './components/hue-controller/hue-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    HueControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
