import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './index/home.component';
import { AppContainerModule } from 'src/app/components/app-container.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  // entryComponents: [LogoutConfirmDialogComponent],
  imports: [
    HomeRoutingModule,
    AppContainerModule,
    CommonModule
  ],
  exports: [
  ],
  providers: []
})

export class HomeModule {

}
