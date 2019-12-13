---
id: dxDropDownButton.Options.dataSource
type: String | Array<dxDropDownButtonItem, Object> | DataSource | DataSource_Options
default: null
inheritsType: dxDropDownButtonItem
---
---
##### shortDescription
Provides data for the drop-down menu.

---
#include common-dataSource-description with {
    widget_works_with: "The **DropDownButton** works with collections of objects or `string` or `number` values.",

    object_structure_notes: "If the data source provides objects, also specify the [keyExpr]({basewidgetpath}/Configuration/#valueExpr) and [displayExpr](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/displayExpr.md '{basewidgetpath}/Configuration/#displayExpr') options. Note that [particular fields](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/') in the objects can control the widget's appearance. See the [Default Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/05%20Default%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Default_Templates') for more information.",

    dataSource_items_note: "- Do not specify the [items](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/items '{basewidgetpath}/Configuration/items/') option if you specified the **dataSource**, and vice versa."
}