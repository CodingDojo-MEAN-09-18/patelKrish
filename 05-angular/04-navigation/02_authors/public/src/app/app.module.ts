import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthorService } from './services/author.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorAllComponent } from './author/author-all/author-all.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { FormsModule } from '@angular/forms';
import { AuthorNewComponent } from './author/author-new/author-new.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorAllComponent,
    AuthorEditComponent,
    AuthorNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
