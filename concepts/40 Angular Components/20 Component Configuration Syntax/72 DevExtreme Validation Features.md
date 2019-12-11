In the following example, two textboxes are placed in a [validation group](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/') that is validated on a button click. Each textbox has a set of [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/'). The validation result is displayed under the textboxes in a [validation summary](/api-reference/10%20UI%20Widgets/dxValidationSummary '/Documentation/ApiReference/UI_Widgets/dxValidationSummary/').

    <!-- tab: app.component.html -->
    <dx-validation-group>
        <dx-text-box [(value)]="email">
            <dx-validator>
                <dxi-validation-rule type="required" message="Email is required"></dxi-validation-rule>
                <dxi-validation-rule type="email" message="Email is invalid"></dxi-validation-rule>
            </dx-validator>
        </dx-text-box>

        <dx-text-box [(value)]="password" mode="password">
            <dx-validator>
                <dxi-validation-rule type="required" message="Password is required"></dxi-validation-rule>
            </dx-validator>
        </dx-text-box>

        <dx-validation-summary></dx-validation-summary>

        <dx-button (onClick)="validate($event)" text="Submit"></dx-button>
    </dx-validation-group>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        email: string;
        password: string;
        validate(params) {
            let result = params.validationGroup.validate();
            if (result.isValid) {
                // the values are valid
                // submit and reset them
                // params.validationGroup.reset();
            }
        }
    }

    <!-- tab: app.module.ts -->
    // ...
    import {
        DxTextBoxModule,
        DxValidatorModule,
        DxValidationSummaryModule,
        DxValidationGroupModule,
        DxButtonModule
    } from 'devextreme-angular';

    @NgModule({
        // ...
        imports: [
            // ...
            DxTextBoxModule,
            DxValidatorModule,
            DxValidationSummaryModule,
            DxValidationGroupModule,
            DxButtonModule
        ]
    })
    export class AppModule { }

Refer to the [Data Validation](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/') article for more information.