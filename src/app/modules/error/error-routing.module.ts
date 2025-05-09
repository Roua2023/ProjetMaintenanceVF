import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { Error401Component } from './pages/error401/error401.component';
import { Error405Component } from './pages/error405/error405.component';
import { Error406Component } from './pages/error406/error406.component';
import { Error407Component } from './pages/error407/error407.component';
import { Error402Component } from './pages/error402/error402.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      { path: '', redirectTo: '404', pathMatch: 'full' },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
       { path: '401', component: Error401Component },
      { path: '405', component: Error405Component },
         { path: '406', component: Error406Component },
            { path: '407', component: Error407Component },
               { path: '402', component: Error402Component },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
