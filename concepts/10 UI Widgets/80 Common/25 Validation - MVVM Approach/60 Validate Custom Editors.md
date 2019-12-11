There can be scenarios when you cannot associate the **Validator** widget with an editor, because this editor is not a DevExtreme editor or a validated value is a concatenation of several DevExtreme editor values. In this instance, create the **Validator** widget and specify an adapter for it using the [adapter](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/adapter '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#adapter') configuration option. An adapter is required to "tell" the **Validator** what and when to validate, and how to apply the validation result.

By default, when you do not specify the **adapter** option, a default adapter is used. The default adapter does the following.

 - Specifies the current value of the associated editor as the **getValue** function's return value.
 - Fires the **validationRequestsCallbacks** passed to the validator when the event specified by the editor's **valueChangeEvent** is raised.
 - Sets the editor's **isValid** and **validationError** options to the values provided by the validator's validation result.
 - Sets the editor's value to *undefined*.
 - Focuses the validated editor.

#####AngularJS Approach#####

    <!--HTML-->
    <div ng-controller="demoController">
        <div dx-text-box="{ bindingOptions: { value: 'contactEmail'}, mode: 'email', placeholder: 'Email' }"></div>
        <div dx-text-box="{ bindingOptions: { value: 'contactPhone'}, placeholder: 'Phone number' }"></div>
        <div dx-validator="{ validationRules: [{ type: 'required', message: 'Specify your email or phone number!'}], adapter: phoneAndEmailAdapter }"></div>
        <div dx-validation-summary="{}"></div>
        <div dx-button="{text: 'Contact me', onClick: contactMeClick}"></div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx']);
        .controller("demoController", function ($scope) {
            var $callbacks = $.Callbacks();
            $scope.contactPhone = '';
            $scope.contactEmail = '';
            $scope.validationResultStyle = { 'border-width': '0px' };
            $scope.contactMeClick = function (p) {
                var result = p.validationGroup.validate();
                if (result.isValid) {
                    DevExpress.ui.notify({
                        message: "We will contact you when we have information for you.",
                        position: {
                            my: "right top",
                            at: "right top",
                            offset: "-10 10"
                        }
                    }, "success", 3000);
                }
            };
            $scope.phoneAndEmailAdapter = {
                getValue: function () {
                    return $scope.contactPhone + $scope.contactEmail;
                },
                applyValidationResults: function (result) {
                    $scope.validationResultStyle['border-width'] = result.isValid ? "0px" : "1px";
                },
                validationRequestsCallbacks: $callbacks
            }
        });

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxTextBox: { value: contactEmail, mode: 'email', placeholder: 'Email' }"></div>
    <div data-bind="dxTextBox: { value: contactPhone, placeholder: 'Phone number' }"></div>
    <div data-bind="dxValidator: { 
        adapter: { 
            getValue: getContactPhoneAndEmail,
            validationRequestsCallbacks: contactInfoValidationRequests,
            applyValidationResults: applyContactValidation
        },
        validationRules: [{ type: 'required', message: 'Specify your email or phone number!' }] }">
    </div>
    <div data-bind="if: showRequestContactInfo " style="color: #000971">Please, let us contact you!</div>
    <div data-bind="dxValidationSummary: { }"></div>
    <div data-bind="dxButton: { text: 'Contact me', onClick: contactMeClick }"></div>

    <!--JavaScript-->
    var viewModel = {
        contactEmail: ko.observable(""),
        contactPhone: ko.observable(""),
        showRequestContactInfo: ko.observable(false),
        contactMeClick: function (params) {
            var result = params.validationGroup.validate();
            if (result.isValid) {
                DevExpress.ui.notify({
                    message: "We will contact you when we have information for you.",
                    position: {
                        my: "right top",
                        at: "right top",
                        offset: "-10 10"
                    }
                }, "success", 3000);
            }
        },
        getContactPhoneAndEmail: function () {
            return viewModel.contactPhoneAndEmail();
        }
    };
    viewModel.contactPhoneAndEmail = ko.computed(function () {
        return this.contactEmail() + this.contactPhone();
    }, viewModel);
    viewModel.applyContactValidation = function (result) {
        viewModel.showRequestContactInfo(!result.isValid);
    };
    viewModel.contactInfoValidationRequests = $.Callbacks();
    viewModel.contactInfoChangedHandler = function () {
        viewModel.contactInfoValidationRequests.fire();
    };
    viewModel.contactPhoneAndEmail.subscribe(viewModel.contactInfoChangedHandler)
    ko.applyBindings(viewModel);
