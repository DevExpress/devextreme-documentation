---
EventForAction: ..\4 Events\itemClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A handler for the [itemClick](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemClick.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemData): Object
The data that is bound to the clicked item.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): Number|Object
The clicked item's index. In a grouped list, the index represents an object defining group and item indexes: { group: 0, item: 0 }.

---
Assign a function to perform a custom action when a widget item is clicked.

To navigate to a specific URL when the **itemClick** event fires, assign that URL directly to this option.

#####See Also#####
- [List - Universal Actions](/concepts/05%20Widgets/List/45%20End-User%20Interaction/05%20Universal%20Actions.md '/Documentation/Guide/Widgets/List/End-User_Interaction/Universal_Actions/')