In form edit mode, row cells become editable form fields. Form fields are sorted like columns in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Editing Form Mode](/images/DataGrid/editing/form_mode.png)

Configure the form using the **editing**.[form](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/form.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#form') object. The **DataGrid** uses the DevExtreme [Form](/concepts/05%20Widgets/Form/00%20Overview.md '/Documentation/Guide/Widgets/Form/Overview/') UI component, so you can specify [any Form options](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/') in this object except those listed in its description. 

For example, you can specify the [items](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items') array to reorder editable fields (or "simple items", as they are called in the **Form** UI component), or organize them in groups and tabs.

In the following code, the items with the specified **dataField** are simple items. Identical **dataFields** connect a simple item with a column:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true,
                mode: "form",
                form: {
                    items: [{
                        itemType: "group",
                        caption: "Personal Data",
                        items: [
                            { dataField: "Prefix" },
                            { dataField: "Full_Name" },
                            { dataField: "Position" },
                            { dataField: "Duties", editorType: "dxTextArea" }
                        ]
                        // or just
                        // items: ["Prefix", "Full_Name", "Position"]
                    }, {
                        itemType: "group",
                        caption: "Contacts",
                        items: ["Email", "Skype"]
                    }]
                }
            },
            columns: [ 
                { dataField: "Full_Name" }, 
                { dataField: "Prefix" },
                { dataField: "Position" },
                { dataField: "Duties" },
                { dataField: "Email" },
                { dataField: "Skype" } 
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="form">
            <dxo-form>
                <dxi-item itemType="group" caption="Personal Data">
                    <dxi-item dataField="Prefix"></dxi-item>
                    <dxi-item dataField="Full_Name"></dxi-item>
                    <dxi-item dataField="Position"></dxi-item>
                    <dxi-item dataField="Duties" editorType="dxTextArea"></dxi-item>
                </dxi-item>
                <dxi-item itemType="group" caption="Contacts">
                    <dxi-item dataField="Email"></dxi-item>
                    <dxi-item dataField="Skype"></dxi-item>
                </dxi-item>
            </dxo-form>
        </dxo-editing>
        <dxi-column dataField="Full_Name"></dxi-column>
        <dxi-column dataField="Prefix"></dxi-column>
        <dxi-column dataField="Position"></dxi-column>
        <dxi-column dataField="Duties"></dxi-column>
        <dxi-column dataField="Email"></dxi-column>
        <dxi-column dataField="Skype"></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxEditing
                :allow-updating="true"
                mode="form">
                <DxForm>
                    <DxGroupItem caption="Personal Data">
                        <DxSimpleItem data-field="Prefix" />
                        <DxSimpleItem data-field="Full_Name" />
                        <DxSimpleItem data-field="Position" />
                        <DxSimpleItem data-field="Duties" editor-type="dxTextArea" />
                    </DxGroupItem>
                    <DxGroupItem caption="Contacts">
                        <DxSimpleItem data-field="Email" />
                        <DxSimpleItem data-field="Skype" />
                    </DxGroupItem>
                </DxForm>
            </DxEditing>
            <DxColumn data-field="Full_Name" />
            <DxColumn data-field="Prefix" />
            <DxColumn data-field="Position" />
            <DxColumn data-field="Duties" />
            <DxColumn data-field="Email" />
            <DxColumn data-field="Skype" />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxEditing,
        DxForm,
        DxColumn
    } from 'devextreme-vue/data-grid';

    import {
        DxSimpleItem,
        DxGroupItem
    } from 'devextreme-vue/form';

    import 'devextreme-vue/text-area';

    export default {
        components: {
            DxDataGrid,
            DxEditing,
            DxForm,
            DxColumn,
            DxSimpleItem,
            DxGroupItem
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Editing,
        Form,
        Column
    } from 'devextreme-react/data-grid';

    import {
        SimpleItem,
        GroupItem
    } from 'devextreme-react/form';
    
    import 'devextreme-react/text-area';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Editing
                        allowUpdating={true}
                        mode="form">
                        <Form>
                            <GroupItem caption="Personal Data">
                                <SimpleItem dataField="Prefix" />
                                <SimpleItem dataField="Full_Name" />
                                <SimpleItem dataField="Position" />
                                <SimpleItem dataField="Duties" editorType="dxTextArea" />
                            </GroupItem>
                            <GroupItem caption="Contacts">
                                <SimpleItem dataField="Email" />
                                <SimpleItem dataField="Skype" />
                            </GroupItem>
                        </Form>
                    </Editing>
                    <Column dataField="Full_Name" />
                    <Column dataField="Prefix" />
                    <Column dataField="Position" />
                    <Column dataField="Duties" />
                    <Column dataField="Email" />
                    <Column dataField="Skype" />
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Editing(e => e
            .AllowUpdating(true)
            .Mode(GridEditMode.Form)
            .Form(f => f
                .Items(i => {
                    i.AddGroup()
                        .Caption("Personal Data")
                        .Items(groupItems => {
                            groupItems.AddSimple().DataField("Prefix");
                            groupItems.AddSimple().DataField("Full_Name");
                            groupItems.AddSimple().DataField("Position");
                            groupItems.AddSimple().DataField("Duties")
                                .Editor(e => e.TextArea());
                        });
                    i.AddGroup()
                        .Caption("Contacts")
                        .Items(groupItems => {
                            groupItems.AddSimple().DataField("Email");
                            groupItems.AddSimple().DataField("Skype");
                        });
                })
            )
        )
        .Columns(cols => {
            cols.Add().DataField("Full_Name");
            cols.Add().DataField("Prefix");
            cols.Add().DataField("Position");
            cols.Add().DataField("Duties");
            cols.Add().DataField("Email");
            cols.Add().DataField("Skype");
        })
    )
    
---

#####See Also#####
- [Organize Simple Items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items '/Documentation/Guide/Widgets/Form/Organize_Simple_Items')

You can use a column's [formItem](/api-reference/_hidden/GridBaseColumn/formItem.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#formItem') object to customize an individual simple item. See an example in its description. 

If you need to validate form values, specify validation rules as described in the [Data Validation](/concepts/05%20Widgets/DataGrid/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/Widgets/DataGrid/Editing/#Data_Validation') article.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FormEditing/"
}
