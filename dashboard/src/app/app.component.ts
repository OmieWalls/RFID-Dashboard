import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';


export interface RFIDtag {
  id: number;
  name: string;
  price: number;
}

const ELEMENT_DATA: RFIDtag[] = [
  {id: 1, name: 'Cordless Drill', price: 31.0079},
  {id: 2, name: 'Drill', price: 44.0026},
  {id: 3, name: 'Combo Drill Kit', price: 56.941},
  {id: 4, name: 'Lithium Drill', price: 69.0122},
  {id: 5, name: 'Lithium Cordless Drill', price: 77.811},
  {id: 6, name: 'Nest Doorbell', price: 52.0107},
  {id: 7, name: 'Nest Camera', price: 44.0067},
  {id: 8, name: 'Nest Doorlock', price: 33.9994},
  {id: 9, name: 'Power Drill ', price: 58.9984},
  {id: 10, name: 'Saw ', price: 55.1797},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'RFID Dashboard';
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
    
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }


}

  

