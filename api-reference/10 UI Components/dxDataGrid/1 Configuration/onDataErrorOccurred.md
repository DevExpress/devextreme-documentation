---
id: dxDataGrid.Options.onDataErrorOccurred
type: function(e)
---
---
##### shortDescription
A function that is executed when an error occurs in the data source.

##### param(e): ui/data_grid:DataErrorOccurredEvent
Information on the occurred error.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.error): Error
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object that defines the error.

---
<!-- Description goes here -->