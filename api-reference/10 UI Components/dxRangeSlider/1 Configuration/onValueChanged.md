---
id: dxRangeSlider.Options.onValueChanged
type: function(e)
default: null
---
---
##### param(e): ui/range_slider:ValueChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.end): Number
The right edge of the currently selected range.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.start): Number
The left edge of the currently selected range.

##### field(e.value): Array<Number>
The start and end values.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.previousValue): any
The UI component's previous value.

---
