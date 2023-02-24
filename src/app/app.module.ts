import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { DialogComponent } from './shared/dialog.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
@NgModule({
  declarations: [
    AppComponent,
    MemberProfileComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    Ng2TelInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
