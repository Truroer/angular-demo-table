import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, DragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';

 interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: PeriodicSymbol;
  anyGood: boolean;
  taste: PeriodicTaste;
  date: string;
}

enum PeriodicSymbol {H='H', He='He', Li='Li', Be='Be', B='B', C='C', Ne='Ne', N='N', F='F', O='O'}
enum PeriodicTaste {Good = 'Good', Bad = 'Bad', Mediocre = 'Mediocre'}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: PeriodicSymbol.H, anyGood: false, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: PeriodicSymbol.He, anyGood: false, taste: PeriodicTaste.Bad, date: '2024-09-25'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: PeriodicSymbol.Li, anyGood: true, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: PeriodicSymbol.Be, anyGood: false, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: PeriodicSymbol.B, anyGood: false, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: PeriodicSymbol.C, anyGood: true, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: PeriodicSymbol.N, anyGood: false, taste: PeriodicTaste.Bad, date: '2024-09-25'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: PeriodicSymbol.O, anyGood: false, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: PeriodicSymbol.F, anyGood: true, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: PeriodicSymbol.Ne, anyGood: false, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: PeriodicSymbol.H, anyGood: false, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: PeriodicSymbol.O, anyGood: false, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: PeriodicSymbol.He, anyGood: false, taste: PeriodicTaste.Bad, date: '2024-09-25'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: PeriodicSymbol.N, anyGood: false, taste: PeriodicTaste.Bad, date: '2024-09-25'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: PeriodicSymbol.Li, anyGood: true, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: PeriodicSymbol.B, anyGood: false, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: PeriodicSymbol.C, anyGood: true, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: PeriodicSymbol.F, anyGood: true, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: PeriodicSymbol.Be, anyGood: false, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: PeriodicSymbol.He, anyGood: false, taste: PeriodicTaste.Bad, date: '2024-09-25'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: PeriodicSymbol.Ne, anyGood: false, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: PeriodicSymbol.C, anyGood: true, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: PeriodicSymbol.H, anyGood: false, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: PeriodicSymbol.Li, anyGood: true, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: PeriodicSymbol.B, anyGood: false, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: PeriodicSymbol.Ne, anyGood: false, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: PeriodicSymbol.N, anyGood: false, taste: PeriodicTaste.Bad, date: '2024-09-25'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: PeriodicSymbol.O, anyGood: false, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: PeriodicSymbol.F, anyGood: true, taste: PeriodicTaste.Good, date: '2024-09-25'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: PeriodicSymbol.Be, anyGood: false, taste: PeriodicTaste.Mediocre, date: '2024-09-25'},
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatButtonToggleModule,
    FormsModule, MatIconModule, CommonModule, DragDropModule, MatChipsModule, MatPaginatorModule, MatCheckboxModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @ViewChild(MatSort) public sort: MatSort | any;
  @ViewChild(MatTable) public table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private _liveAnnouncer = inject(LiveAnnouncer);
  protected PeriodicSymbol = PeriodicSymbol;
  protected PeriodicTaste = PeriodicTaste;

  protected data = ELEMENT_DATA;

  protected periodicSymbolOptions = Object.values(PeriodicSymbol);

  protected displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'anyGood', 'taste', 'date'];

  protected columnsToDisplay: string[] = this.displayedColumns.slice();

  protected dataSource = new MatTableDataSource(this.data);

  protected applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  protected toLocalDateString(dateStr: string): string {

    const returnValue = (new Date(dateStr)).toLocaleDateString('de');

    return returnValue;
  }


  protected toggleVisibleColumn(column: string): void {
    if (this.isInVisibleColumns(column)) {
      this.columnsToDisplay = this.columnsToDisplay.filter(el => el !== column);
    } else {
      this.columnsToDisplay.push(column)
    }

    this.columnsToDisplay.sort((a, b) => (this.displayedColumns.findIndex(el => el === a) - this.displayedColumns.findIndex(el => el === b)));
  }

  protected isInVisibleColumns(column: string): boolean {
    const returnValue = Boolean(this.columnsToDisplay.find(el => el === column))

    return returnValue;
  }



  protected onListDrop(event: CdkDragDrop<string[]>) {
    // Swap the elements around
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);

    this.table.renderRows();
    this.dataSource._updateChangeSubscription();
  }

  tableDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columnsToDisplay, event.previousIndex, event.currentIndex);
    this.dataSource._updateChangeSubscription();
  }

  protected onTasteClicked(element: PeriodicElement): void {
    switch (element.taste) {
      case PeriodicTaste.Bad:
        element.taste = PeriodicTaste.Mediocre
        break;
      case PeriodicTaste.Mediocre:
        element.taste = PeriodicTaste.Good
        break;
      case PeriodicTaste.Good:
        element.taste = PeriodicTaste.Bad
        break;

      default:
        break;
    }
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  protected onLabelClick(inputRef: HTMLElement, spanRef: HTMLElement): void {
    inputRef.classList.remove('display-none');
    spanRef.classList.add('display-none');
    inputRef.focus();
  }

  protected onInputBlur(inputRef: HTMLElement, spanRef: HTMLElement): void {
    inputRef.classList.add('display-none');
    spanRef.classList.remove('display-none');
  }

  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  onBatchTasteClicked(taste: PeriodicTaste): void {
    this.selection.selected.forEach(el => el.taste = taste)
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }



  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
