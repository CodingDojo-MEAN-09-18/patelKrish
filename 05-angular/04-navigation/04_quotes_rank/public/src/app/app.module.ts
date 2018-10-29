import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './server/http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthorAllComponent } from './author/author-all/author-all.component';
import { AuthorNewComponent } from './author/author-new/author-new.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { QuoteAllComponent } from './quote/quote-all/quote-all.component';
import { QuoteNewComponent } from './quote/quote-new/quote-new.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorAllComponent,
    AuthorNewComponent,
    AuthorEditComponent,
    QuoteAllComponent,
    QuoteNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
