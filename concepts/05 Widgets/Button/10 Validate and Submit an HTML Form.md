Commonly, editors nested into an HTML form are supposed to be validated on the client and then submitted to the server. The **Button** widget supports this scenario out of the box. Place the **Button** on the HTML form and set the [useSubmitBehavior](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/useSubmitBehavior.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#useSubmitBehavior') option to **true**.

---
##### jQuery

    <!--HTML-->
    <form action="/Login" method="post">
        <div id="login"></div>
        <div id="password"></div>
        <div id="validateAndSubmit"></div>
    </form>

    <!--JavaScript-->$(function() {
        $("#login").dxTextBox({
            name: "Login"
        }).dxValidator({
            validationRules: [
                { type: "required" }
            ]
        });
    
        $("#password").dxTextBox({
            name: "Password",
            mode: "password"
        }).dxValidator({
            validationRules: [
                { type: "required" }
            ]
        });
    
        $("#validateAndSubmit").dxButton({
            text: "Submit",
            type: "success",
            useSubmitBehavior: true
        });
    });

##### Angular

    <!--HTML-->
    <form action="/Login" method="post">
        <dx-text-box name="Login">
            <dx-validator>
                <dxi-validation-rule type="required"></dxi-validation-rule>
            </dx-validator>
        </dx-text-box>
        <dx-text-box name="Password" mode="password">
            <dx-validator>
                <dxi-validation-rule type="required"></dxi-validation-rule>
            </dx-validator>
        </dx-text-box>
        <dx-button
            text="Submit"
            type="success"
            [useSubmitBehavior]="true">
        </dx-button>
    </form>

    <!--TypeScript-->
    import { DxTextBoxModule, DxValidatorModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule,
            DxValidatorModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <form action="/Login" method="post">
            <dx-text-box name="Login">
                <dx-validator>
                    <dx-validation-rule type="required" />
                </dx-validator>
            </dx-text-box>
            <dx-text-box name="Password" mode="password">
                <dx-validator>
                    <dx-validation-rule type="required" />
                </dx-validator>
            </dx-text-box>
            <dx-button
                text="Submit"
                type="success"
                :use-submit-behavior="true" />
        </form>
    </template>
    <script>
    import DxTextBox from "devextreme-vue/text-box";
    import DxValidator, { DxValidationRule } from "devextreme-vue/validator";
    import DxButton from "devextreme-vue/button";

    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxValidationRule,
            DxButton
        }
    }
    </script>

##### React

    import React from 'react';
    import { Button } from 'devextreme-react/button';
    import { TextBox } from 'devextreme-react/text-box';
    import { Validator, RequiredRule } from 'devextreme-react/validator';

    class App extends React.Component {
        render() {
            return (
                <form action="/Login" method="post">
                    <TextBox name="Login">
                        <Validator>
                            <RequiredRule />
                        </Validator>
                    </TextBox>
                    <TextBox name="Password" mode="password">
                        <Validator>
                            <RequiredRule />
                        </Validator>
                    </TextBox>
                    <Button
                        text="Submit"
                        type="success"
                        useSubmitBehavior={true}
                    />
                </form>
            );
        }
    }

    export default App;

---

Note that the [name](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#name') option of the **TextBox** widgets in the previous code specifies the <a href="http://www.w3schools.com/tags/att_input_name.asp" target="_blank">name</a> attribute of the underlying `<input>` element.

DevExtreme editors may belong to different [validation groups](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/'). To specify which group the **Button** must validate, use the [validationGroup](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup') option. If you do not set this option, the **Button** validates all editors whose validation group is not specified.

[note]Although the **Button** may validate different validation groups, it always submits a definite HTML form - the one in which it is nested. To avoid mixing up validated and submitted values, we recommend that a single HTML form contain only a single validation group.

#####See Also#####
- <a href="https://docs.devexpress.com/AspNetCore/400576/devextreme-based-controls/concepts/data-validation#validate-and-submit-an-html-form" target="_blank">ASP.NET MVC Controls - Validate and Submit an HTML Form</a>
- [Form - Validate and Submit](/concepts/05%20Widgets/Form/40%20Validate%20and%20Submit%20the%20Form.md '/Documentation/Guide/Widgets/Form/Validate_and_Submit_the_Form/')
- [Button Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons)
- [Button API Reference](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/')

[tags]button, validate a form, submit a form, submit editors