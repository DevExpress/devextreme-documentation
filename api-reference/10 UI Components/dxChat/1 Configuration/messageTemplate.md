---
id: dxChat.Options.messageTemplate
type: template | null
default: null
---
---
##### shortDescription
Specifies a custom template for a chat message.

##### param(data): Object
The current data object.

##### field(data.component): dxChat
The Chat instance.

##### field(data.message): Message
The text of the message.

##### param(messageBubbleElement): DxElement
#include common-ref-elementparam with { element: "message" }

##### return: String | Element | jQuery
A template name or container.

---
<!-- Description goes here -->