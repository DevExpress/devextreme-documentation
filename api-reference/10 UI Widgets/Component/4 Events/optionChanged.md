---
type: event
---
---
##### shortDescription
Fires after an option of the component is changed.

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
Instead, you can use the [onOptionChanged](/api-reference/10%20UI%20Widgets/Component/1%20Configuration/onOptionChanged.md '{basewidgetpath}/Configuration/#onOptionChanged') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')