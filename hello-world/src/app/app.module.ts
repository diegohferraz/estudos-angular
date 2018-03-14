import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoursesService } from './courses.service';
import { PostService } from './post.service';

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
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts-component/posts-component.component';

import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home-component/home-component.component';
import { GithubProfileComponent } from './github-profile-component/github-profile-component.component';
import { NotFoundComponent } from './not-found-component/not-found-component.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';



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
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'followers/:username', 
        component: GithubProfileComponent 
      },
      { 
        path: 'followers', 
        component: GithubFollowersComponent 
      },
      { 
        path: 'posts', 
        component: PostsComponent
      },
      { 
        path: '**',  
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
  	CoursesService,
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
