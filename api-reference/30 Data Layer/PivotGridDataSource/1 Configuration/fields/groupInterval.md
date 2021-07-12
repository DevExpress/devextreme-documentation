---
id: PivotGridDataSource.Options.fields.groupInterval
acceptValues: 'day' | 'dayOfWeek' | 'month' | 'quarter' | 'year'
type: String | Number
default: undefined
---
---
##### shortDescription
Specifies how the field's values are combined into groups for the [headers](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Headers'). Cannot be used with an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/').

---
If the field's values are dates, specify this property with one of the accepted string values.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/VirtualScrolling/"
}

If the field's values are numbers, specify this property with a number that designates a step with which groups should be generated.

#####See Also#####
- [Data Grouping](/concepts/05%20UI%20Components/PivotGrid/050%20Grouping/020%20Data%20Grouping '/Documentation/Guide/UI_Components/PivotGrid/Grouping/#Data_Grouping')
- **fields[]**.[selector](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/selector.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#selector')