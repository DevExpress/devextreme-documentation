To change the options of an editor, get its instance first using the [getEditor(dataField)](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/getEditor(dataField).md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#getEditordataField') method. After that, call the **option(optionName, optionValue)** or **option(optionName, options)** method of this instance. This approach is more typical of jQuery. 

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

With Angular, Vue, or React, bind the option that should be changed in the [editorOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions') object to a component property.

---

##### Angular

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
                :value.sync="isFirstNameDisabled"
                @value-changed="checkBoxValueChanged" />
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxCheckBox } from 'devextreme-vue';
    import { DxSimpleItem } from 'devextreme-vue/form';

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
            const isFirstNameDisabled = true;
            return {
                employee,
                editorOptions : {
                    disabled: isFirstNameDisabled
                }
                isFirstNameDisabled
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

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Form, CheckBox } from 'devextreme-react';
    import { SimpleItem } from 'devextreme-react/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        constructor() {
            super();
            const isFirstNameDisabled = true;
            this.state = {
                isFirstNameDisabled,
                editorOptions: {
                    disabled: isFirstNameDisabled
                }
            };
            this.onCheckBoxValueChanged = this.onCheckBoxValueChanged.bind(this);
        };

        render() {
            return (
                <div>
                    <Form formData={employee}>
                        <SimpleItem dataField="firstName" editorOptions={{disabled: this.state.isFirstNameDisabled}} />
                        <SimpleItem dataField="lastName" />
                        <SimpleItem dataField="phone" />
                        <SimpleItem dataField="email" />
                    </Form>
                    <CheckBox
                        text="Show the Phone Number"
                        value={this.state.isFirstNameDisabled}
                        onValueChanged={this.onCheckBoxValueChanged } />
                </div>
            );
        }

        onCheckBoxValueChanged(e) {
            this.setState({
                isFirstNameDisabled: e.value,
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
- [Form - Change Item Options at Runtime](/concepts/05%20Widgets/Form/20%20Change%20Options%20at%20Runtime/10%20Item%20Options.md '/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Item_Options/')
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')

[tags]form, get editor, change editor options
