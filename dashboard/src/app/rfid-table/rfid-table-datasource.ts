import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface RfidTableItem {
  id: number;
  name: string;
  price: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: RfidTableItem[] = [
  {id: 1, name: 'Cordless Drill', price: 31.0079},
  {id: 2, name: 'Drill', price: 44.0026},
  {id: 3, name: 'Combo Drill Kit', price: 56.941},
  {id: 4, name: 'Lithium Drill', price: 69.0122},
  {id: 5, name: 'Lithium Cordless Drill', price: 77.811},
  {id: 6, name: 'Nest Doorbell', price: 52.0107},
  {id: 7, name: 'Nest Camera', price: 44.0067},
  {id: 28, name: 'Nest Doorlock', price: 33.9994},
  {id: 9, name: 'Power Drill ', price: 58.9984},
  {id: 10, name: 'Saw ', price: 55.1797},
  {id: 11, name: 'Sodium', price: 55.1797},
  {id: 12, name: 'Magnesium', price: 55.1797},
  {id: 13, name: 'Aluminum', price: 55.1797},
  {id: 14, name: 'Silicon', price: 55.1797},
  {id: 15, name: 'Phosphorus', price: 55.1797},
  {id: 16, name: 'Sulfur', price: 55.1797},
  {id: 17, name: 'Chlorine', price: 55.1797},
  {id: 18, name: 'Argon', price: 55.1797},
  {id: 19, name: 'Potassium', price: 55.1797},
  {id: 20, name: 'Calcium', price: 55.1797},
];

/**
 * Data source for the RfidTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class RfidTableDataSource extends DataSource<RfidTableItem> {
  data: RfidTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<RfidTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: RfidTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: RfidTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'price': return compare(+a.price, +b.price, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
