The editors that are associated with the **Validator** widget are automatically validated on the event specified by their **valueChangeEvent** option. You can also validate several editors at once. For this purpose, there are validation methods that validate a *validation group*. So, you should associate editors with validation groups.

![Validation Group](/images/Common/ValidationGroup.png)

###Define Validation Groups###

[note]Nested validation groups are not supported.

Add the editors that should be validated together to the **div** element of the [ValidationGroup](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/') widget.

[note]If the editors that belong to a single view or application model should be validated together, you do not have to introduce a validation group for them. Editors from one view or application that are not associated with a validation group explicitly are combined to a **default validation group**.

#####AngularJS#####

    <!--HTML--><div id="sampleGroup" dx-validation-group="{}">
        <div dx-text-box="{ value: login, placeholder: 'Login' }",
             dx-validator="{ validationRules: [{
                    type: 'required'
                }, {
                    type: 'pattern',
                    pattern: '^[a-zA-Z]+$',
                    message: 'Do not use digits.'
                }] }">   
        </div>
        <div dx-text-box="{ value: password, mode: 'password' }",
             dx-validator="{ validationRules: [{
                type: 'required,
                message: 'Password is required'
            }] }">   
        </div>
    </div>

#####Knockout#####

    <!--HTML--><div id="sampleGroup" data-bind="dxValidationGroup : {}" >
        <div data-bind="dxTextBox: { value: login, placeholder: 'Login' },
            dxValidator: { validationRules: [{
                type: 'required'
            }, {
                type: 'pattern',
                pattern: '^[a-zA-Z]+$',
                message: 'Do not use digits.'
            }] }"> 
        </div> 
        <div data-bind="dxTextBox: { value: password, mode: 'password' },
            dxValidator: { validationRules: [{
                type: 'required',
                message: 'Password is required'
            }] }"> 
        </div>  
    </div>


###Validate Groups###

To validate a group, use one of the following approaches.

- **At a button's click event**  
    Associate a [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widget with the required validation group. In this instance, the associated group will come in the **validationGroup** field of the parameter passed to a button's [click](/api-reference/10%20UI%20Widgets/dxButton/4%20Events/click.md '/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click') event handler. Call the [validate()](/api-reference/10%20UI%20Widgets/dxValidationGroup/3%20Methods/validate().md '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/Methods/#validate') method of the button's validation group.

    To associate the **Button** widget with a validation group, create the [ValidationGroup](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/') widget and add the **Button** widget inside of the element representing the validation group.

    [note]If you are going to use a button to validate the view or application model's validation group, do not associate the button with a validation group. The validation group will come in the parameter object of the **click** event handler.

    #####AngularJS#####

        <!--HTML--><div id="sampleGroup" dx-validation-group="{}">
            <div dx-text-box="{ value: login, placeholder: 'Login' }",
                 dx-validator="{ validationRules: [{
                        type: 'required'
                    }, {
                        type: 'pattern',
                        pattern: '^[a-zA-Z]+$',
                        message: 'Do not use digits.'
                    }] }">   
            </div>
            <div dx-text-box="{ value: password, mode: 'password' }",
                 dx-validator="{ validationRules: [{
                    type: 'required',
                    message: 'Password is required'
                }] }">   
            </div>
            <div dx-button="{ text: 'Validate and submit', onClick: validateAndSubmit }"></div>
        </div>

        <!--JavaScript-->function Controller($scope) {
            $scope.login = '';
            $scope.password = '';
            $scope.validateAndSubmit = function(params) {
                var result = params.validationGroup.validate($scope);
                if (result.isValid) {
                    DevExpress.ui.notify({
                        message: "You are registered",
                        position: {
                            my: "left top",
                            at: "left top",
                            offset: 15
                        }
                    }, "success", 3000);
                }
            }
        }

    #####Knockout#####

        <!--HTML--><div id="sampleGroup" data-bind="dxValidationGroup : {}" >
            <div data-bind="dxTextBox: { value: login, placeholder: 'Login' },
                dxValidator: { validationRules: [{
                    type: 'required'
                }, {
                    type: 'pattern',
                    pattern: '^[a-zA-Z]+$',
                    message: 'Do not use digits.'
                }] }">  
            </div>
            <div data-bind="dxTextBox: { value: password, mode: 'password' },
                dxValidator: { validationRules: [{
                    type: 'required',
                    message: 'Password is required'
                }] }"> 
            </div>  
            <div data-bind="dxButton: { text: 'Validate and submit', onClick: validateAndSubmit }"></div>
        </div>

        <!--JavaScript-->var viewModel = {
            login: ko.observable(""),
            password: ko.observable(""),
            validateAndSubmit: function(params) {
                var result = params.validationGroup.validate();                
                if (result.isValid) {
                    DevExpress.ui.notify({
                        message: "You are registered",
                        position: {
                            my: "left top",
                            at: "left top",
                            offset: 15
                        }
                    }, "success", 3000);
                }
            }
        };
        ko.applyBindings(viewModel);

- **At any place**  
    Call the [DevExpress.validationEngine.validateGroup(group)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/validateGroup(group).md '/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#validateGroupgroup') method passing the required validation group as a parameter.

        <!--JavaScript-->
		DevExpress.validationEngine.validateGroup($("#sampleGroup").dxValidationGroup("instance"));

[note]To validate the **default validation group**, call the **DevExpress.validationEngine.validateGroup()** method without parameters.

Whenever you force validation for a group when an editor value has not changed since the last validation, validation will not be performed repeatedly for this editor. For example, if an editor value has not changed since it was validated on a value change, it will not be validated on a button click when a validation group is validated. However, some rules have the **reevaluate** option, which allows you to change this behavior and check the required rules no matter the target value changed.