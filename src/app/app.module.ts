import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstBlockComponent } from './first-block/first-block.component';

import { RouterModule,Routes } from '@angular/router';

import { ColorChoiceService } from './color-choice.service';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { BuyComponent } from './buy/buy.component';
import { TestComponent } from './test/test.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RestApiService } from './rest-api.service';


const appRoutes: Routes = [
  {path:'', component: FirstBlockComponent}, 
  {path:'registration', component: RegistrationComponent},
  {path:'signup', component: SignupComponent},
  {path:'buy', component: BuyComponent},
  {path:'test', component: TestComponent},
  {path:'feedback', component: FeedbackComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstBlockComponent,
    RegistrationComponent,
    FooterComponent,
    SignupComponent,
    BuyComponent,
    TestComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule

  ],
  providers: [ColorChoiceService,RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
