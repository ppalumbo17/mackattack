import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRoutes = [
  {path: 'homepage', component: AppComponent}
];

export const HomePageRouting: ModuleWithProviders = RouterModule.forChild(AppRoutes);
