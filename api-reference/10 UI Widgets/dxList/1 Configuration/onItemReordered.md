---
EventForAction: ..\4 Events\itemReordered.md
hidden: false
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed after a list item is moved to another position.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemData): Object
The reordered item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): Number | Object
The item's index after reordering. This field holds the same value as **toIndex**.      
In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.fromIndex): Number
The item's previous index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.toIndex): Number
The item's current index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
#####See Also#####
- [allowItemReordering](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/allowItemReordering.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemReordering')
- [List - Handle Reordering-Related Events](/concepts/05%20Widgets/List/30%20Item%20Reordering/10%20Events.md '/Documentation/Guide/Widgets/List/Item_Reordering/#Events')