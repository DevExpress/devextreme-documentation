---
id: DOMComponent.Options.onOptionChanged
type: function(e)
default: null
EventForAction: DOMComponent.optionChanged
---
---
##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.fullName): String
The path to the modified option that includes all parent options.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.name): String
The modified option if it belongs to the first level. Otherwise, the first-level option it is nested into.

##### field(e.value): any
The modified option's new value.

---
