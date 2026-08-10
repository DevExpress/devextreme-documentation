---
id: dxTagBox.Options.onSelectionChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a list item is selected or selection is canceled.

##### param(e): ui/tag_box:SelectionChangedEvent
Information about the event.

##### field(e.addedItems): Array<any>
The data of the selected items.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.removedItems): Array<any>
The data of the items removed from selection.

---

[note] When [applyValueMode](/api-reference/10%20UI%20Components/dxTagBox/1%20Configuration/applyValueMode.md '{basewidgetpath}/Configuration/#applyValueMode') is *"useButtons"*, the **onSelectionChanged** handler is executed only when users click the OK button.