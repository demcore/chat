import { Component } from "@angular/core";

import { MessagesService } from "../messages.service";
import {Message} from "../message/message.model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: 'message-input.component.html'
})

export class MessageInputComponent {
    constructor(private messagesService: MessagesService) {}

    onSubmit(form: NgForm) {
        const message = new Message(form.value.content, 'Aleh');

        this.messagesService.addMessage(message);
        form.resetForm();
    }
}