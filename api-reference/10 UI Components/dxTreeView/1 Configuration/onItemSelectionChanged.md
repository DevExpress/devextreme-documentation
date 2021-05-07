---
id: dxTreeView.Options.onItemSelectionChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a single TreeView item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): dxTreeView
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The item's node.

##### field(e.itemData): Object
The selected item's data.

##### field(e.itemIndex): Number
The item's index.

---
This function is executed when:

- Users select an item [by click](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick') or [using its checkbox](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#showCheckBoxesMode').

- The [selectItem()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/selectItem(itemElement).md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#selectItemitemElement') or [unselectItem()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/unselectItem(itemElement).md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#unselectItemitemElement') method is called.

Alternatively, you can use the [onSelectionChanged](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#onSelectionChanged') function, which is executed in all the cases above, and when all items are selected simultaneously.
