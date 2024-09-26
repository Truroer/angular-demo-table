import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDragComponent } from './table-drag.component';

describe('TableDragComponent', () => {
  let component: TableDragComponent;
  let fixture: ComponentFixture<TableDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDragComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
