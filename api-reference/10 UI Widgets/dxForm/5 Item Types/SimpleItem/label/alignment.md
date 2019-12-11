---
default: 'left'
acceptValues: 'left' | 'right' | 'center'
type: String
---
---
##### shortDescription
Specifies the label's horizontal alignment.

---
[note]This option applies only if the label's location is set to *"top"*. The label's location is specified by the [label.location](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/label/location.md '{basewidgetpath}/Item_Types/SimpleItem/label/#location') option of a simple item or if it is not specified, by the [labelLocation](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/labelLocation.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#labelLocation') option of the **Form** widget.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `HorizontalAlignment` enum. This enum accepts the following values: `Left`, `Right` and `Center`.