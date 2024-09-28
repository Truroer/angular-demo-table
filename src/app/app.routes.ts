import { Routes } from '@angular/router';
import { Path } from './interfaces/Path';

export const routes: Routes = [
  {
    path: Path.Home,
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component'),
    // component: HomeComponent
  },
  {
    path: Path.Table,
    loadComponent: () => import('./table/table.component'),
    // component: TableComponent
  },
  {
    path: Path.TableDrag,
    loadComponent: () => import('./table-drag/table-drag.component'),
    // component: TableDragComponent
  },
  {
    path: Path.TableGrouped,
    loadComponent: () => import('./table-grouped/table-grouped.component'),
    // component: TableGroupedComponent
  }
];
