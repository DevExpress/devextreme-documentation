Not only you can bind the **Form** to an existing data object, but you can also generate a new data object directly from the **Form** items. For this purpose, bind simple items from the [items](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#items') array to not-yet-existing data fields using the [dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField') property. Once a user enters a value into such an item, the corresponding data field is created in the data object. To obtain this data object, get the value of the **formData** property using the [option(optionName)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName).md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#optionoptionName') method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            items: [{
                dataField: "firstName",
                editorType: "dxTextBox"
            }, {
                dataField: "lastName",
                editorType: "dxTextBox"
            }, {
                dataField: "birthDate",
                editorType: "dxDateBox"
            }],
            onFieldDataChanged: function(e) {
                var newFormData = e.component.option("formData");
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        (onFieldDataChanged)="form_fieldDataChanged($event)">
        <dxi-item dataField="firstName" editorType="dxTextBox"></dxi-item>
        <dxi-item dataField="lastName"  editorType="dxTextBox"></dxi-item>
        <dxi-item dataField="birthDate" editorType="dxDateBox"></dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = { }
        form_fieldDataChanged (e) {
            this.employee = e.component.option("formData");
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm @field-data-changed="formFieldDataChanged">
            <DxSimpleItem data-field="firstName" editor-type="dxTextBox" />
            <DxSimpleItem data-field="lastName"  editor-type="dxTextBox" />
            <DxSimpleItem data-field="birthDate" editor-type="dxDateBox" />
        </DxForm>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem } from 'devextreme-vue/form';

    const employee = { };

    export default {
        components: {
            DxForm, DxSimpleItem
        },
        data() {
            return {
                employee
            };
        },
        methods: {
            formFieldDataChanged(e) {
                this.employee = e.component.option("formData");
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { Form, SimpleItem } from 'devextreme-react/form';

    class App extends React.Component {
        constructor() {
            super();
            this.formFieldDataChanged = this.formFieldDataChanged.bind(this);
        }
        
        employee = { };

        render() {
            return (
                <Form onFieldDataChanged={this.formFieldDataChanged}>
                    <SimpleItem dataField="firstName" editorType="dxTextBox" />
                    <SimpleItem dataField="lastName"  editorType="dxTextBox" />
                    <SimpleItem dataField="birthDate" editorType="dxDateBox" />
                </Form>
            );
        }

        formFieldDataChanged(e) {
            this.employee = e.component.option("formData");
        }
    }

    export default App;

---

#####See Also#####
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
- [Form - Validate and Submit the Form](/concepts/05%20Widgets/Form/40%20Validate%20and%20Submit%20the%20Form.md '/Documentation/Guide/UI_Components/Form/Validate_and_Submit_the_Form/')
- [Form - Update Form Data Using the API](/concepts/05%20Widgets/Form/30%20Update%20Form%20Data%20Using%20the%20API.md '/Documentation/Guide/UI_Components/Form/Update_Form_Data_Using_the_API/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Components/dxForm/')

[tags]form, generate data, generate data object