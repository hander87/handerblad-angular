import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

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
import { ApisearchComponent } from './pages/apisearch/apisearch.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'apisearch', component: ApisearchComponent }
];

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
    FooterComponent,
    ApisearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
