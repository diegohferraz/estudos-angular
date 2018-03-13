import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CoursesService } from './courses.service';

import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';

import { InputFormatDirective } from './input-format.directive';
import { ZyppyComponent } from './zyppy/zyppy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    TitleCasePipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ZyppyComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  	CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
