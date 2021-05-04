import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './containers/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { MyCardComponent } from './containers/home/my-card/my-card.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { ErrorComponent } from './containers/error/error.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './shared-components/toolbar/toolbar.component';
import {GhibliService} from './services/ghibli.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCardComponent,
    ProfileComponent,
    ErrorComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,

    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatToolbarModule,
  ],
  providers: [
    GhibliService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
