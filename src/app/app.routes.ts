import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const AppRoutes = [
  {path: 'homepage', component: AppComponent},
  {path: 'about', component: AboutComponent },
  {path: 'portfolio', component: PortfolioComponent },
  {path: 'resume', component: ResumeComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'contact', component: ContactComponent },
];

export const HomePageRouting: ModuleWithProviders = RouterModule.forChild(AppRoutes);
