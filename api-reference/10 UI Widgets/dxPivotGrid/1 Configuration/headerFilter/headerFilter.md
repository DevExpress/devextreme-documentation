---
id: dxPivotGrid.Options.headerFilter
type: Object
---
---
##### shortDescription
Configures the header filter feature.

---
A header filter allows a user to filter individual field's values by including or excluding them from the applied filter. Clicking a header filter icon in the [field chooser](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/10%20Field%20Chooser/01%20Field%20Chooser.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser') or the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel') invokes a popup menu displaying all the unique field values. 

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget Pivot Grid Header Filter](/images/DataGrid/PivotGrid_headerFilter.png)

Assign **true** to the [allowFiltering](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowFiltering') option to make the icons visible. To customize a specific field's header filter, use the field's [headerFilter](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/headerFilter '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/headerFilter/') object.

#include datagrid-filtering-selectallmodifiesfiltertype with {
    filterValuesLink: "/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues",
    filterTypeLink: "/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterType"
}

#####See Also#####
- [Filtering](/concepts/05%20Widgets/PivotGrid/080%20Filtering '/Documentation/Guide/Widgets/PivotGrid/Filtering/')