---
id: PivotGridDataSource.Options.retrieveFields
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to auto-generate pivot grid fields from the [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/')'s data.

---
If you disable this option, the **PivotGrid** contains only the fields configured in the [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') array. With this option enabled, these fields are accompanied by auto-generated fields, which do not belong to any [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') by default and are only available in the [field chooser](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/10%20Field%20Chooser/01%20Field%20Chooser.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser').

#####See Also#####
- [Fields and Areas](/concepts/05%20Widgets/PivotGrid/020%20Fields%20and%20Areas '/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/')