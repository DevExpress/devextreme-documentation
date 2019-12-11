---
type: eventType
---
---
##### shortDescription
Fires before the toolbar is created.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.toolbarOptions): Object
An object containing <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxToolbar/Configuration/">options of the toolbar</a>.

---
Instead, you can use the [onToolbarPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onToolbarPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onToolbarPreparing') option to handle the event.

This event allows you to customize the toolbar. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data related to the toolbar options.

<a href=" https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-templates-toolbar_customization" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a> 
<a href="https://www.youtube.com/watch?v=oWWL6iILMPM&index=1&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&t=3s" class="button orange small fix-width-155" target="_blank">Watch Video</a>