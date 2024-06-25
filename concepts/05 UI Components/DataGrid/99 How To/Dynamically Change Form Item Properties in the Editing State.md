The following instructions explain how to dynamically change a form item's properties based on another form editor's value:

1. **Specify the [form.customizeItem](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/customizeItem.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#customizeItem') callback function**       
This function allows you to change form item properties dynamically. Within this function, [get the index of the row that a user edits](/api-reference/10%20UI%20Components/GridBase/3%20Methods/getRowIndexByKey(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getRowIndexByKeykey') and use this index to [get the cell value](/api-reference/10%20UI%20Components/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cellValuerowIndex_dataField') that should affect form item properties.

    [note] If you enable the [repaintChangesOnly](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/repaintChangesOnly.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#repaintChangesOnly') property, the [form.customizeItem](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/customizeItem.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#customizeItem') is not executed.

    In the following code, the `"AddressRequired"` value affects the `"Home Address"` item's visibility:
    
    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            var dataGrid = $("#dataGridСontainer").dxDataGrid({ 
                // ...
                columns: [
                    "State",
                    { dataField: "Address", visible: false },
                    { dataField: "AddressRequired", visible: false }
                ],
                editing: {
                    mode: "form",
                    allowUpdating: true,
                    allowAdding: true,
                    form: {
                        items: [
                            // ...
                            "AddressRequired",
                            { 
                                itemType: "group", 
                                caption: "Home Address",
                                items: ["State", "Address"] 
                            }
                        ],               
                        customizeItem: function(item) {
                            if (item && item.itemType === "group" && item.caption === "Home Address") {
                                const editRowKey = gridInstance.option('editing.editRowKey');
                                const rowIndex = gridInstance.getRowIndexByKey(editRowKey);
                                item.visible = gridInstance.cellValue(rowIndex, "AddressRequired");
                            }
                        },
                    }
                }
            }).dxDataGrid("instance");
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-data-grid ... >
            <!-- ... -->
            <dxi-column dataField="State"></dxi-column>
            <dxi-column dataField="Address" [visible]="false"></dxi-column>
            <dxi-column dataField="AddressRequired" [visible]="false"></dxi-column>   
            <dxo-editing mode="form" [allowUpdating]="true" [allowAdding]="true">
               <dxo-form [customizeItem]="customizeItem">
                    <!-- ... -->
                    <dxi-item dataField="AddressRequired"></dxi-item>
                    <dxi-item itemType="group" caption="Home Address">
                        <dxi-item dataField="State"></dxi-item>
                        <dxi-item dataField="Address"></dxi-item>
                    </dxi-item>
               </dxo-form>
            </dxo-editing>            
        </dx-data-grid>

        <!-- tab: app.component.ts -->
        import { Component, ViewChild } from '@angular/core';
        import { DxDataGridComponent } from 'devextreme-angular';
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {            
            @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;            
            // Prior to Angular 8
            // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;            
            // ...            
            customizeItem = (item) => {
                if (item && item.itemType === 'group' && item.caption === 'Home Address') {
                    const gridInstance = this.dataGrid.instance;
                    const editRowKey = gridInstance.option('editing.editRowKey');
                    const rowIndex = gridInstance.getRowIndexByKey(editRowKey);
                    item.visible = gridInstance.cellValue(rowIndex, "AddressRequired");
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
            providers: [ ],
            bootstrap: [AppComponent]
        })
        export class AppModule { }
 
    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxDataGrid :ref="gridRefName" ... >
                <!-- ... -->
                <DxColumn data-field="State" />       
                <DxColumn data-field="AddressRequired" :visible="false" />
                <DxColumn data-field="Address" :visible="false" />
                <DxEditing :allow-updating="true" :allow-adding="true" mode="form">
                    <DxForm :customize-item="customizeItem">
                        <!-- ... -->
                        <DxSimpleItem data-field="AddressRequired" />
                        <DxGroupItem caption="Home Address">
                            <DxSimpleItem data-field="State" />
                            <DxSimpleItem data-field="Address" />
                        <DxGroupItem>
                    </DxForm>    
                </DxEditing>
            </DxDataGrid>
        </template>

        <script>
        import 'devextreme/dist/css/dx.light.css';

        import DxDataGrid, { 
            DxColumn,
            DxEditing,
            DxForm,
            DxSimpleItem,
            DxGroupItem
        } from "devextreme-vue/data-grid";

        export default {
            components: {              
                DxDataGrid,
                DxColumn,  
                DxEditing,
                DxForm,
                DxSimpleItem,
                DxGroupItem
            },
            data() {
                return {
                    // ...
                    rowKey: -1           
                }
            },
            methods: {
                customizeItem(item) {
                    if (item && item.itemType === "group" && item.caption === "Home Address") {
                        const gridInstance = this.dataGrid;
                        const editRowKey = gridInstance.option('editing.editRowKey');
                        const rowIndex = gridInstance.getRowIndexByKey(editRowKey);
                        item.visible = gridInstance.cellValue(rowIndex, "AddressRequired");
                    }
                }
            },
            computed: {
                dataGrid: function() {
                    return this.$refs[this.gridRefName].instance;
                }
            }
        }
        </script>

    ##### React

        <!--tab: App.js-->
        import React from 'react';

        import 'devextreme/dist/css/dx.light.css';

        import DataGrid, { 
            Column,
            Editing,
            Form,
            SimpleItem,
            GroupItem
        } from 'devextreme-react/data-grid';

        class App extends React.Component {         
            constructor(props) {
                super(props);
                this.dataGridRef = React.createRef();
            }
            get dataGrid() {
                return this.dataGridRef.current.instance();
            }
            render() {
                return (
                    <DataGrid ref={this.dataGridRef} ... >
                        {/* ... */}
                        <Column dataField="State" /> 
                        <Column dataField="Address" visible={false} />
                        <Column dataField="AddressRequired" visible={false} />
                        <Editing allowUpdating={true} allowAdding={true} mode="form">
                            <Form customizeItem={this.customizeItem}>
                                {/* ... */}
                                <SimpleItem dataField="AddressRequired" />
                                <GroupItem caption="Home Address">
                                    <SimpleItem dataField="StateID" />
                                    <SimpleItem dataField="Address" />
                                </GroupItem>
                            </Form>         
                        </Editing>   
                    </DataGrid>
                );
            }
            customizeItem = (item) => {
                if (item && item.itemType === "group" && item.caption === "Home Address") {
                    let gridInstance = this.dataGrid.current.instance();
                    const editRowKey = gridInstance.option('editing.editRowKey');
                    const rowIndex = gridInstance.getRowIndexByKey(editRowKey);
                    item.visible = gridInstance.cellValue(rowIndex, "AddressRequired");
                }
            }
        }
        export default App;

    ##### ASP.NET Core Controls

        <!--Razor C#-->
        @(Html.DevExtreme().DataGrid()
            // ...
            .ID("dataGridContainer")
            .Columns(columns => {
                // ...
                columns.Add().DataField("State");                   
                columns.Add().DataField("AddressRequired").Visible(false);
                columns.Add().DataField("Address").Visible(false);
            })
            .Editing(e => e.Mode(GridEditMode.Form)
                .AllowUpdating(true)
                .AllowAdding(true)
                .Form(f => f.Items(items => {
                    // ... 
                    items.AddSimple().DataField("AddressRequired");
                    items.AddGroup()
                        .Caption("Home Address")
                        .Items(groupItems => {
                            groupItems.AddSimple().DataField("State");
                            groupItems.AddSimple().DataField("Address");
                        });
                    .CustomizeItem("customizeItem")
                }))
            )
        )

        <script type="text/javascript">
            // ...
            function customizeItem(item) {
                if (item && item.itemType === "group" && item.caption === "Home Address") {
                    const gridInstance = $("#gridContainer").dxDataGrid("instance");
                    const editRowKey = gridInstance.option('editing.editRowKey');
                    const rowIndex = gridInstance.getRowIndexByKey(editRowKey);
                    item.visible = gridInstance.cellValue(rowIndex, "AddressRequired");
                }
            }
        </script>

    ---

1. **Specify the [setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue') callback function**  
Specify **setCellValue** for those columns whose editors affect other form items. In the function, call its default implementation as shown below. This call forces all form items to re-render themselves with the new properties.

    In the following code, we declare the **setCellValue** function for the `"AddressRequired"` column:

    ---
    #####jQuery

        <!--JavaScript-->
        $(function() {
            $("#dataGridСontainer").dxDataGrid({
                // ...
                columns: [
                    // ...
                    { 
                        dataField: "AddressRequired", 
                        setCellValue: function(newData, value) {
                            this.defaultSetCellValue(newData, value);
                        }
                    }
                ]                
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-data-grid ... >
            <!-- ... -->
            <dxi-column dataField="AddressRequired" [setCellValue]="setCellValue"></dxi-column>           
        </dx-data-grid>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            // ...
            setCellValue(newData, value) {
                let column = (<any>this);
                column.defaultSetCellValue(newData, value);
            }
        }
 
    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxDataGrid ... >
                <!-- ... -->
                <DxColumn data-field="AddressRequired" :set-cell-value="setCellValue" />               
            </DxDataGrid>
        </template>

        <script>
        // ...
        export default {
            // ...
            methods: {
                setCellValue(newData,value) {
                    let column = this;
                    column.defaultSetCellValue(newData, value);
                }
            }
        }
        </script>

    ##### React

        <!--tab: App.js-->
        // ...
        class App extends React.Component {
            // ...   
            render() {
                return (
                    <DataGrid ... >             
                        {/* ... */}
                        <Column dataField="AddressRequired" setCellValue={this.setCellValue} />                       
                    </DataGrid>
                );
            }
            setCellValue(newData, value) {
                let column = this;
                column.defaultSetCellValue(newData, value);
            }
        }
        export default App;

    ##### ASP.NET Core Controls
    
        <!--Razor C#-->
        @(Html.DevExtreme().DataGrid()
            // ...
            .Columns(cols => {
                // ...
                cols.Add().DataField("AddressRequired")
                    .SetCellValue("setCellValue");                
            })
        )
        <script type="text/javascript">
            // ...
            function setCellValue(newData, value) {                
                this.defaultSetCellValue(newData, value);
            }
        </script>

    ---

The full project is available on GitHub.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-hide-show-edit-form-items-dynamically"
}

#####See Also#####
- [Customize Editors](/concepts/05%20UI%20Components/DataGrid/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/UI_Components/DataGrid/Editing/#Customize_Editors')
