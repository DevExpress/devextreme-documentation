The Form can organize items into a fixed number of columns or automatically adjust the layout based on the screen width. Initialize the [colCount](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount') property as done in the following code to keep a fixed number of columns. To create an adaptive layout instead, configure the [screenByWidth](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#screenByWidth') and [colCountByScreen](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/colCountByScreen '/Documentation/ApiReference/UI_Components/dxForm/Configuration/colCountByScreen/') properties. 

An item can span multiple columns. The following example sets the [colSpan](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/colSpan.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#colSpan') property for the `Notes` item to `2` so that it spans two columns.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                name: "John Heart",
                position: "CEO",
                hireDate: new Date(2012, 4, 13),
                officeNumber: 901,
                notes: "John has been in the Audio/Video industry since 1990."
            },
            colCount: 2,
            items: ["name", "position", "hireDate", "officeNumber", {
                dataField: "notes",
                colSpan: 2
            }]
        });
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Form()
        .FormData(new {
            Name = "John Heart",
            Position = "CEO",
            HireDate = new DateOnly(2012, 4, 13),
            OfficeNumber = 901,
            Notes = "John has been in the Audio/Video industry since 1990."
        })
        .ColCount(2)
        .Items(i => {
            i.AddSimple().DataField("Name");
            i.AddSimple().DataField("Position");
            i.AddSimple().DataField("HireDate");
            i.AddSimple().DataField("OfficeNumber");
            i.AddSimple().DataField("Notes")
                .ColSpan("2")
        })
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee"
        [colCount]="2">
        <dxi-form-item dataField="name"></dxi-form-item>
        <dxi-form-item dataField="position"></dxi-form-item>
        <dxi-form-item dataField="hireDate"></dxi-form-item>
        <dxi-form-item dataField="officeNumber"></dxi-form-item>
        <dxi-form-item 
            dataField="notes" 
            [colSpan]="2">
        </dxi-form-item>
    </dx-form>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        employee = {
            name: 'John Heart',
            position: 'CEO',
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            notes: 'John has been in the Audio/Video industry since 1990.'
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm 
            :form-data="employee"
            :col-count="2">
            <DxSimpleItem data-field="name"/>
            <DxSimpleItem data-field="position"/>
            <DxSimpleItem data-field="hireDate"/>
            <DxSimpleItem data-field="officeNumber"/>
            <DxSimpleItem 
                data-field="notes"
                :col-span="2"
            />
        </DxForm>
    </template>

    <script setup lang="ts">
    import { DxForm, DxSimpleItem } from 'devextreme-vue/form';
    
    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        notes: 'John has been in the Audio/Video industry since 1990.'
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Form, SimpleItem } from 'devextreme-react/form';

    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        notes: 'John has been in the Audio/Video industry since 1990.'
    };

    export default function App() {
        return (
            <Form
                formData={employee}
                colCount={2}>
                <SimpleItem dataField="name" />
                <SimpleItem dataField="position" />
                <SimpleItem dataField="hireDate" />
                <SimpleItem dataField="officeNumber" />
                <SimpleItem 
                    dataField="notes"
                    colSpan={2}
                />
            </Form>
        );
    }

---
