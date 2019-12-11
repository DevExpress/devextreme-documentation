---
EventForAction: ..\4 Events\customItemCreating.md
default: function(e) { if(!e.customItem) { e.customItem = e.text; } }
type: function(e)
---
---
##### shortDescription
A handler for the [customItemCreating](/api-reference/10%20UI%20Widgets/dxSelectBox/4%20Events/customItemCreating.md '{basewidgetpath}/Events/#customItemCreating') event. Executed when a user adds a custom item. Requires [acceptCustomValue](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/acceptCustomValue.md '{basewidgetpath}/Configuration/#acceptCustomValue') to be set to **true**.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.text): string
The input field's text.

##### field(e.customItem): string|object|Promise
The field where to place a custom item.

##### return: string|object|Promise
A custom item or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) that is resolved after the item is created.

---
#####See Also#####
- [SelectBox - Create a User-Defined Item](/concepts/05%20Widgets/SelectBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/')
- [TagBox - Create a User-Defined Item](/concepts/05%20Widgets/TagBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/')