---
id: dxChat.Options.dataSource
type: String | Array<Message> | Store | DataSource | DataSource_Options | null
default: null
---
---
##### shortDescription
Binds the UI component to data.

---
[important] If you use [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/), disable [pagination](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) to ensure Chat functions properly.

#include common-dataSource-description with {
    widget_works_with: "{WidgetName} works with collections of [objects](/api-reference/10%20UI%20Components/dxChat/9%20Types/Message '/Documentation/ApiReference/UI_Components/dxChat/Types/Message/') or `string` values.",

    dataSource_items_note: "- Do not specify the [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '{basewidgetpath}/Configuration/items/') property if you specified the **dataSource**, and vice versa."
}