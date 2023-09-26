import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerceradetallePageRoutingModule } from './terceradetalle-routing.module';

import { TerceradetallePage } from './terceradetalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerceradetallePageRoutingModule
  ],
  declarations: [TerceradetallePage]
})
export class TerceradetallePageModule {}
