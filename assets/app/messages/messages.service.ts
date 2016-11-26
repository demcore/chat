import { Message } from "./message/message.model";

export class MessagesService {
    messages: Message[] = [];

    addMessage(message: Message) {
        this.messages.push(message);
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}