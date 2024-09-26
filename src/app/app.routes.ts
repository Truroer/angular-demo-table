import { Routes } from '@angular/router';
import { Path } from './interfaces/Path';
import { TableComponent } from './table/table.component';
import { TableDragComponent } from './table-drag/table-drag.component';
import { TableGroupedComponent } from './table-grouped/table-grouped.component';

export const routes: Routes = [
  {
    path: Path.Table,
    component: TableComponent
  },
  {
    path: Path.TableDrag,
    component: TableDragComponent
  },
  {
    path: Path.TableGrouped,
    component: TableGroupedComponent
  }
];
