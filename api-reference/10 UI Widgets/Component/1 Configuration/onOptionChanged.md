---
id: Component.Options.onOptionChanged
type: function(e)
default: null
EventForAction: Component.optionChanged
---
---
##### shortDescription
A function that is executed after a widget option is changed.

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
