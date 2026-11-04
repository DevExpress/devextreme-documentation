---
id: ToolCall.result
type: String | Object
---
---
##### shortDescription
Specifies the value the tool returned or an error message.

---
Chat displays the result in the "Result" field. Chat displays a string as is, with line breaks, and an object as JSON with a two-space indent. If you do not specify this field or it contains an empty string, Chat does not display the "Result" field.

If the tool call failed ([status](/api-reference/10%20UI%20Components/dxChat/9%20Types/ToolCall/status.md '/Documentation/ApiReference/UI_Components/dxChat/Types/ToolCall/#status') is `'error'`), specify the error message in this field. Chat highlights the result of a failed call.
