---
type: event
---
---
##### shortDescription
Fires after an editor value is validated against the specified [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules').

##### param(selectedRowsInfo): object
Provides function parameters.

##### field(selectedRowsInfo.name): string
The value of the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxValidator/Configuration/#name">name</a> option.

##### field(selectedRowsInfo.isValid): boolean
Indicates whether all the rules checked for the value are satisfied.

##### field(selectedRowsInfo.value): object
The validated value.

##### field(selectedRowsInfo.validationRules): array
An array of the validation rules specified for the current dxValidator object.

##### field(selectedRowsInfo.brokenRule): object
The object representing the first broken rule in the list of the specified validation rules.

---
Instead, you can use the [onValidated](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#onSelectionChanged) option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')