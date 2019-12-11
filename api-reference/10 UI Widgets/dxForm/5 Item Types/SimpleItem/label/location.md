---
default: 'left'
acceptValues: 'left' | 'right' | 'top'
type: String
---
---
##### shortDescription
Specifies the location of a label against the editor.

---
[note]This option has higher priority than the [labelLocation](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/labelLocation.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#labelLocation') option of the form.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `FormLabelLocation` enum. This enum accepts the following values: `Left`, `Right` and `Top`.