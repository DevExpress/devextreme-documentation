---
id: dxValidator.Options.validationGroup
type: String
---
---
##### shortDescription
Specifies the validation group the editor will be related to.

---
Generally, the editors that are associated with **dxValidator** objects are validated on each value change. But you can combine several editors into a group so that they are validated together (e.g., on a button click). In the Knockout or AngularJS approach, editors should be added to the **div** element representing the [ValidationGroup](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Components/dxValidationGroup/') component. In this instance, you do not have to specify the **validationGroup** property for the associated **dxValidator** objects.

If you use the JQuery approach, the **validationGroup** property should be specified for the associated **dxValidator** object to indicate the validation group within which the editor will be validated. Assign the same validation group name for those editors that should be validated together.

#####See Also#####
- [Validate Several Editor Values](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/20%20Validate%20Several%20Editor%20Values '/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/#Validate_Several_Editor_Values')