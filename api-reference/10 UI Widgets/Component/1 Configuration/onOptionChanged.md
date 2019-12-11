---
EventForAction: ..\4 Events\optionChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **optionChanged** event. Executed after an option of the widget is changed.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.name): String
A short name of the option whose value has been changed.

##### field(e.fullName): String
A full name of the option whose value has been changed; contains a full hierarchy of the option.

##### field(e.value): any
A new value for the option.

---
