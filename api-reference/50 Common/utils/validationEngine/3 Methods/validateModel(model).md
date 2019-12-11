---
##### shortDescription
Validates a view model.

##### param(model): Object
The ViewModel object that has fields extended by the **dxValidator** objects.

##### return: Object
The validation result.

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

#include uiwidgets-ref-validate-result