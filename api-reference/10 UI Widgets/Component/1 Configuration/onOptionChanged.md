---
EventForAction: ..\4 Events\optionChanged.md
default: null
type: function
---
---
##### shortDescription
A handler for the [optionChanged](/api-reference/10%20UI%20Widgets/Component/4%20Events/optionChanged.md '{basewidgetpath}/Events/#optionChanged') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.name): string
Specifies the name of the option whose value is changed.

##### field(e.fullName): string
Specifies a full name of the option whose value is changed. The full name is formed by concatenating the names of the options that are presented in the hierarchy of the given option. The names are delimited by commas.

##### field(e.value): any
Specifies a new value for the option.

---
Assign a function to perform a custom action after an option of the component is changed.