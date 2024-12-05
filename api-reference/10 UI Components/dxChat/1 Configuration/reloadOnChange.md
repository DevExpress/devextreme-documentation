---
id: dxChat.Options.reloadOnChange
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether the Chat UI component displays newly entered messages immediately. This property only applies if [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') is used.

---
When you send a message in a Chat (press the "Send" button), the Chat triggers the store's [insert](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/insert.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert') method and adds the message to the store.

If **reloadOnChange** is enabled (default), the dataSource [reloads](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload'): clears all items and calls the [load](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method to update itself. Chat automatically listens to dataSource [changes](/api-reference/30%20Data%20Layer/DataSource/4%20Events/changed.md '/Documentation/ApiReference/Data_Layer/DataSource/Events/#changed') and updates the message feed with new messages.

Disable **reloadOnChange** to manage large numbers of messages, prevent additional load requests, and control message rendering timing. Handle the store's CRUD operations and [render messages](/api-reference/10%20UI%20Components/dxChat/3%20Methods/renderMessage(message).md '/Documentation/ApiReference/UI_Components/dxChat/Methods/#renderMessagemessage') as your needs dictate.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/"
}