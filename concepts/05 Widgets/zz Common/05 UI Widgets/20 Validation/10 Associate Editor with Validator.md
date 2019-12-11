To validate an editor value, associate the UI editor with the **Validator** widget. The first approach is universal and will be described in this topic below. 

To validate a DevExtreme editor, the latter should be associated with the [Validator](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator/') widget.

![Editor-Validator Association](/images/Common/Editor_Validator_Association.png)

The **Validator** widget validates the editor's value against a predefined set of rules. To define the rules to be checked, assign an array of rules to the validator's [validationRules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules') configuration option.

    <!--JavaScript-->dxValidator({
        validationRules: [
            {
                type: 'required',
                message: 'login is required'
            }, {
                type: 'pattern',
                pattern: '^[a-zA-Z]+$',
                message: 'Do not use digits.'
            }
        ]
    });

As you can see, validation rules have the **type**, **message** and type-specific fields. The **type** field specifies the rule type, the **message** field specifies the message to be displayed if a rule is not satisfied. Rule type specific fields are required to specify additional conditions for validation. You can see a full structure of each predefined rule type in the [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') Reference section.

[note]The **message** rule field is not required to be specified. There are default messages for each rule type. Moreover, you can personalize the default messages by setting the name of the validated editor for the validator's [name](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#name') configuration option.

To associate an editor with a validator, extend the editor with the **Validator** widget.

    <!--HTML--><div>Login:</div>
    <div id="login"></div>

    <!--JavaScript-->$(function() {
        $("#login").dxTextBox({
            value: null,
            placeholder: 'Login'
        }).dxValidator({
            validationRules: [{
                type: 'required'
            }, {
                type: 'pattern',
                pattern: '^[a-zA-Z]+$',
                message: 'Do not use digits.'
            }]
        });
    });