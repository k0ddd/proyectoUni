import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { authGuard } from './guards/auth.guard';
=======
>>>>>>> parent of d973033 (routing authguard hecho)
=======
>>>>>>> parent of d973033 (routing authguard hecho)

const routes: Routes = [
  {
    path: 'home',
<<<<<<< HEAD
<<<<<<< HEAD
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [authGuard]
=======
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
>>>>>>> parent of d973033 (routing authguard hecho)
=======
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
>>>>>>> parent of d973033 (routing authguard hecho)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
  path: 'recuperar-contrasena',
  component: RecuperarContrasenaComponent
<<<<<<< HEAD
<<<<<<< HEAD
  },
  {
    path: 'home-alumno',
    loadChildren: () => import('./home-alumno/home-alumno.module').then( m => m.HomeAlumnoPageModule),
    canActivate: [authGuard]
=======
>>>>>>> parent of d973033 (routing authguard hecho)
=======
>>>>>>> parent of d973033 (routing authguard hecho)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
