---
EventForAction: ..\4 Events\rowValidating.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **rowValidating** event. Executed after cells in a row are validated against [validation rules](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/validationRules.md '{basewidgetpath}/Configuration/columns/#validationRules').

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.brokenRules): Array<Object>
An array of broken rules. The structure of rule objects is described in the [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section.

##### field(e.isValid): Boolean
Indicates whether data in all row cells satisfies the validation rules.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.newData): Object
The data of the validated row after changes.

##### field(e.oldData): Object
The data of the validated row before changes.

##### field(e.errorText): String
An error message to be displayed.

---
Use this handler to interfere before a message on the broken validation rules is displayed. For instance, you can perform additional checks in this handler and change the validation result by changing the **isValid** field of the handler parameter. Or, you can correct the error message using the **errorText** field of the same parameter.

[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), if changes in several rows are committed simultaneously, this handler will be executed for each row.