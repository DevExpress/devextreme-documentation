---
id: dxChat.Options.reloadOnChange
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether the Chat UI component displays a message immediately after the message is entered. This property is in effect only if a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object is used.

---
When you send a message in Chat (press the "Send" button), Chat triggers the store's [insert](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert) method and adds the message to the store.

Then, if **reloadOnChange** is enabled (default), DataSource [reloads](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload), clearing all items and calling the [load](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method to update itself. Chat automatically listens for DataSource [changes](/Documentation/ApiReference/Data_Layer/DataSource/Events/#changed) and updates the message feed with new messages.

To manage large numbers of messages, prevent additional load requests, and control message rendering timing, disable **reloadOnChange**. Handle the store's CRUD operations and [render messages](/Documentation/ApiReference/UI_Components/dxChat/Methods/#renderMessagemessage) as your needs dictate.