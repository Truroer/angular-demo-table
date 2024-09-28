import { Routes } from '@angular/router';
import { Path } from './interfaces/Path';
import HomeComponent from './home/home.component';
import TableDragComponent from './table-drag/table-drag.component';
import TableGroupedComponent from './table-grouped/table-grouped.component';
import TableComponent from './table/table.component';

export const routes: Routes = [
  {
    path: Path.Home,
    pathMatch: 'full',
    // loadComponent: () => import('./home/home.component'),
    component: HomeComponent
  },
  {
    path: Path.Table,
    // loadComponent: () => import('./table/table.component'),
    component: TableComponent
  },
  {
    path: Path.TableDrag,
    // loadComponent: () => import('./table-drag/table-drag.component'),
    component: TableDragComponent
  },
  {
    path: Path.TableGrouped,
    // loadComponent: () => import('./table-grouped/table-grouped.component'),
    component: TableGroupedComponent
  }
];
