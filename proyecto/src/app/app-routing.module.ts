// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/components/login.component';
import { ProtectedPageComponent } from './modules/protected-page/components/protected-page.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedPageComponent, canActivate: [AuthGuard] }, // Aplica el guard
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] }, // Aplica el guard
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // Redirige a login para rutas no encontradas
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }