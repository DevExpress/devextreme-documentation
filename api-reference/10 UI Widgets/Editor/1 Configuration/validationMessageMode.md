---
default: 'auto'
acceptValues: 'auto' | 'always'
type: String
---
---
##### shortDescription
Specifies how the message about the [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') that are not satisfied by this editor's value is displayed.

---
The following option values are possible:

- **auto**  
The tooltip with the message is displayed when the editor is in focus.
- **always**  
The tooltip with the message is not hidden when the editor loses focus.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ValidationMessageMode` enum. This enum accepts the following values: `Auto` and `Always`.