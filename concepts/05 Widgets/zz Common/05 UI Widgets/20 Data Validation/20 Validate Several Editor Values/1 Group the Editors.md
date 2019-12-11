Editors belonging to a single **Validation Group** can be validated together. All editors on a page are automatically collected in a **Default Validation Group**, which is suitable when you do not need to validate collections of editors separately. In other cases, define **Validation Groups** as shown in the following code:

---

##### jQuery

    <!--JavaScript-->$(function () {
        var loginGroup = "loginGroup";
        $("#login")
            .dxTextBox({ /* ... */ })
            .dxValidator({
                // ...
                validationGroup: loginGroup
            }); 
        $("#password")
            .dxTextBox({ /* ... */ })
            .dxValidator({
                // ...
                validationGroup: loginGroup
            });
    });

    <!--HTML-->
    <div id="login"></div>
    <div id="password"></div>

##### Angular

    <!--HTML-->
    <dx-validation-group id="loginGroup">
        <dx-text-box [(value)]="login" ... >
            <dx-validator ... ></dx-validator>
        </dx-text-box>
        <dx-text-box [(value)]="password" ... >
            <dx-validator ... ></dx-validator>
        </dx-text-box>
    </dx-validation-group>

    <!--TypeScript-->
    import { DxTextBoxModule, DxValidatorModule, DxValidationGroupModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule,
            DxValidatorModule,
            DxValidationGroupModule 
        ],
        // ...
    })

##### AngularJS

    <!--HTML-->
    <div id="loginGroup" dx-validation-group="{ }">
        <div dx-text-box="{ value: login, ... }",
            dx-validator="{ ... }">
        </div>
        <div dx-text-box="{ value: password, ... }",
            dx-validator="{ ... }">   
        </div>
    </div>

##### Knockout

    <!--HTML-->
    <div id="loginGroup" data-bind="dxValidationGroup: { }">
        <div data-bind="dxTextBox: { value: login, ... },
            dxValidator: { ... }">
        </div>
        <div data-bind="dxTextBox: { value: password, ... },
            dxValidator: { ... }">   
        </div>
    </div>

---
