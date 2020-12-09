---
id: dxScheduler.Options.onCellClick
type: function(e) | String
default: null
---
---
##### shortDescription
A function that is executed when a view cell is clicked.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel execution of the default cell click handler.

##### field(e.cellData): Object
The clicked cell's data.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "clicked cell" }

##### field(e.component): dxScheduler
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if Knockout is used.

##### return: any
<!-- Description goes here -->

---
