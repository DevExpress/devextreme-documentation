---
id: dxTagBox.Options.onCustomItemCreating
type: function(e)
---
---
##### shortDescription
A function that is executed when a user adds a custom item. Requires [acceptCustomValue](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/acceptCustomValue.md '{basewidgetpath}/Configuration/#acceptCustomValue') to be set to **true**.

##### param(e): ui/tag_box:CustomItemCreatingEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.customItem): String | Object | Promise<any>
The field where to place a custom item.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.text): String
The input field's text.

---
<!-- Description goes here -->