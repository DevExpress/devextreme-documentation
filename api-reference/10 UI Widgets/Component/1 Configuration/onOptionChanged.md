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
The option's short name.

##### field(e.fullName): String
The option's full name. Contains a full hierarchy of the option.

##### field(e.value): any
The option's new value.

---
