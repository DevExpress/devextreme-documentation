---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether the editor's value is valid.

---
In **Knockout** apps, you may need to inform a user about an error that occurred during the validation of a view model field. For this purpose, set the editor's **isValid** option to the **isValid** value of the **dxValidator** that validates this field. To show an error message, set the editor's **validationError** option to the **dxValidator**'s **validationError** value.

    <!--JavaScript-->
    var editorValue = ko.observable("").extend({
        dxValidator: {
            validationRules: [{
                type: 'required',
                message: 'Specify this value'
            }]
        }
    });
    var viewModel = {
        editorOptions: {
            value: editorValue,
            isValid: editorValue.dxValidator.isValid,
            validationError: editorValue.dxValidator.validationError
        }
    };
    
The editor's **isValid** and **validationError** options should also be specified when using a custom validation engine. In this instance, the validation result will be displayed for the editor by the means of the DevExtreme Validation UI. 

#####See Also#####
- [Knockout Only - Validate a View Model](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/80%20Knockout%20Only%20-%20Validate%20a%20View%20Model.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Knockout_Only_-_Validate_a_View_Model')
- [Use a Custom Validation Engine](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/70%20Use%20a%20Custom%20Validation%20Engine.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Use_a_Custom_Validation_Engine')