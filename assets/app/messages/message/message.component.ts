import {Component, Input} from "@angular/core";
import {Message} from "./message.model";
import {MessagesService} from "../messages.service";

@Component({
    selector: 'app-message',
    templateUrl: 'message.component.html',
    styleUrls: './styles.css'
})

export class MessageComponent {
    @Input() message: Message;

    constructor(private messagesService: MessagesService) {}

    onEdit() {
        this.messagesService.editMessage(this.message);
    }

    onDelete() {
        this.messagesService.deleteMessage(this.message).subscribe();
    }
}