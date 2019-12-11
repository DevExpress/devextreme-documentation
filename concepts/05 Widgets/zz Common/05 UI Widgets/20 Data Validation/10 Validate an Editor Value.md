Associate a DevExtreme editor with the [Validator](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator/') widget and specify [validationRules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules') to validate the editor. The full list of predefined validation rules is available in the [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') Reference section.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#login").dxTextBox({
            value: '',
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

    <!--HTML--><div>Login:</div>
    <div id="login"></div>

##### Angular

    <!--TypeScript-->
    import { DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        login: string = '';
        loginRules = [{
            type: 'required'
        }, {
            type: 'pattern',
            pattern: '^[a-zA-Z]+$',
            message: 'Do not use digits.'
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule,
            DxValidatorModule
        ],
        // ...
    })

    <!--HTML--><dx-text-box [(value)]="login" placeholder="Login">
        <dx-validator [validationRules]="loginRules"></dx-validator>
    </dx-text-box>

##### AngularJS

    <!--JavaScript-->function Controller ($scope) {
        $scope.login = '';
        $scope.loginRules = [{
            type: 'required'
        }, {
            type: 'pattern',
            pattern: '^[a-zA-Z]+$',
            message: 'Do not use digits.'
        }];
    }

    <!--HTML--><div dx-text-box="{ value: login, placeholder: 'Login' }",
        dx-validator="{ validationRules: loginRules }">   
    </div>

##### Knockout

    <!--JavaScript-->var viewModel = {
        login: ko.observable(""),
        loginRules: [{
            type: 'required'
        }, {
            type: 'pattern',
            pattern: '^[a-zA-Z]+$',
            message: 'Do not use digits.'
        }]
    };
    ko.applyBindings(viewModel);

    <!--HTML--><div data-bind="dxTextBox: { value: login, placeholder: 'Login' },
        dxValidator: { validationRules: loginRules }">
    </div>

---
