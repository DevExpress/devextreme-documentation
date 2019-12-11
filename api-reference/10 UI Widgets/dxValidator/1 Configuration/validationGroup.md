---
type: string
---
---
##### shortDescription
Specifies the validation group the editor will be related to.

---
Generally, the editors that are associated with dxValidator objects are validated on each value change. But you can combine several editors into a group so that they are validated together (e.g., on a button click). In the Knockout or AngularJS approach, editors should be added to the **div** element representing the [ValidationGroup](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/') component. In this instance, you do not have to specify the **validationGroup** option for the associated **dxValidator** objects.

If you use the JQuery approach, the **validationGroup** option should be specified for the associated **dxValidator** object to indicate the validation group within which the editor will be validated. Assign the same validation group name for those editors that should be validated together.

#####See Also#####
- [Validate Groups](/concepts/10%20UI%20Widgets/80%20Common/20%20Validation/20%20Validate%20Editor%20Values.md '/Documentation/Guide/UI_Widgets/Common/Validation/#Validate_Editor_Values')
- [Validate Groups - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/25%20Validation%20-%20MVVM%20Approach/20%20Validate%20Editor%20Values.md '/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/#Validate_Editor_Values')