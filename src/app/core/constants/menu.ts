import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Commencer',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: '🔻',
          route: '/dashboard',
          children: [
            { label: 'Accueil', route: '/dashboard/nfts' },
          //   { label: 'Podcast', route: '/dashboard/podcast' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Géneralités sur La Maintenance',
          route: '/auth',
          children: [
           
             { label: 'Objectifs et importance', route: '/auth/forgot-password' },
            // { label: 'Maintenance corrective', route: '/auth/new-password' },
             { label: 'Maintenance préventive', route: '/auth/two-steps' },
            // { label: 'Sign up', route: '/auth/sign-up' },
            // { label: 'Sign in', route: '/auth/sign-in' },
          ],
        },
      
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Maintenance et GMAO 4.0',
          route: '/components',
          children: [{ label: 'Table', route: '/components/table' }],
        },
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Lean Maintenance',
          route: '/components',
          children: [{ label: 'Voir Cours ->', route: '/components/table' }],
        },
          {
          icon: 'assets/icons/heroicons/outline/exclamation-triangle.svg',
          label: 'Maintenance predictive ',
          route: '/errors',
          children: [
            // { label: '404', route: '/errors/404' },
            // { label: '500', route: '/errors/500' },
           // { label: '402', route: '/errors/402' },
            { label: 'Voir Cours ->', route: '/errors/401' },
           
          ],
        },
           {
          icon: 'assets/icons/heroicons/outline/exclamation-triangle.svg',
          label: 'Pronostic et PHM ',
          route: '/errors',
          children: [
            // { label: '404', route: '/errors/404' },
            // { label: '500', route: '/errors/500' },
           // { label: '402', route: '/errors/402' },
            { label: 'Voir Cours ->', route: '/errors/401' },
           
          ],
        },
      ],
    },
    {
      group: 'Découvrire',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'Certifications',
          route: '/components/table',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Lien utiles',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Contact',
          route: '/users',
        },
      ],
    },
    {
      group: 'Configuration',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'parametres',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Dossiers',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
