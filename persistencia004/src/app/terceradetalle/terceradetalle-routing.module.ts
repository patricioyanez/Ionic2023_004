import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerceradetallePage } from './terceradetalle.page';

const routes: Routes = [
  {
    path: '',
    component: TerceradetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerceradetallePageRoutingModule {}
