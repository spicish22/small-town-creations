import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { ComingSoonComponent } from './coming-soon.component';
import { MissionStatementComponent } from './mission-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ComingSoonComponent,
    MissionStatementComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
