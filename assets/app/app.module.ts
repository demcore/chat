import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message/message.component";
import { MessageListComponent } from "./messages/message-list/message-list.component";
import { MessageInputComponent } from "./messages/message-input/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./common/header/header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout/logout.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}