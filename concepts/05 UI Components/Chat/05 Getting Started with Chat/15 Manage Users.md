Assign chat users:

- Specify the user's [ID](/Documentation/ApiReference/UI_Components/dxChat/Types/User/#id).
- Specify the user's [name](/Documentation/ApiReference/UI_Components/dxChat/Types/User/#name). If the name is not specified, it becomes "Unknown User".
- Define avatars with a [URL](/Documentation/ApiReference/UI_Components/dxChat/Types/User/#avatarUrl) and [alt](Documentation/ApiReference/UI_Components/dxChat/Types/User/#avatarAlt) text. If the URL is not specified, the avatar becomes the user's name initials.
- Assign a user to the [user](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#user) property to define the chat owner.

---
##### jQuery

    <!-- tab: index.js -->
    const firstUser = {
        id: "1",
        name: "User"
    };

    const secondUser = {
        id: "2",
        name: "Feedback Bot",
        avatarUrl: "./images/Chat/bot.png"
    };

    $(function() {
        $("#chat").dxChat({ 
            // ...
            user: firstUser,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat ...
        [user]="firstUser"
    >
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from "devextreme-angular/ui/chat";
    // ...
    export class AppComponent {
        firstUser: DxChatTypes.User = {
            id: "1",
            name: "User",
        };
        secondUser: DxChatTypes.User = {
            id: "2",
            name: "Feedback Bot",
            avatarUrl: "./images/Chat/bot.png"
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat ...
            :user="firstUser"
        />
    </template>

    <script setup>
    // ...
    const firstUser = {
        id: "1",
        name: "User"
    };

    const secondUser = {
        id: "2",
        name: "Feedback Bot",
        avatarUrl: "./images/Chat/bot.png"
    };
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const firstUser = {
        id: "1",
        name: "User"
    };

    const secondUser = {
        id: "2",
        name: "Feedback Bot",
        avatarUrl: "./images/Chat/bot.png"
    };

    function App() {
        // ...
        return (
            <Chat ...
                user={firstUser}
            />
        );
    }

    export default App;

---