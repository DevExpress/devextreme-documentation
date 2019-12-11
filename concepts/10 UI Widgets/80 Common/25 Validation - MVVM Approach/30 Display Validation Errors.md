The DevExtreme Validation comes with an integrated UI part. First, each editor is highlighted to indicate that it has an invalid value when a validation rule is not satisfied during validation.

![Validated Editors](/images/Common/ValidatedEditors.png)

Second, a summary on all the validation rules that are not satisfied in a validation group is displayed by the [ValidationSummary](/api-reference/10%20UI%20Widgets/dxValidationSummary '/Documentation/ApiReference/UI_Widgets/dxValidationSummary/') widget. This widget has an item collection that is populated each time a validation error occurs in the validation group with which the widget is associated. The summary items are displayed using the default item template that is based on the messages specified for the failed validation rules. You can use a [custom item template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance'), as in any collection widget in DevExtreme.

![Validation Summary](/images/Common/ValidationSummary.png)

<article data-show="Content/Applications/16_1/UIWidgets/Validation/DisplayValidationErrors/markup.html,
        Content/Applications/16_1/UIWidgets/Validation/DisplayValidationErrors/script.js">

To associate the **ValidationSummary** widget with a validation group, add the **ValidationSummary** widget inside of the element representing the [ValidationGroup](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/') widget.

[note]You do not have to associate the **ValidationSummary** widget with a validation group, if you are going to display errors occurring in the editors that belong to the view or application to which the **ValidationSummary** widget is related.

#####AngularJS Approach#####

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
        <div dx-validation-summary="{ }"></div>
        <div dx-button="{ text: 'Validate and submit', onClick: validateAndSubmit }"></div>
    </div>

#####Knockout Approach#####

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
        <div data-bind="dxValidationSummary: { }"></div>
        <div data-bind="dxButton: { text: 'Validate and submit', onClick: validateAndSubmit }"></div>
    </div>

</article>