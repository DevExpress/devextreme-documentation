---
default: undefined
type: object
---
---
##### shortDescription
Holds the object that defines the error that occurred during validation.

---
[note]This option can be overwritten while internal validation of the widget or external validators. To prevent this, set the **validationError** and the [isValid](/api-reference/10%20UI%20Widgets/Editor/1%20Configuration/isValid.md '/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#isValid') option at the same time. 

In **Knockout approach**, you may need to use an editor to inform end users that an error occurred during the validation of a ViewModel field. In this instance, set the editor's **isValid** option to the **isValid** property value of the dxValidator that validated the ViewModel's field. In addition, set the editor's **validationError** option to the **validationError** property value of the dxValidator object.

In the code, the login specified by an end user is validated on the level of the ViewModel. If validation of the login value fails, a validation message is displayed on the Login editor.

	<!--HTML--><div data-bind="dxTextBox: {
		value: login,
		isValid: login.dxValidator.isValid,
		validationError: login.dxValidator.validationError,
		placeholder: 'Login'
	}"></div>

<!--...-->

	<!--JavaScript-->var viewModel = {
		login: ko.observable("").extend({
			dxValidator: {
				validationRules: [{ type: 'required', message: 'Login is required' }]
			}
		}),
		//...
	}

The editor's **validationError** option, as well as the **isValid** option, should also be specified when using a custom validation engine. In this instance, the validation result will be displayed for the editor by the means of the DevExtreme Validation UI. For details, refer to the [Use Custom Validation Engine](/concepts/10%20UI%20Widgets/80%20Common/20%20Validation/70%20Use%20Custom%20Validation%20Engine.md '/Documentation/Guide/UI_Widgets/Common/Validation/#Use_Custom_Validation_Engine') topic.