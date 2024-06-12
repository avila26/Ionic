import { loginupGuard } from './guard/loginup.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guard/login.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate:[loginGuard]

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadChildren: () =>
      import('./paginas/principal/principal.module').then(
        (m) => m.PrincipalPageModule),
        canActivate:[loginupGuard]
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./paginas/registro/registro.module').then(
        (m) => m.RegistroPageModule
      ),
      canActivate:[loginGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
