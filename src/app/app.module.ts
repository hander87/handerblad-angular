import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnalogclockComponent } from './plugins/analogclock/analogclock.component';
import { WeatherComponent } from './plugins/weather/weather.component';
import { HeaderComponent } from './layout/header/header.component';
import { IntroComponent } from './layout/intro/intro.component';
import { WorkComponent } from './layout/work/work.component';
import { ExperienceComponent } from './layout/experience/experience.component';
import { CoursesComponent } from './layout/courses/courses.component';
import { SideprojectsComponent } from './layout/sideprojects/sideprojects.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AnalogclockComponent,
    WeatherComponent,
    HeaderComponent,
    IntroComponent,
    WorkComponent,
    ExperienceComponent,
    CoursesComponent,
    SideprojectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
