
---
##### jQuery

To change the properties of an editor, get its instance using the [getEditor(dataField)](/api-reference/10%20UI%20Components/dxForm/3%20Methods/getEditor(dataField).md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#getEditordataField') method. Then, call the **option(optionName, optionValue)** or **option(optionName, options)** method of this instance.

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
            text: 'Disable the First Name Editor',
            value: false,
            onValueChanged: function (e) {
                form.getEditor("firstName")
                    .option("disabled", e.value);
            }
        });
    });

[note]The **getEditor(dataField)** method is available for visible form items only.

If you need to preserve changes during Form re-rendering, change editor properties at the item level:

    <!--JavaScript-->
    $(function() {
        const form = $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            }
        }).dxForm("instance");

         $("#checkBoxContainer").dxCheckBox({
            text: 'Disable the First Name Editor',
            value: false,
            onValueChanged: function (e) {
                const options = {};
                options.disabled = e.value;
                const prevOptions = form.itemOption("firstName").editorOptions;
                form.itemOption("firstName", "editorOptions", {...prevOptions, ...options });            
            }
        });
    });

##### Angular

To change the properties of an editor, bind the property that should be changed in the [editorOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions') object to a component property.

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="firstName" [editorOptions]="{ disabled: disableFirstName.value }"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item dataField="phone"></dxi-item>
        <dxi-item dataField="email"></dxi-item>
    </dx-form>
    <dx-check-box #disableFirstName
        text="Disable the First Name Editor"
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

To change the properties of an editor, bind the property that should be changed in the [editorOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions') object to a component property.

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxForm :form-data="employee">
                <DxSimpleItem data-field="firstName" :editor-options="editorOptions" />
                <DxSimpleItem data-field="lastName" />
                <DxSimpleItem data-field="phone" />
                <DxSimpleItem data-field="email" />
            </DxForm>
            <DxCheckBox
                text="Disable the First Name Editor"
                :value="editorOptions.disabled"
                @value-changed="checkBoxValueChanged" />
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem } from 'devextreme-vue/form';
    import { DxCheckBox } from 'devextreme-vue/check-box';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxSimpleItem, DxCheckBox
        },
        data() {
            return {
                employee,
                editorOptions: {
                    disabled: false
                }
            };
        },
        methods: {
            checkBoxValueChanged(e) {
                this.editorOptions = { disabled: e.value };
            }
        }
    };
    </script>

##### React

To change the properties of an editor, bind the property that should be changed in the [editorOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions') object to a state property.

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { Form, SimpleItem } from 'devextreme-react/form';
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
                editorOptions: {
                    disabled: false
                }
            };
            this.onCheckBoxValueChanged = this.onCheckBoxValueChanged.bind(this);
        };

        render() {
            return (
                <div>
                    <Form formData={employee}>
                        <SimpleItem dataField="firstName" editorOptions={this.state.editorOptions} />
                        <SimpleItem dataField="lastName" />
                        <SimpleItem dataField="phone" />
                        <SimpleItem dataField="email" />
                    </Form>
                    <CheckBox
                        text="Show the Phone Number"
                        value={this.state.editorOptions.disabled}
                        onValueChanged={this.onCheckBoxValueChanged} />
                </div>
            );
        }

        onCheckBoxValueChanged(e) {
            this.setState({
                editorOptions: {
                    disabled: e.value 
                }
            });
        }
    }

    export default App;

---

#####See Also#####
#include common-link-callmethods
- [Form - Change Item Options at Runtime](/concepts/05%20UI%20Components/Form/20%20Change%20Properties%20at%20Runtime/10%20Item%20Properties.md '/Documentation/Guide/UI_Components/Form/Change_Properties_at_Runtime/Item_Properties/')
- [Form - Configure Simple Items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields)
- [Form API Reference](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/')

[tags]form, get editor, change editor options
