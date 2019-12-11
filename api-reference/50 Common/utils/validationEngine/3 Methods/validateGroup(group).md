---
##### shortDescription
Validates editors from a specific validation group.

##### param(group): String|Object
The validation group's key.

##### return: Object
The validation result.

---
A validation group's key can be represented in the following manner.

- A **ValidationGroup** instance  
 If it is not accessible in the current context in code, access it in the following manner.

        <!--JavaScript-->$("#myGroup").dxValidationGroup("instance")

- A string name  
 When you use the jQuery approach for validation, a validation group is usually a string because it is the simplest way to unite several widgets in one group - by setting the same group name for the **validationGroup** configuration option of the associated **dxValidator** objects. In this and other similar cases, where you specify a validation group as a string, pass the validation group name as a parameter to the **validateGroup(group)** function.

#include uiwidgets-ref-validate-result

#####See Also#####
- [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules')