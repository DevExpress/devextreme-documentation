---
EventForAction: ..\4 Events\optionChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed after a widget option is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.name): String
The modified option if it belongs to the first level. Otherwise, the first-level option it is nested into.

##### field(e.fullName): String
The path to the modified option that includes all parent options.

##### field(e.value): any
The modified option's new value.

---
