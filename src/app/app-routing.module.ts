import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { BootstrapGridComponent } from './bootstrap-grid/bootstrap-grid.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'bootstrap-grid', component: BootstrapGridComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
