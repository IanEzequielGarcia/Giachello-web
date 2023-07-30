import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionComponent } from './informacion.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Extra',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'informacion',
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
