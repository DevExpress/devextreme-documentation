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
Add `ToolCall` objects to a message's [toolCalls](/api-reference/10%20UI%20Components/dxChat/9%20Types/TextMessage/toolCalls.md '/Documentation/ApiReference/UI_Components/dxChat/Types/TextMessage/#toolCalls') array. The Chat component displays each tool call as a collapsible block. The block header displays the tool name. When users expand the block, they see the tool arguments and result.

[note] The Chat component does not populate **ToolCall** fields automatically. Your application specifies all of them, including **name** and **status**, after it runs the tools that the AI service requested. The component only displays this data.

A **ToolCall** object can also contain custom fields. You can access these fields in a [messageTemplate](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/messageTemplate.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate').
