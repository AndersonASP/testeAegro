import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FazendaComponent} from "./fazenda/fazenda.component";
import {AppRotasEnum} from "../shared/models/AppRotasEnum";
import {TalhoesComponent} from "./talhoes/talhoes.component";

const routes: Routes = [
  {
    path: AppRotasEnum.NONE,
    redirectTo: AppRotasEnum.FAZENDA,
  },
  {
    path: AppRotasEnum.FAZENDA,
    component: FazendaComponent,
  },
  {
    path: AppRotasEnum.FAZENDA_TALHOES,
    component: TalhoesComponent,
  },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FazendasRoutingModule {
}
