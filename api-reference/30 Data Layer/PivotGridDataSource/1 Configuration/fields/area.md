---
default: undefined
acceptValues: undefined | 'row' | 'column' | 'data' | 'filter'
type: String
---
---
##### shortDescription
Type of the area where the field is located.

---
If this option is *undefined*, the field is displayed in the [Field Chooser](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/fieldChooser '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldChooser/') only. An end-user can place this field to any area. Otherwise, the field is displayed in the corresponding area of the pivot grid and its area can be changed by an end-user using the Field Chooser. 

[note] You can allow users to place the field to the **Data Fields** area only by setting the [isMeasure](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/isMeasure.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#isMeasure') option to *true*. To deny using the integrated Field Chooser, set the **PivotGrid** | **fieldChooser** | [enabled](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/fieldChooser/enabled.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldChooser/#enabled') option to *false*.
 
When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `PivotGridArea` enum. This enum accepts the following values: `Row`, `Column`, `Data` and `Filter`.