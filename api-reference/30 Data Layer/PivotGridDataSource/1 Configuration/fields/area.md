---
id: PivotGridDataSource.Options.fields.area
acceptValues: undefined | 'column' | 'data' | 'filter' | 'row'
type: String
default: undefined
---
---
##### shortDescription
Specifies the field's area.

---
The field does not belong to any area if this option is **undefined**. However, the field's header is displayed in the [field chooser](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/10%20Field%20Chooser/01%20Field%20Chooser.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser'), which enables the user to move this field to any area. In other cases, the field is displayed in the specified area.
 
#include common-ref-enum with {
    enum: "`PivotGridArea`",
    values: "`Row`, `Column`, `Data`, and `Filter`"
}

#####See Also#####
- [Fields and Areas](/concepts/05%20Widgets/PivotGrid/020%20Fields%20and%20Areas '/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/')
- **fields[]**.[isMeasure](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/isMeasure.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#isMeasure')
- [getAreaFields(area, collectGroups)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/getAreaFields(area_collectGroups).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#getAreaFieldsarea_collectGroups')