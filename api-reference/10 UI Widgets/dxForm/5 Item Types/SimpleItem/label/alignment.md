---
default: 'left'
acceptValues: 'center' | 'left' | 'right'
type: String
---
---
##### shortDescription
Specifies the label's horizontal alignment.

---
[note]This option applies only if the label's location is set to *"top"*. The label's location is specified by the [label.location](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/label/location.md '{basewidgetpath}/Item_Types/SimpleItem/label/#location') option of a simple item or if it is not specified, by the [labelLocation](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/labelLocation.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#labelLocation') option of the **Form** widget.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `HorizontalAlignment` enum. This enum accepts the following values: `Left`, `Right` and `Center`.

#####See Also#####
- [Configure Labels - Location and Alignment](/concepts/05%20Widgets/Form/15%20Configure%20Item%20Labels/05%20Location%20and%20Alignment/05%20Align%20Labels%20Relatively%20to%20Editors.md '/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Location_and_Alignment/#Align_Labels_Relatively_to_Editors')