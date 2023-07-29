import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AppContainerComponent } from './app-container/app-container.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './app-container/components/toolbar/toolbar.component';

import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppContainerComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    SidebarModule,
    ButtonModule,
    DividerModule,
    ImageModule,
    MenuModule,
    DialogModule,
    ConfirmDialogModule,
    ToolbarModule,
  ],
  exports: [AppContainerComponent,
  ],
})
export class AppContainerModule {}
