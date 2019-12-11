---
EventForAction: ..\4 Events\customItemCreating.md
default: function(e) { if(!e.customItem) { e.customItem = e.text; } }
type: function(e)
---
---
##### shortDescription
A function that is executed when a user adds a custom item. Requires [acceptCustomValue](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/acceptCustomValue.md '{basewidgetpath}/Configuration/#acceptCustomValue') to be set to **true**.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.text): String
The input field's text.

##### field(e.customItem): String | Object | Promise<any>
The field where to place a custom item.

---
#####See Also#####
- [SelectBox - Create a User-Defined Item](/concepts/05%20Widgets/SelectBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/')
- [TagBox - Create a User-Defined Item](/concepts/05%20Widgets/TagBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/')