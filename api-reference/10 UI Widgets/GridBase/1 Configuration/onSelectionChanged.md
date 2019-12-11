---
EventForAction: ..\4 Events\selectionChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **selectionChanged** event. Executed after selecting a row or clearing its selection.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.currentSelectedRowKeys): Array<any>
The keys of the rows that have been selected.

##### field(e.currentDeselectedRowKeys): Array<any>
The keys of the rows whose selection has been cleared.

##### field(e.selectedRowKeys): Array<any>
The keys of all selected rows.

##### field(e.selectedRowsData): Array<Object>
The data of all selected rows.     
Does not include [calculated values](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue').

---
This handler has the following specifics:

- If a field providing key values is not specified in the data source, the whole data object is considered the key. In this case, all arrays passed to the handler contain data objects instead of keys.
- When selection is [deferred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '{basewidgetpath}/Configuration/selection/#deferred'), this handler does not provide access to keys and data.

Call the [byKey(key)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/byKey(key).md '{basewidgetpath}/Methods/#byKeykey') method to retrieve data.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/RowSelection/jQuery/Light/"
}