---
##### shortDescription
Validates rules of the [validators](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator/') that belong to the specified validation group.

##### param(group): String|Object
The key of the group to be validated.

##### return: Object
An object defining the result of validating the specified group.

---
A validation group's key can be represented in the following manner.

- A **ValidationGroup** instance  
 If it is not accessible in the current context in code, access it in the following manner.

        <!--JavaScript-->$("#myGroup").dxValidationGroup("instance")

- A string name  
 When you use the jQuery approach for validation, a validation group is usually a string because it is the simplest way to unite several widgets in one group - by setting the same group name for the **validationGoup** configuration option of the associated **dxValidator** objects. In this and other similar cases, where you specify a validation group as a string, pass the validation group name as a parameter to the **validateGroup(group)** function.

The object returned by the **validateGroup(group)** function has the following structure.

- **isValid**  
 Indicates whether or not all the rules checked for the specified group are satisfied.

- **brokenRules**  
 An array of broken rules. The structure of rule objects is described in the [validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section.

- **validators**  
 An array of **Validator** widgets that are included to the validated group.