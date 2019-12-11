---
##### shortDescription
Validates the value of the editor that is controlled by the current **dxValidator** object against the list of the specified [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules').

##### return: Object
An object defining the validation result.

---
The object returned by the **validate()** function has the following structure.

- **isValid**  
    Indicates whether all the rules checked for the validator are satisfied.
- **brokenRule**  
    The broken rule. The structure of the rule object is described in the [validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section.
- **validator**  
    The current dxValidator widget.
- **value**  
    The current editor value.
- **validationRules**  
    An array of validation rules specified for the current validator. The structure of a rule object is described in the [validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section.