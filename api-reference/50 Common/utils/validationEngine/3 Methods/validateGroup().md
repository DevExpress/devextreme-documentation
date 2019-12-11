---
##### shortDescription
Validates editors from the default validation group.

##### return: Object
The validation result.

---
Use this method to validate the editors from the default validation group that combines the editors created by the [jQuery Approach](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/') and for which the **validationGroup** option is not specified.

#include uiwidgets-ref-validate-result

To validate editors belonging to the default validation group and created using the **Knockout Approach**, call the [validateGroup(group)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/validateGroup(group).md '/Documentation/ApiReference/Common/utils/validationEngine/Methods/#validateGroupgroup') method passing the view model as a parameter.

To validate editors belonging to the default validation group that are also created using the **AngularJS Approach**, call the [validateGroup(group)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/validateGroup(group).md '/Documentation/ApiReference/Common/utils/validationEngine/Methods/#validateGroupgroup') method passing the **$scope** object as a parameter.

#####See Also####
- [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules')