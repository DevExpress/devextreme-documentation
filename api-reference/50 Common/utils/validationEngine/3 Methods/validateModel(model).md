---
##### shortDescription
Validates the rules that are defined within the **dxValidator** objects that are registered for the specified ViewModel.

##### param(model): Object
The ViewModel object that has fields extended by the **dxValidator** objects.

##### return: Object
An object defining the result of validating the specified ViewModel.

---
To specify validation rules for ViewModel fields, extend the latter with the **dxValidator** object.

	<!--JavaScript-->var viewModel = {
		login: ko.observable("").extend({
			dxValidator: {
				validationRules: [{ type: 'required', message: 'We need your credentials' }]
			}
		}),
		//...
	}

To register the rules that are defined within the **dxValidator** objects, call the [DevExpress.validationEngine.registerModelForValidation(model)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/registerModelForValidation(model).md '/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#registerModelForValidationmodel') function passing the ViewModel object as a parameter.

	<!--JavaScript-->DevExpress.validationEngine.registerModelForValidation(viewModel);

To validate the rules that are defined within the **dxValidator** objects, call the **DevExpress.validationEngine.validateModel(model)** function passing the ViewModel object as a parameter.

	<!--JavaScript-->DevExpress.validationEngine.registerModelForValidation(viewModel);

The object returned by this function has the following structure.

- **isValid**  
	Indicates whether all the rules checked for the specified ViewModel are satisfied.
- **brokenRules**  
	An array of broken rules. The structure of rule objects is described in the [validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section.
- **validators**  
	An array of **Validator** widgets that are included to the validated ViewModel.