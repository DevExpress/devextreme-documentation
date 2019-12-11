---
default: undefined
type: String
---
---
##### shortDescription
Specifies the name of the [validation group](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/') to be accessed in the [click](/api-reference/10%20UI%20Widgets/dxButton/4%20Events/click.md '/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click') event handler.

---
When using a button to validate several editors on a page, the button must "know" in which validation group these editors are located. If the Knockout or AngularJS approach is used, add the button to the **div** element that represents the target validation group. When using the jQuery approach, specify the **validationGroup** configuration option for the button. Assign the validation group name specified for the **validationGroup** option of the [validators](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator/') that extend the editors to be validated. 

#####See Also#####
- [Validate Groups](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Validation/20%20Validate%20Editor%20Values.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Validation/#Validate_Editor_Values')
- [Validate Groups - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/25%20Validation%20-%20MVVM%20Approach/20%20Validate%20Editor%20Values.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Validation_-_MVVM_Approach/#Validate_Editor_Values')