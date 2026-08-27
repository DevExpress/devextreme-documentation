Use the [items[]](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#items) array to configure all form items. This array can contain strings (**formData** field names) and objects (item configurations). Use a string to create a label-editor pair (a [simple item](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/')) with default configuration. To change the default settings, declare an item configuration object: specify the [dataField](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField') and other properties. The example below configures the `HireDate` item:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                name: "John Heart",
                officeNumber: 901,
                hireDate: new Date(2012, 4, 13)
            },
            items: ["name", "officeNumber", {
                dataField: "hireDate",
                editorOptions: {
                    disabled: true
                }
            }]
        });
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Form()
        .FormData(new {
            Name = "John Heart",
            OfficeNumber = 901,
            HireDate = new DateOnly(2012, 4, 13)
        })
        .Items(i => {
            i.AddSimple().DataField("Name");
            i.AddSimple().DataField("OfficeNumber");
            i.AddSimple().DataField("HireDate").Option("disabled", true);
        })
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee">
        <dxi-form-item dataField="name"></dxi-form-item>
        <dxi-form-item dataField="officeNumber"></dxi-form-item>
        <dxi-form-item 
            dataField="hireDate" 
            [editorOptions]="hireDateOptions">
        </dxi-form-item>
    </dx-form>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        employee = {
            name: 'John Heart',
            officeNumber: 901,
            hireDate: new Date(2012, 4, 13)
        }

        hireDateOptions = {
            disabled: true
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm 
            :form-data="employee">
            <DxSimpleItem data-field="name"/>
            <DxSimpleItem data-field="officeNumber"/>
            <DxSimpleItem 
                data-field="hireDate"
                :editor-options="hireDateOptions"
            />
        </DxForm>
    </template>

    <script setup lang="ts">
    import { DxForm, DxSimpleItem } from 'devextreme-vue/form';
    
    const employee = {
        name: 'John Heart',
        officeNumber: 901,
        hireDate: new Date(2012, 4, 13)
    };

    const hireDateOptions = {
        disabled: true
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Form, SimpleItem } from 'devextreme-react/form';

    const employee = {
        name: 'John Heart',
        officeNumber: 901,
        hireDate: new Date(2012, 4, 13)
    };

    const hireDateOptions = {
        disabled: true
    };

    export default function App() {
        return (
            <Form formData={employee}>
                <SimpleItem dataField="name" />
                <SimpleItem dataField="officeNumber" />
                <SimpleItem 
                    dataField="hireDate"
                    editorOptions={hireDateOptions}
                />
            </Form>
        );
    }

---
