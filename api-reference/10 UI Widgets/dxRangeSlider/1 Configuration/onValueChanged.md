---
id: dxRangeSlider.Options.onValueChanged
type: function(e)
default: null
EventForAction: dxRangeSlider.valueChanged
---
---
##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.end): Number
The right edge of the currently selected range.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.start): Number
The left edge of the currently selected range.

##### field(e.value): Array<Number>
The start and end values.

---
