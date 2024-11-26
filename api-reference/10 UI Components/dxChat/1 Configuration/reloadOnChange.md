---
id: dxChat.Options.reloadOnChange
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether the Chat UI component displays newly entered messages immediately. This property only applies if a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object is used.

---
When you send a message in a Chat (press the "Send" button), the Chat triggers the store's [insert](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert) method and adds the message to the store.

If **reloadOnChange** is enabled (default), the DataSource [reloads](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload): clears all items and calls the [load](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method to update itself. Chat automatically listens to DataSource [changes](/Documentation/ApiReference/Data_Layer/DataSource/Events/#changed) and updates the message feed with new messages.

Disable **reloadOnChange** to manage large numbers of messages, prevent additional load requests, and control message rendering timing. Handle the store's CRUD operations and [render messages](/Documentation/ApiReference/UI_Components/dxChat/Methods/#renderMessagemessage) as your needs dictate.