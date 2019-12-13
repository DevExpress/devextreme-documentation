---
id: validationEngine.registerModelForValidation(model)
---
---
##### shortDescription
Registers all the [Validator](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator/') objects extending fields of the specified ViewModel.

##### param(model): Object
The ViewModel object has fields extended by the **dxValidator** objects.

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

To register the rules that are defined within the **dxValidator** objects, call the **DevExpress.validationEngine.registerModelForValidation(model)** function passing the ViewModel object as a parameter.

    <!--JavaScript-->DevExpress.validationEngine.registerModelForValidation(viewModel);

To validate the rules that are defined within the **dxValidator** objects, call the [DevExpress.validationEngine.validateModel(model)](/api-reference/50%20Common/utils/validationEngine/validateModel(model).md '/Documentation/ApiReference/Common/utils/validationEngine/#validateModelmodel') function passing the ViewModel object as a parameter.