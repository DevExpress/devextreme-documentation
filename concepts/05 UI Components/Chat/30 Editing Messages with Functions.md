You can set the **editing**.[allowDeleting](/Documentation/ApiReference/UI_Components/dxChat/Configuration/editing/#allowDeleting) and [allowUpdating](/Documentation/ApiReference/UI_Components/dxChat/Configuration/editing/#allowUpdating) options to a Boolean value to toggle editing functionality. 

Alternatively, you can customize conditions for when users can edit messages. For example, the following code snippet prevents editing or deleting messages over five minutes old.

---

##### jQuery

    <!-- tab: index.js -->
    const restrictEditing = ({ message }) => {
        if (Date.now() - message.timestamp < 5 * 60 * 1000) {
            return true;
        } else {
            return false;
        }       
    };

    $('#chat').dxChat({
        // ...
        editing: {
            allowUpdating: restrictEditing,
            allowDeleting: restrictEditing,
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat>
        <dxo-chat-editing
            [allowUpdating]="restrictEditing"
            [allowDeleting]="restrictEditing"
        ></dxo-chat-editing>
    </dx-chat>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        // ...
        restrictEditing(e) {
            if (Date.now() - e.message.timestamp < 5 * 60 * 1000) {
                return true;
            } else {
                return false;
            }       
        };
    };

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat>
            <DxEditing
                :allow-deleting="restrictEditing"
                :allow-updating="restrictEditing"
            />
        </DxChat>
    </template>

    <script setup lang="ts">
    import DxChat, { DxEditing } from 'devextreme-vue/chat';

    const restrictEditing = (e) => {
        if (Date.now() - e.message.timestamp < 5 * 60 * 1000) {
            return true;
        } else {
            return false;
        }       
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import Chat, { Editing } from 'devextreme-react/chat';

    const restrictEditing = (e) => {
        if (Date.now() - e.message.timestamp < 5 * 60 * 1000) {
            return true;
        } else {
            return false;
        }       
    };

    export default function App() {
        return (
            <Chat>
                <Editing
                    allowDeleting={restrictEditing}
                    allowUpdating={restrictEditing}
                />
            </Chat>
        );
    }

[note] A Boolean value must be returned if **allowDeleting** or **allowUpdating** are used as functions.