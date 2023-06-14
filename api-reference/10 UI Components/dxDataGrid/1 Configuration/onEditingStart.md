---
id: dxDataGrid.Options.onEditingStart
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a cell or row switches to the editing state.

##### param(e): EditingStartEvent
Information about the event that caused the function's execution.

---
If the **editing**.[mode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode') is *"batch"* or *"cell"*, this function is executed while the UI component renders columns of `boolean` [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType') and other columns whose [showEditorAlways](/api-reference/_hidden/GridBaseColumn/showEditorAlways.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#showEditorAlways') property is **true**.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowEditingAndEditingEvents/"
}