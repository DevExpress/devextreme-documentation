---
id: dxTreeView.Options.onItemSelectionChanged
type: function(e)
default: null
EventForAction: dxTreeView.itemSelectionChanged
---
---
##### shortDescription
A function that is executed when a single TreeView item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.itemData): Object
<!-- Description goes here -->

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
<!-- Description goes here -->

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The item's node.

---
This function is executed when:

- Users select an item [by click](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick') or [using its checkbox](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#showCheckBoxesMode').

- The [selectItem()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/selectItem(itemElement).md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#selectItemitemElement') or [unselectItem()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/unselectItem(itemElement).md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#unselectItemitemElement') method is called.

Alternatively, you can use the [onSelectionChanged](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#onSelectionChanged') function, which is executed in all the cases above, and when all items are selected simultaneously.
