import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { RfidTableDataSource } from './rfid-table-datasource';

@Component({
  selector: 'app-rfid-table',
  templateUrl: './rfid-table.component.html',
  styleUrls: ['./rfid-table.component.css']
})
export class RfidTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: RfidTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */gir
  displayedColumns = ['id', 'name', 'price', 'vendor', 'riskLevel', 'dateAdded'];

  ngOnInit() {
    this.dataSource = new RfidTableDataSource(this.paginator, this.sort);
  }
}
