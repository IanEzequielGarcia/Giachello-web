import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionComponent } from './informacion.component';
import { TypographyComponent } from './typography.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { Page404Component } from '../pages/page404/page404.component';
import { Page500Component } from '../pages/page500/page500.component';

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
    {
      path: '404',
      component: Page404Component,
      data: {
        title: 'Page 404'
      }
    },
    {
      path: '500',
      component: Page500Component,
      data: {
        title: 'Page 500'
      }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
