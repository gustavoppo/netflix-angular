import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AppContainerModule } from './components/app-container.module';
import { HomeRoutingModule } from './pages/home/home-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeRoutingModule,
    AppContainerModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
