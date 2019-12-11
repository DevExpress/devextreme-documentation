---
dep: onItemSelectionChanged.md
EventForAction: ..\4 Events\itemSelected.md
default: null
type: function
---
---
##### deprecated
Use the [itemSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelectionChanged') event instead.

##### shortDescription
A handler for the [itemSelected](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemSelected.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelected') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.node): object
A <a href="Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#TreeViewNodes">node</a> of the selected item.

---
Assign a function to perform a custom action when a tree view item is selected.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtreeviewtreeviewselectionandcustomization/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>