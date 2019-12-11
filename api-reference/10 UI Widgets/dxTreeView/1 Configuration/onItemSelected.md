---
dep: onItemSelectionChanged.md
EventForAction: ..\4 Events\itemSelected.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemSelected](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemSelected.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelected') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.node): dxtreeviewnode
A node of the selected item.

---
Assign a function to perform a custom action when a tree view item is selected.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtreeviewtreeviewselectionandcustomization/"
}