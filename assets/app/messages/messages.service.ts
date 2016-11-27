import {Http, Response, Headers} from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from "./message/message.model";

@Injectable()

export class MessagesService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http) {}

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post('http://localhost:3000/api/v1/messages', body, { headers })
            .map((response: Response) => {
                const result = response.json();

                const newMessage = new Message(result.data.content, 'Aleh', result.data._id, null);
                this.messages.push(newMessage);

                return message;
        })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        return this.http.get('http://localhost:3000/api/v1/messages')
            .map((response: Response) => {
                const messages = response.json().data;
                let transformedMessages: Message[] = [];

                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, 'Aleh', message._id, null))
                }
                this.messages = transformedMessages;

                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));;
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.patch('http://localhost:3000/api/v1/messages/' + message.messageId, body, { headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);

        return this.http.delete('http://localhost:3000/api/v1/messages/' + message.messageId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}