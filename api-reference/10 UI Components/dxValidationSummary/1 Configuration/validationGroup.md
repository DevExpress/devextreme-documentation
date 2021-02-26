---
id: dxValidationSummary.Options.validationGroup
type: String
---
---
##### shortDescription
Specifies the validation group for which summary should be generated.

---
In the Knockout approach, the ValidationSummary UI component should be added to the **div** element representing the [ValidationGroup](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Components/dxValidationGroup/') component. In this instance, you do not have to specify the **validationGroup** property for the ValidationSummary UI component.

If you use the JQuery approach, the **validationGroup** property should be specified for the ValidationSummary UI component to generate a summary for a particular validation group. Assign the validation group name that is specified for the **validationGroup** property of the [validators](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Components/dxValidator/') that extend the editors to be validated.