import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver.ts';
import { PlaygroundComponent } from "./playground";


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { path: 'playground', component: PlaygroundComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail/index')
  },
  { path: '**',    component: NoContent },
];
