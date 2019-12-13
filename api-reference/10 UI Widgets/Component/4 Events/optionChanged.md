---
id: Component.optionChanged
type: eventType
---
---
##### shortDescription
Raised after a widget option is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.fullName): String
The path to the modified option that includes all parent options.

##### field(e.name): String
The modified option if it belongs to the first level. Otherwise, the first-level option it is nested into.

##### field(e.value): any
The modified option's new value.

---
Main article: [onOptionChanged](/api-reference/10%20UI%20Widgets/Component/1%20Configuration/onOptionChanged.md '{basewidgetpath}/Configuration/#onOptionChanged')

#####See Also#####
#include common-link-handleevents