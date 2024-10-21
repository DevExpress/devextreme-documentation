---
id: CollectionWidget.Options.onSelectionChanging
type: function(e)
default: null
---
---
##### shortDescription
A function that is called before selection changes.

##### param(e): Object
Information about the event.

##### field(e.addedItems): Array<any>
The data of the selected items.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to cancel selection. 

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.removedItems): Array<any>
The data of the items removed from selection.

##### field(e.model): any
Model data. Available only if you use Knockout.

---
<!-- Description goes here -->