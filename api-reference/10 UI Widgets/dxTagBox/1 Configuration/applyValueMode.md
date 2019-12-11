---
default: 'instantly'
acceptValues: 'useButtons' | 'instantly'
type: String
---
---
##### shortDescription
Specifies how the widget applies values.

---
The option accepts the following values.

- **instantly**  
 Applies values when they are selected.

- **useButtons**  
 Applies values when a user clicks the "OK" button.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `EditorApplyValueMode` enum. This enum accepts the following values: `Instantly` and `UseButtons`.