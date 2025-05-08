---
id: dxChat.Options.editing
type: Object
---
---
##### shortDescription
Configures editing.

---
[note]

- Before allowing a user to update and delete messages, make sure that your [data source](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource) supports these actions.
- Set the [Store](/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores)'s **key** property to `"id"` to ensure editing works properly.

[/note]

---
##### jQuery

    <!-- tab: index.js -->
    $('#chat').dxChat({
        items: initialMessages,
        editing: {
            allowUpdating: true,
            allowDeleting: true
        },
        onMessageEntered({ message }) {
            e.component.renderMessage(message);
        },
        onMessageUpdated(e) {
            const message = e.message;
            message.text = e.text;
            message.isEdited = true;
            initialMessages[e.message.id] = message;
            e.component.repaint();
        },
        onMessageDeleted(e) {
            const message = e.message;
            message.isDeleted = true;
            initialMessages[e.message.id] = message;
            e.component.repaint();
        },
    });