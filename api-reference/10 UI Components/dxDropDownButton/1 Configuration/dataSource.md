---
id: dxDropDownButton.Options.dataSource
type: String | Array<dxDropDownButtonItem, any> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Provides data for the drop-down menu.

---
#include common-dataSource-description with {
    widget_works_with: "The DropDownButton works with collections of objects or `string` or `number` values.",

    object_structure_notes: "If the data source provides objects, also specify the [keyExpr](/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/keyExpr.md '{basewidgetpath}/Configuration/#keyExpr') and [displayExpr](/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/displayExpr.md '{basewidgetpath}/Configuration/#displayExpr') properties. Note that [particular fields](/api-reference/10%20UI%20Components/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/') in the objects can control the UI component's appearance. See the [Default Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/05%20Default%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Default_Templates') for more information.",

    dataSource_items_note: "- Do not specify the [items](/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/items '{basewidgetpath}/Configuration/items/') property if you specified the **dataSource**, and vice versa."
}