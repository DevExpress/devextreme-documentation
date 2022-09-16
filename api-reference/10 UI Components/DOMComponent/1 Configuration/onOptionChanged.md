---
id: DOMComponent.Options.onOptionChanged
type: function(e)
default: null
---
---
##### param(e): Object
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

##### field(e.value): any
The modified property's new value.

---
