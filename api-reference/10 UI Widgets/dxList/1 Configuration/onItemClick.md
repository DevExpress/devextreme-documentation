---
EventForAction: ..\4 Events\itemClick.md
default: null
type: function() | String
---
---
##### shortDescription
A handler for the [itemClick](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemClick.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemClick') event.

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
Specifies the index of the clicked item. In a grouped list, the index represents an object defining group and item indexes: { group: 0, item: 0 }.

---
Assign a function to perform a custom action when a widget item is clicked.

To navigate to a specific URL when the **itemClick** event fires, assign that URL directly to this option.

#####See Also#####
- [List - Universal Actions](/concepts/05%20Widgets/List/45%20End-User%20Interaction/05%20Universal%20Actions.md '/Documentation/Guide/Widgets/List/End-User_Interaction/Universal_Actions/')