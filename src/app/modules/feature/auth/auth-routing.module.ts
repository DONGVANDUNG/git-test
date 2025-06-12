import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
export const routes = [
  {
    path: '',
    component: LoginComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
