import {Component, OnInit} from "@angular/core";

import { MessagesService } from "../messages.service";
import {Message} from "../message/message.model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: 'message-input.component.html'
})

export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private messagesService: MessagesService) {}

    ngOnInit() {
        this.messagesService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }

    onSubmit(form: NgForm) {

        if (this.message) {
            this.message.content = form.value.content;
            this.messagesService.updateMessage(this.message)
                .subscribe();

            this.message = null;
        }  else {
            const message = new Message(form.value.content, 'Aleh');

            this.messagesService.addMessage(message).subscribe();
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }
}