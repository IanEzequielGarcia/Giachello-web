import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio 🚗',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Información',
    url: '/extra/informacion',
    iconComponent: { name: 'cil-description' }
  },
  {
    name: 'Sobre nosotros',
    url: '/extra/sobreNosotros',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
