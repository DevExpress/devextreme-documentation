---
type: eventType
---
---
##### shortDescription
Fires when a list item is clicked.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the clicked item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
The index of the clicked item. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Instead, you can use the [onItemClick](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemClick') option to handle the event.

[note] This event fires only if the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode') option is set to *'none'*.

#####See Also#####
- [List - Universal Actions](/concepts/05%20Widgets/List/45%20End-User%20Interaction/05%20Universal%20Actions.md '/Documentation/Guide/Widgets/List/End-User_Interaction/Universal_Actions/')
#include common-link-handleevents