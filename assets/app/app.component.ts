import { Component } from '@angular/core';

import { MessagesService } from "./messages/messages.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessagesService]
})
export class AppComponent {
}