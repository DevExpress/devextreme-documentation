---
type: eventType
---
---
##### shortDescription
Raised after selecting a row or clearing its selection.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.currentSelectedRowKeys): array
The keys of the rows that have been selected.

##### field(e.currentDeselectedRowKeys): array
The keys of the rows whose selection has been cleared.

##### field(e.selectedRowKeys): array
The keys of all selected rows.

##### field(e.selectedRowsData): array
The data of all selected rows.   
Does not include calculated values.

---
Main article: [onSelectionChanged](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onSelectionChanged.md '{basewidgetpath}/Configuration/#onSelectionChanged')

#####See Also#####
#include common-link-handleevents