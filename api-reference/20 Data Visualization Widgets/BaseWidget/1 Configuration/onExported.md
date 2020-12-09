---
id: BaseWidget.Options.onExported
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after the widget is exported.

##### param(e): Object
Information about the event.

##### field(e.component): BaseWidget
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### return: any
<!-- Description goes here -->

---
#####See Also#####
- [onExporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onExporting.md '{basewidgetpath}/Configuration#onExporting')
- [onFileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onFileSaving.md '{basewidgetpath}/Configuration#onFileSaving')