import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

import { GeneralitesComponent } from './pages/generalites/generalites.component';
import { MaintenanceCorrecComponent } from './pages/maintenance-correc/maintenance-correc.component';
import { MaintenancePrevComponent } from './pages/maintenance-prev/maintenance-prev.component';
import { Maintenance4Component } from './pages/maintenance4/maintenance4.component';
import { Gmao4Component } from './pages/gmao4/gmao4.component';
import { LeanmaintenanceComponent } from './pages/leanmaintenance/leanmaintenance.component';
import { PhmComponent } from './pages/phm/phm.component';
import { PronoComponent } from './pages/prono/prono.component';
import { MaintenancepredictiveComponent } from './pages/maintenancepredictive/maintenancepredictive.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'error500', pathMatch: 'full' },
      // { path: 'sign-in', component: SignInComponent, data: { returnUrl: window.location.pathname } },
      // { path: 'sign-up', component: SignUpComponent },
      { path: 'generalites', component: GeneralitesComponent },
      { path: 'maintennacecorrec', component: MaintenanceCorrecComponent },
      { path: 'maintennaceprev', component: MaintenancePrevComponent },
        { path: 'maintennace4', component: Maintenance4Component },
          { path: 'gmao4', component:Gmao4Component },
          { path: 'lean', component:LeanmaintenanceComponent },
          { path: 'phm', component:PhmComponent },
          { path: 'prono', component:PronoComponent },
           { path: 'maintePred', component:MaintenancepredictiveComponent },
      { path: '**', redirectTo: 'error500', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
