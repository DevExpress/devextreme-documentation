---
id: GridBase.selectionChanged
type: eventType
---
---
##### shortDescription
Raised after selecting a row or clearing its selection.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.currentDeselectedRowKeys): Array<any>
The keys of the rows whose selection has been cleared.

##### field(e.currentSelectedRowKeys): Array<any>
The keys of the rows that have been selected.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.selectedRowKeys): Array<any>
The keys of all selected rows.

##### field(e.selectedRowsData): Array<Object>
The data of all selected rows.   
Does not include calculated values.

---
Main article: [onSelectionChanged](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onSelectionChanged.md '{basewidgetpath}/Configuration/#onSelectionChanged')

#####See Also#####
#include common-link-handleevents