import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './course/course.module';

import { BookModule } from './book/book.module';
import { EditorialModule } from './editorial/editorial.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    HttpClientModule,
    BookModule,
    EditorialModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }