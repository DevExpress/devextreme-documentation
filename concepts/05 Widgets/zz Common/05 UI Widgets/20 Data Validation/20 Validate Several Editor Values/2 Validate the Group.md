You can validate any group by calling its [validate()](/api-reference/10%20UI%20Widgets/dxValidator/3%20Methods/validate().md '/Documentation/ApiReference/UI_Widgets/dxValidator/Methods/#validate') method in a [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/')'s [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') event handler. You can access the **Validation Group** via the handler's argument. The **Button** always validates the group to which it belongs. If the membership is not specified, the **Button** validates the **Default Validation Group**.

---

##### jQuery

    <!--JavaScript-->$(function () {
        // var loginGroup = "loginGroup";
        $("#login")
            .dxTextBox({ /* ... */ })
            .dxValidator({
                // validationGroup: loginGroup,
                validationRules: [ /* ... */ ]
            });
        $("#password")
            .dxTextBox({ /* ... */ })
            .dxValidator({
                // validationGroup: loginGroup,
                validationRules: [ /* ... */ ]
            });
        $("#loginButton").dxButton({
            text: "Login",
            // validationGroup: loginGroup
            onClick: function (e) {
                var result = e.validationGroup.validate();
                if (result.isValid) {
                    // ...
                }
            }
        });
    });

    <!--HTML-->
    <div id="login"></div>
    <div id="password"></div>
    <div id="loginButton"></div>

##### Angular

    <!--HTML-->
    <!-- dx-validation-group id="loginGroup" -->
        <dx-text-box [(value)]="login" ... >
            <dx-validator [validationRules]="..."></dx-validator>
        </dx-text-box>
        <dx-text-box [(value)]="password" ... >
            <dx-validator [validationRules]="..."></dx-validator>
        </dx-text-box>
        <dx-button text="Login" (onClick)="loginClick($event)"></dx-button>
    <!-- /dx-validation-group -->


    <!--TypeScript-->
    import { DxTextBoxModule, DxValidatorModule, /* DxValidationGroupModule */ } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
        loginClick: function (e) {
            var result = e.validationGroup.validate();
            if (result.isValid) {
                // ...
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule,
            DxValidatorModule,
            // DxValidationGroupModule
        ],
        // ...
    })

##### AngularJS

    <!--HTML-->
    <!-- div id="loginGroup" dx-validation-group="{ }" -->
        <div dx-text-box="{ value: login, ... }",
            dx-validator="{
                validationRules: [ ... ]
            }">
        </div>
        <div dx-text-box="{ value: password, ... }",
            dx-validator="{ 
                validationRules: [ ... ]
            }">   
        </div>
        <div dx-button="{ text: 'Login', onClick: loginClick }"></div>
    <!-- /div -->

    <!--JavaScript-->
    function Controller($scope) {
        // ...
        $scope.loginClick = function (e) {
            var result = e.validationGroup.validate();
            if (result.isValid) {
                // ...
            }
        };
    }

##### Knockout

    <!--HTML-->
    <!-- div id="loginGroup" data-bind="dxValidationGroup: { }" -->
        <div data-bind="dxTextBox: { value: login, ... },
            dxValidator: { 
                validationRules: [ ... ]
            }">
        </div>
        <div data-bind="dxTextBox: { value: password, ... },
            dxValidator: { 
                validationRules: [ ... ]
            }">   
        </div>
        <div data-bind="dxButton: { text: 'Login', onClick: loginClick }></div>
    <!-- /div -->

    <!--JavaScript-->
    var viewModel = {
        // ...
        loginClick: function (e) {
            var result = e.validationGroup.validate();
            if (result.isValid) {
                // ...
            }
        }
    };
    ko.applyBindings(viewModel);

---

Alternatively, you can validate a group using the [DevExpress.validationEngine.validateGroup](/api-reference/50%20Common/utils/validationEngine/3%20Methods/validateGroup().md '/Documentation/ApiReference/Common/utils/validationEngine/Methods/#validateGroup') method. Call it without arguments to validate the **Default Validation Group**:

    <!--JavaScript-->DevExpress.validationEngine.validateGroup();

... or pass the group instance to validate a named group:

    <!--JavaScript-->DevExpress.validationEngine.validateGroup($("#loginGroup").dxValidationGroup("instance"));

Pass the group name instead of the instance if you have created widgets using jQuery.  

    <!--JavaScript-->DevExpress.validationEngine.validateGroup("loginGroup");
