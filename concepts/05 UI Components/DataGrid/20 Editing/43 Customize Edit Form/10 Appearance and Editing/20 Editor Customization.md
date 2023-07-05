DataGrid generates editors based on the **columns[]**.[dataType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType) property. This section demonstrates how to change the default editor settings, configure built-in editors, or create your custom editor.

If you want to change the predefined editor properties, specify the **columns[].**[editorOptions](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions) property that also affects filter row editors. Omit the **onValueChanged** handler in this property because the internal DataGrid implementation overrides it. The **columns[].formItem.**[editorOptions](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions) property affects form items only. 

[note]Leave the **template** property in **formItem.editorOptions** or **columns[].editorOptions** unspecified. To implement a custom template, use the [editCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate) property instead.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/"
}

You can override the **onValueChanged** handler of the predefined editor and change its type. To accomplish this goal, handle the [onEditorPreparing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditorPreparing) event.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onEditorPreparing: function(e) {
                if (e.dataField === "Notes" && e.parentType === "dataRow") {
                    e.editorName = "dxTextArea";
                }
                if (e.dataField === "requiredDataField" && e.parentType === "dataRow") {
                    const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function(args) { // override the default handler
                        if (someCondition(e, args)) doSomething(e, args);
                        defaultValueChangeHandler(args);
                    }
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onEditorPreparing)="overrideOnValueChanged($event)">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        overrideOnValueChanged(e) {
            if (e.dataField === "Notes" && e.parentType === "dataRow") {
                e.editorName = "dxTextArea";
            }
            if (e.dataField === "requiredDataField" && e.parentType === "dataRow") {
                const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                e.editorOptions.onValueChanged = function(args) { // override the default handler
                    if (someCondition(e, args)) doSomething(e, args);
                    defaultValueChangeHandler(args);
                }
            }
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })

    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @editor-preparing="overrideOnValueChanged">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        // ...
        methods: {
            overrideOnValueChanged(e) {
                if (e.dataField === "Notes" && e.parentType === "dataRow") {
                    e.editorName = "dxTextArea";
                }
                if (e.dataField === "requiredDataField" && e.parentType === "dataRow") {
                    const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function(args) { // override the default handler
                        if (someCondition(e, args)) doSomething(e, args);
                        defaultValueChangeHandler(args);
                    }
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    const overrideOnValueChanged = (e) => {
        if (e.dataField === "Notes" && e.parentType === "dataRow") {
            e.editorName = "dxTextArea";
        }
        if (e.dataField === "requiredDataField" && e.parentType === "dataRow") {
            const defaultValueChangeHandler = e.editorOptions.onValueChanged;
            e.editorOptions.onValueChanged = function(args) { // override the default handler
                if (someCondition(e, args)) doSomething(e, args);
                defaultValueChangeHandler(args);
            }
        }
    }

    export default function App() {
        return (
            <DataGrid ... 
                onEditorPreparing={overrideOnValueChanged}
            >   
            </DataGrid>
        );
    }

---

If you need to implement a custom editor for a specific data type (array, object, etc.), use the **columns[]**.[editCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate) property. It is important to allow users to input or change the column value. Handle this value change and use the **setValue** template parameter to change the corresponding cell value. The **editCellTemplate** property specifies one template for all editing modes.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/"
}

If you want to further customize the form (add custom labels and buttons, apply advanced validation rules and masks, etc.), implement the Form component inside Popup.

#include common-githubbutton with {
    url: "https://github.com/DevExpress-Examples/devextreme-datagrid-custom-editing-form/"
}

#####See Also#####
- [Dynamically Change Editor Properties in the Editing State](/Documentation/Guide/UI_Components/DataGrid/How_To/Dynamically_Change_Editor_Properties_in_the_Editing_State/)
