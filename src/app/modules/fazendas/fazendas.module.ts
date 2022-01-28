import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FazendasRoutingModule } from './fazendas-routing.module';
import { FazendaComponent } from './fazenda/fazenda.component';
import { TalhoesComponent } from './talhoes/talhoes.component';
import {ButtonModule} from "primeng/button";
import {SharedModule} from "../shared/shared.module";
import {RippleModule} from "primeng/ripple";
import {OverlayPanelModule} from "primeng/overlaypanel";


@NgModule({
  declarations: [
    FazendaComponent,
    TalhoesComponent
  ],
  imports: [
    CommonModule,
    FazendasRoutingModule,
    SharedModule,
    RippleModule,
    OverlayPanelModule,
  ]
})
export class FazendasModule { }
