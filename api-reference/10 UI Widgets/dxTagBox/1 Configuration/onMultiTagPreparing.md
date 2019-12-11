---
EventForAction: ..\4 Events\multiTagPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **multiTagPreparing** event. Executed before the multi-tag is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only when using Knockout.

##### field(e.multiTagElement): dxElement
The multi-tag's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.selectedItems): Array<String, Number, Object>
The currently selected items.

##### field(e.text): String
Allows you to change the multi-tag's text.

##### field(e.cancel): Boolean
Allows you to cancel replacing ordinary tags with the multi-tag.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/TagCountLimitation/jQuery/Light/"
}