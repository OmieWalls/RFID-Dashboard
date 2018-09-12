
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfidTableComponent } from './rfid-table.component';

describe('RfidTableComponent', () => {
  let component: RfidTableComponent;
  let fixture: ComponentFixture<RfidTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RfidTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfidTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
