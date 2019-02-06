import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { EmployerComponent } from './employer/employer.component';
import { StudentComponent } from './student/student.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SocialComponent } from './social/social.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
   // Layout componet and other pages
   {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'employer', component: EmployerComponent },
      { path: 'student', component: StudentComponent },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'social', component: SocialComponent },
      { path: 'contactus', component: ContactusComponent }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
