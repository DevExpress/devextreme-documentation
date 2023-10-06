
---
##### jQuery

To change the [Form configuration](/api-reference/10%20UI%20Components/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/') at runtime, call the [option(optionName, optionValue)](/api-reference/10%20UI%20Components/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#optionoptionName_optionValue') method.

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

##### Angular

To change the [Form configuration](/api-reference/10%20UI%20Components/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/') at runtime, bind the property that should be changed to a component property:

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

To change the [Form configuration](/api-reference/10%20UI%20Components/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/') at runtime, bind the property that should be changed to a component property:

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

To change the [Form configuration](/api-reference/10%20UI%20Components/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/') at runtime, bind the property that should be changed to a state property:

    <!-- tab: App.js -->
    import React from 'react';

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
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields)
- [Form API Reference](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/')

[tags]form, UI component properties, change property
