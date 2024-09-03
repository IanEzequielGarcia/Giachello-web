import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionComponent } from './informacion.component';
import { TypographyComponent } from './typography.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Page404Component } from '../page404/page404.component';
import { Page500Component } from '../page500/page500.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    },
    {
      path: 'inicio',
      component: DashboardComponent,
      data: {
        title: 'Inicio'
      }
    },
    {
      path: 'informacion',
      component: InformacionComponent,
      data: {
        title: 'Información',
      },
    },
    {
      path: 'sobreNosotros',
      component: TypographyComponent,
      data: {
        title: 'Sobre Nosotros',
      },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
