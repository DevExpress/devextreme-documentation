---
id: dxButtonGroup.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: dxButtonGroup.selectionChanged
---
---
##### shortDescription
A function that is executed when a button is selected or selection is canceled.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.addedItems): Array<any>
The data objects that correspond to the selected buttons.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.removedItems): Array<any>
The data objects that correspond to the buttons whose selection has been canceled. <br/>
The objects are taken from the [items](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/items/') array.

---
#####See Also#####
- [selectedItemKeys](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/selectedItemKeys.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#selectedItemKeys')
- [selectedItems](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#selectedItems')