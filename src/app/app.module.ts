import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PlyrModule } from 'ngx-plyr';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CollapseModule, BsDropdownModule, CarouselModule, TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ScrollComponent } from './shared/scroll.component';
import { EmployerComponent } from './employer/employer.component';
import { BasicComponent } from './employer/basic/basic.component';
import { HeadhunterComponent } from './employer/headhunter/headhunter.component';
import { StudentComponent } from './student/student.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SocialComponent } from './social/social.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ScrollComponent,
    EmployerComponent,
    BasicComponent,
    HeadhunterComponent,
    StudentComponent,
    AboutUsComponent,
    SocialComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlyrModule,
    DragScrollModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
