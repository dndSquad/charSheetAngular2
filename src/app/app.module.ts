import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CharInfoComponent } from './char-info/char-info.component';
import { CharAttrComponent } from './char-attr/char-attr.component';
import { CharSavingThrowsComponent } from './char-saving-throws/char-saving-throws.component';

@NgModule({
  declarations: [
    AppComponent,
    CharInfoComponent,
    CharAttrComponent,
    CharSavingThrowsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
