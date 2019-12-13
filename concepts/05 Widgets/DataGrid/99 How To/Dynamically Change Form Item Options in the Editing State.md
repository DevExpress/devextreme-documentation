The following instructions explain how to dynamically change a form item's options based on another form editor's value:

1. **Implement the [onEditingStart](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditingStart.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditingStart') event handler**       
This handler is used to save the key of the row that enters the editing state, and we use this key to get this row's index in step 2.

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            var rowKey = -1;
            $("#dataGridСontainer").dxDataGrid({ 
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
                        ]
                    }
                },
                onEditingStart: function(e) {
                    rowKey = e.key;
                }
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-data-grid ...
            (onEditingStart)="onEditingStart($event)">
            <!-- ... -->
            <dxi-column dataField="State"></dxi-column>
            <dxi-column dataField="Address" [visible]="false"></dxi-column>
            <dxi-column dataField="AddressRequired" [visible]="false"></dxi-column>   
            <dxo-editing mode="form" [allowUpdating]="true" [allowAdding]="true">
               <dxo-form>
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
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            rowKey: any = -1;
            // ...
            onEditingStart(e) {
                this.rowKey = e.key;
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
            <dx-data-grid ...
                @editing-start="onEditingStart">
                <!-- ... -->
                <dx-column data-field="State" />       
                <dx-column data-field="AddressRequired" :visible="false" />
                <dx-column data-field="Address" :visible="false" />
                <dx-editing :allow-updating="true" :allow-adding="true" mode="form">
                    <dx-form>
                        <!-- ... -->
                        <dx-simple-item data-field="AddressRequired" />
                        <dx-group-item caption="Home Address">
                            <dx-simple-item data-field="State" />
                            <dx-simple-item data-field="Address" />
                        </dx-group-item>
                    </dx-form>    
                </dx-editing>
            </dx-data-grid>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
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
                onEditingStart(e) {
                    this.rowKey = e.key;
                }     
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';

        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import DataGrid, { 
            Column,
            Editing,
            Form,
            SimpleItem,
            GroupItem
        } from 'devextreme-react/data-grid';

        class App extends React.Component {        
            render() {
                return (
                    <DataGrid ...
                        onEditingStart={this.onEditingStart}>
                        {/* ... */}
                        <Column dataField="State" /> 
                        <Column dataField="Address" visible={false} />
                        <Column dataField="AddressRequired" visible={false} />
                        <Editing allowUpdating={true} allowAdding={true} mode="form">
                            <Form>
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
            onEditingStart = (e) => {
                this.rowKey = e.key;
            }          
        }
        export default App;

    ##### ASP.NET MVC Controls

        <!--Razor C#-->
        @(Html.DevExtreme().DataGrid()
            // ...
            .OnEditingStart("onEditingStart")
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
                }))
            )
        )

        <script type="text/javascript">
            var rowKey = - 1;
            function onEditingStart(e) {
                rowKey = e.key;
            }          
        </script>
        
    ---
1. **Specify the [form.customizeItem](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/customizeItem.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#customizeItem') callback function**       
This function allows you to change form item options dynamically. Within this function, [get the index of the row being edited](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getRowIndexByKey(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getRowIndexByKeykey') and use this index to [get the cell value](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_dataField') that should affect form item options.

    In the following code, the `"AddressRequired"` value affects the `"Home Address"` item's visibility:
    
    ---
    #####jQuery

        <!--JavaScript-->
        $(function() {
            var dataGrid = $("#dataGridСontainer").dxDataGrid({ 
                // ...
                editing: {
                    // ...
                    form: {
                        // ...               
                        customizeItem: function(item) {
                            if(item && item.itemType === "group" && item.caption === "Home Address") {
                                // Get the index of the row being edited; 0 if it is a new row
                                var index = dataGrid.getRowIndexByKey(rowKey) || 0;
                                // Display "Home Address" if "AddressRequired" is true
                                item.visible = dataGrid.cellValue(index, "AddressRequired");      
                            }
                        }
                    }
                }
            }).dxDataGrid("instance");
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-data-grid ... >
            <!-- ... -->
            <dxo-editing ... >
               <dxo-form [customizeItem]="customizeItem">
                    <!-- ... -->
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
                if(item && item.itemType === "group" && item.caption === "Home Address") {
                    // Get the index of the row being edited; 0 if it is a new row
                    let index = this.dataGrid.instance.getRowIndexByKey(rowKey) || 0;
                    // Display "Home Address" if "AddressRequired" is true
                    item.visible = this.dataGrid.instance.cellValue(index, "AddressRequired");      
                }
            }
        }
 
    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <dx-data-grid :ref="gridRefName" ... >
                <!-- ... -->
                <dx-editing ... >
                    <dx-form :customize-item="customizeItem">
                        <!-- ... -->
                    </dx-form>
                </dx-editing>    
            </dx-data-grid>
        </template>

        <script>
        // ...
        export default {
            // ...
            methods: {
                customizeItem(item) {
                    if(item && item.itemType === "group" && item.caption === "Home Address") {
                        // Get the index of the row being edited; 0 if it is a new row
                        let index = this.dataGrid.getRowIndexByKey(rowKey) || 0;
                        // Display "Home Address" if "AddressRequired" is true
                        item.visible = this.dataGrid.cellValue(index, "AddressRequired");      
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
        // ...
        class App extends React.Component {         
            constructor(props) {
                super(props);
                this.dataGridRef = React.createRef();
            }
            get dataGrid() {
                return this.dataGridRef.current.instance;
            }
            render() {
                return (
                    <DataGrid ref={this.dataGridRef} ... >
                        {/* ... */}
                        <Editing ... >           
                            <Form customizeItem={this.customizeItem}>
                                {/* ... */}
                            </Form>
                        </Editing>
                    </DataGrid>
                );
            }
            customizeItem = (item) => {
                if(item && item.itemType === "group" && item.caption === "Home Address") {
                    // Get the index of the row being edited; 0 if it is a new row
                    let index = this.dataGrid.getRowIndexByKey(rowKey) || 0;
                    // Display "Home Address" if "AddressRequired" is true
                    item.visible = this.dataGrid.cellValue(index, "AddressRequired");      
                }
            }
        }
        export default App;

    ##### ASP.NET MVC Controls
    
        <!--Razor C#-->
        @(Html.DevExtreme().DataGrid()
            .ID("dataGridContainer")
            // ...
            .Editing(e => e
                // ...
                .Form(f => f
                    // ...
                    .CustomizeItem("customizeItem")
                }))
            )
        )
        <script type="text/javascript">
            // ...
            function customizeItem(item) {
                if(item && item.itemType === "group" && item.caption === "Home Address") {
                    var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
                    // Get the index of the row being edited; 0 if it is a new row
                    let index = dataGrid.getRowIndexByKey(rowKey) || 0;
                    // Display "Home Address" if "AddressRequired" is true
                    item.visible = dataGrid.cellValue(index, "AddressRequired");      
                }
            }
        </script>

    ---

1. **Specify the [setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#setCellValue') callback function**  
Specify **setCellValue** for those columns whose editors affect other form items. In the function, call its default implementation as shown below. This call forces all form items to re-render themselves with the new options.

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
            <dx-data-grid ... >
                <!-- ... -->
                <dx-column data-field="AddressRequired" :set-cell-value="setCellValue" />               
            </dx-data-grid>
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

    ##### ASP.NET MVC Controls
    
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

The full project is available on GitHub: [DataGrid - How to hide/disable Edit Form items based on another item's value](https://github.com/DevExpress-Examples/DataGrid-How-to-hide-disable-certain-Edit-Form-items-based-on-another-item-s-value)

#####See Also#####
- [Customize Editors](/concepts/05%20Widgets/DataGrid/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors')
