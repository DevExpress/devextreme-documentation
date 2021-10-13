---
id: CollectionWidget.Options.dataSource
type: String | Array<String, CollectionWidgetItem, any> | Store | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Binds the UI component to data.

---
#include common-dataSource-description with {
    widget_works_with: "The {WidgetName} works with collections of `string` values or objects.",

    object_structure_notes: "If the data source provides objects, also specify the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '{basewidgetpath}/Configuration/#itemTemplate'). You can skip this part if the objects contain fields described in the [items](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/items '{basewidgetpath}/Configuration/items/') section.",
    
    dataSource_items_note: "- Do not specify the [items](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/items '{basewidgetpath}/Configuration/items/') property if you specified the **dataSource**, and vice versa."
}