---
id: DataExpressionMixin.Options.dataSource
type: String | Array<CollectionWidgetItem, Object> | DataSource | DataSource_Options
default: null
inheritsType: CollectionWidgetItem
---
---
##### shortDescription
Binds the widget to data.

---
#include common-dataSource-description with {
    widget_works_with: "The **{WidgetName}** works with collections of objects or `string`, `number`, or `boolean` values.",

    object_structure_notes: "In each case, also specify the [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '{basewidgetpath}/Configuration/#valueExpr'), [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '{basewidgetpath}/Configuration/#displayExpr'), or both if the data source provides objects.",

    dataSource_items_note: "- Do not specify the [items](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/items '{basewidgetpath}/Configuration/items/') option if you specified the **dataSource**, and vice versa."
}