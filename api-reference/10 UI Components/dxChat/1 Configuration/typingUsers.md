---
id: dxChat.Options.typingUsers
type: Array<User>
default: []
---
---
##### shortDescription
An array of users who are currently typing.

---
The following image displays messages that appear when a single user or multiple users are typing:

![Messages that display the number of users typing](/images/Chat/typing-users.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const user = [{
            name: 'User'
        }];
        const chat = $("#chat").dxChat({
            onTypingStart:(e) => {
                e.component.option("typingUsers", user);
            },
            onTypingEnd:(e) => {
                e.component.option("typingUsers", []);
            },
        }).dxChat('instance');
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat 
        (onTypingStart)="onTypingStart($event)"
        (onTypingEnd)="onTypingEnd($event)"
        [typingUsers]="typingUsers"
    ></dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from "devextreme-angular/ui/chat";
    // ...
    export class AppComponent {
        typingUsers: DxChatTypes.User[] = [];
        user: DxChatTypes.User = [{
            name: 'User'
        }];
        onTypingStart() {
            this.typingUsers = this.user;
        }
        onTypingEnd() {
            this.typingUsers = [];
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxChat
        :typing-users="typingUsers"
        @typing-start="onTypingStart"
        @typing-end="onTypingEnd"
    />
    </template>

    <script setup>
    import DxChat from "devextreme-vue/chat";
    const typingUsers = [];
    const user = [{
        name: 'User'
    }];
    const onTypingStart = () => {
        typingUsers = user; 
    }
    const onTypingEnd = () => {
        typingUsers = []; 
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from "react";
    import Chat from "devextreme-react/chat";

    const user = [{
        name: 'User'
    }];

    const App = () => {
        const [typingUsers, setTypingUsers] = useState();
        const onTypingStart = () => {
            setTypingUsers(user); 
        }
        const onTypingEnd = () => {
            setTypingUsers(); 
        }

        return (
            <Chat
                typingUsers={typingUsers}
                onTypingStart={onTypingStart}
                onTypingEnd={onTypingEnd}
            />
        );
    };

---