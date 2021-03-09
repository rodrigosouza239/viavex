import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sliders',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sms',
    loadChildren: () => import('./pages/sms/sms.module').then( m => m.SmsPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./pages/maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'senha',
    loadChildren: () => import('./pages/senha/senha.module').then( m => m.SenhaPageModule)
  },
  {
    path: 'sliders',
    loadChildren: () => import('./pages/sliders/sliders.module').then( m => m.SlidersPageModule)
  },
  {
    path: 'validationsms',
    loadChildren: () => import('./pages/validationsms/validationsms.module').then( m => m.ValidationsmsPageModule)
  },
  {
    path: 'selfie',
    loadChildren: () => import('./pages/selfie/selfie.module').then( m => m.SelfiePageModule)
  },
  {
    path: 'registerdocuments',
    loadChildren: () => import('./pages/registerdocuments/registerdocuments.module').then( m => m.RegisterdocumentsPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'registerhome',
    loadChildren: () => import('./pages/registerhome/registerhome.module').then( m => m.RegisterhomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
