To change the [Form configuration](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/') at runtime, call the [option(optionName, optionValue)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#optionoptionName_optionValue') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    $(function() {
        var form = $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            }
        }).dxForm("instance");

        $("#checkBoxContainer").dxCheckBox({
            text: 'Disable the Form',
            value: false,
            onValueChanged: function (e) {
                form.option("disabled", e.value);
            }
        });
    });

With Angular, Vue, or React, bind the option that should be changed to a component property.

---

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [disabled]="disableForm.value">
    </dx-form>
    <dx-check-box #disableForm
        text="Disable the Form"
        [value]="false">
    </dx-check-box>

    <!--TypeScript-->
    import { DxFormModule, DxCheckBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            phone: "+1(213) 555-9392",
            email: "jheart@dx-email.com"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule,
            DxCheckBoxModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxForm
                :form-data="employee"
                :disabled="isFormDisabled" />
            <DxCheckBox
                text="Disable the Form"
                v-model:value="isFormDisabled" />
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm } from 'devextreme-vue/form';
    import { DxCheckBox } from 'devextreme-vue/check-box';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxCheckBox
        },
        data() {
            return {
                employee,
                isFormDisabled: false
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Form } from 'devextreme-react/form';
    import { CheckBox } from 'devextreme-react/check-box';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                isFormDisabled: false
            };
            this.onCheckBoxValueChanged = this.onCheckBoxValueChanged.bind(this);
        };

        render() {
            return (
                <div>
                    <Form
                        formData={employee}
                        disabled={this.state.isFormDisabled} />
                    <CheckBox
                        text="Disable the Form"
                        value={this.state.isFormDisabled}
                        onValueChanged={this.onCheckBoxValueChanged} />
                </div>
            );
        }

        onCheckBoxValueChanged(e) {
            this.setState({
                isFormDisabled: e.value
            });
        }
    }

    export default App;

---

#####See Also#####
- [Get and Set Options - jQuery](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/05%20Get%20and%20Set%20Options/00%20Get%20and%20Set%20Options.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_and_Set_Options')
- **Change Options**: [Angular](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Option%20Binding.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding') | [AngularJS](/concepts/Getting%20Started/Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/') | [Knockout](/concepts/Getting%20Started/Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')

[tags]form, widget options, change option
