import { LOCALE_ID, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { WindowComponent } from './window/window.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { IconComponent } from './icon/icon.component';
import { LogEventsComponent } from './log-events/log-events.component';

// Import Angular Material modules
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

// Register the 'en' locale data
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    WindowComponent,
    StartMenuComponent,
    IconComponent,
    LogEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: '$ ' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
