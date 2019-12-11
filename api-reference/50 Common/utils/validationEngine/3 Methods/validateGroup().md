---
##### shortDescription
Validates rules of the [validators](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator/') that belong to the default validation group.

##### return: object
An object defining the result of validating the default group.

---
Use this method to validate the editors from the default validation group that combines the editors created by the [jQuery Approach](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/') and for which the **validationGroup** option is not specified.

The object returned by the **validateGroup(group)** function has the following structure.

- **isValid**  
 Indicates whether or not all the rules checked for the specified group are satisfied.

- **brokenRules**  
 An array of broken rules. The structure of rule objects is described in the [validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section.

- **validators**  
 An array of dxValidator widgets that are included to the validated group.

To validate editors belonging to the default validation group and created using the **Knockout Approach**, call the [validateGroup(group)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/validateGroup(group).md '/Documentation/ApiReference/Common/utils/validationEngine/Methods/#validateGroupgroup') method passing the view model as a parameter.

To validate editors belonging to the default validation group that are also created using the **AngularJS Approach**, call the [validateGroup(group)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/validateGroup(group).md '/Documentation/ApiReference/Common/utils/validationEngine/Methods/#validateGroupgroup') method passing the **$scope** object as a parameter.