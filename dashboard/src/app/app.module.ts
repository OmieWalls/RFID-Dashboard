import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { AppComponent } from './app.component';
import { RfidsComponent } from './rfids/rfids.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { RfidTableComponent } from './rfid-table/rfid-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    RfidsComponent,
    RfidTableComponent
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
