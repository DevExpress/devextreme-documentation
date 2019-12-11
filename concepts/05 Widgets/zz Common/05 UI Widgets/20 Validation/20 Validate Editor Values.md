The editors that are associated with the **Validator** widget are automatically validated on the event specified by their **valueChangeEvent** option. You can also validate several editors at once. For this purpose, there are validation methods that validate a *validation group*. So, you should associate editors with validation groups.

![Validation Group](/images/Common/ValidationGroup.png)

###Define Validation Groups###

[note]Nested validation groups are not supported.

Specify the [validationGroup](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationGroup') option of an editor's validator.

    <!--HTML--><div>Login:</div>
    <div id="login"></div>
    <div>Password:</div>
    <div id="password"></div>

    <!--JavaScript-->$(function() {
        var validationGroup = "sampleGroup";
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
            }],
            validationGroup: validationGroup
        });
        $("#password").dxTextBox({
            mode: 'password'
        }).dxValidator({
            validationRules: [{
                type: 'required',
                message: 'Password is required'
            }],
            validationGroup: validationGroup
        });
    });

[note]You do not have to combine editors into a single validation group, because the editors that are not associated with a validation group explicitly are combined to a **default validation group**.

###Validate Groups###

To validate a group, use one of the following approaches.

- **At a button's click event**  
    Associate a [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widget with the required validation group. In this instance, the associated group will come in the **validationGroup** field of the parameter passed to a button's [click](/api-reference/10%20UI%20Widgets/dxButton/4%20Events/click.md '/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click') event handler. Call the [validate()](/api-reference/10%20UI%20Widgets/dxValidationGroup/3%20Methods/validate().md '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/Methods/#validate') method of the button's validation group.

    To associate the **Button** widget with a validation group, use the widget's [validationGroup](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup') configuration option.

        <!--HTML--><div id="loginButton"></div>

        <!--JavaScript-->var validationGroup = "sampleGroup";
        //...
        $("#loginButton").dxButton({
            text: "Login",
            validationGroup: validationGroup,
            onClick: function(params) {
                var result = params.validationGroup.validate();
                if (result.isValid) {
                    DevExpress.ui.notify({
                        message: "You are logged in jQuery as " + $("#login").dxTextBox("instance").option("value"),
                        position: {
                            at: "right top",
                            my: "right top"
                        }
                    }, "success", 3000);
                }
            }
        });

    [note]If you are going to use a button to validate the **default validation group**, do not associate the button with a validation group. The **default validation group** will come in the parameter object of the **click** event handler.

- **At any place**  
    Call the [DevExpress.validationEngine.validateGroup(group)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/validateGroup(group).md '/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#validateGroupgroup') method passing the required validation group as a parameter.

        <!--JavaScript-->
        DevExpress.validationEngine.validateGroup("sampleGroup");


[note]To validate the **default validation group**, call the **DevExpress.validationEngine.validateGroup()** method without parameters.

Whenever you force validation for a group when an editor value has not changed since the last validation, validation will not be performed repeatedly for this editor. For example, if an editor value has not changed since it was validated on a value change, it will not be validated on a button click when a validation group is validated. However, some rules have the **reevaluate** option, which allows you to change this behavior and check the required rules no matter the target value changed.