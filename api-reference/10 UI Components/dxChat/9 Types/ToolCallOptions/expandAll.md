---
id: ToolCall.Options.expandAll
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether tool calls are initially expanded.

---
This setting applies to all tool calls that do not specify their own [expanded](/api-reference/10%20UI%20Components/dxChat/9%20Types/ToolCall/expanded.md '/Documentation/ApiReference/UI_Components/dxChat/Types/ToolCall/#expanded') value. The **expanded** value of a call overrides **expandAll**.

If you change **expandAll** at runtime, Chat renders tool calls in all messages again. Calls that users expanded or collapsed revert to their initial state.
