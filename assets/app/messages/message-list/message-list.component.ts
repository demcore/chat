import {Component, OnInit} from "@angular/core";
import { Message } from '../message/message.model';
import {MessagesService} from "../messages.service";

@Component({
    selector: 'app-message-list',
    templateUrl: 'message-list.component.html'
})
export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messagesService: MessagesService) {}

    ngOnInit() {
        this.messagesService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                }
            );
    }
}