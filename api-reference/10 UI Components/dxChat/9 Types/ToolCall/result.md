---
id: ToolCall.result
type: String | Object
---
---
##### shortDescription
Specifies the value the tool returned or an error message.

---
The Chat component displays the result in the "Result" section of the tool call block. The component displays a string as is, with line breaks, and an object as JSON with a two-space indent. If you do not specify this field or it contains an empty string, the component does not display the "Result" section.

If the tool call failed ([status](/api-reference/10%20UI%20Components/dxChat/9%20Types/ToolCall/status.md '/Documentation/ApiReference/UI_Components/dxChat/Types/ToolCall/#status') is `'error'`), specify the error message in this field. The component highlights the "Result" section of a failed call.
