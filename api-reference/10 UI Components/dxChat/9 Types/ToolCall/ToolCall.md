---
id: ToolCall
module: ui/chat
export: ToolCall
type: Object
generateTypeLink:
---
---
##### shortDescription
A configuration object for a tool call that an AI assistant made to generate a response.

---
Pass these objects to a message's [toolCalls](/api-reference/10%20UI%20Components/dxChat/9%20Types/TextMessage/toolCalls.md '/Documentation/ApiReference/UI_Components/dxChat/Types/TextMessage/#toolCalls') array. Chat displays each tool call as an item with the tool name in the title. When users expand an item, they see the tool arguments and result.

A **ToolCall** object can also contain custom fields. You can access these fields in a [messageTemplate](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/messageTemplate.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate').
