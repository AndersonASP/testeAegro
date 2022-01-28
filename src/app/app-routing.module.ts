import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRotasEnum} from "./modules/shared/models/AppRotasEnum";

const routes: Routes = [
  {
    path: AppRotasEnum.NONE,
    loadChildren: () =>
      import('./modules/fazendas/fazendas.module').then(
        (m) => m.FazendasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
