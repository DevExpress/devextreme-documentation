---
id: dxChat.renderMessage(message)
---
---
##### shortDescription
Renders a new message.

##### param(message): Message
A message to be rendered.

---
---
##### jQuery

This method is the primary way to render a new message in jQuery:

    <!-- tab: index.js -->
    $(() => {
        const chat = $("#chat").dxChat({
            onMessageEntered: (e) => {
                e.component.renderMessage(e.message);
            },
        }).dxChat('instance');
    });

##### Angular

[note] This method is not native to {Framework}. To add a new message to Chat, update the [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') or [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') property.

##### Vue

[note] This method is not native to {Framework}. To add a new message to Chat, update the [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') or [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') property.

##### React

[note] This method is not native to {Framework}. To add a new message to Chat, update the [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') or [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') property.

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/Overview/"
}