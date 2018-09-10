import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { AppComponent } from './app.component';
import { RfidsComponent } from './rfids/rfids.component';
import { MatTableModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RfidsComponent
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
