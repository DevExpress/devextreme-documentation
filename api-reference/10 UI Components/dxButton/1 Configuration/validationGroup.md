---
id: dxButton.Options.validationGroup
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of the [validation group](/api-reference/10%20UI%20Components/dxValidationGroup '/Documentation/ApiReference/UI_Components/dxValidationGroup/') to be accessed in the [click](/api-reference/10%20UI%20Components/dxButton/4%20Events/click.md '/Documentation/ApiReference/UI_Components/dxButton/Events/#click') event handler.

---
When using a button to validate several editors on a page, the button must "know" in which validation group these editors are located. 

Specify the **validationGroup** configuration property for the button. Assign the validation group name specified for the **validationGroup** property of the [validators](/api-reference/10%20UI%20Components/dxValidator '/Documentation/ApiReference/UI_Components/dxValidator/') that extend the editors to be validated. 

#####See Also#####
- [Validate Several Editor Values](/concepts/05%20UI%20Components/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/20%20Validate%20Several%20Editor%20Values '/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/#Validate_Several_Editor_Values')