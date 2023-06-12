---
id: dxPopover.Options.onOptionChanged
type: function(e)
---
---
##### shortDescription
A function that is executed after a UI component property is changed.

##### param(e): ui/popover:OptionChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.fullName): String
The path to the modified property that includes all parent properties.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.name): String
The modified property if it belongs to the first level. Otherwise, the first-level property it is nested into.

##### field(e.previousValue): any
The UI component's previous value.

##### field(e.value): any
The modified property's new value.

---
<!-- Description goes here -->