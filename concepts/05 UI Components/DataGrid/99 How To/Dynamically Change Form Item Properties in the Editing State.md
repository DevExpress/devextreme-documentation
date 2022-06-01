The following instructions explain how to dynamically change a form item's properties based on another form editor's value:

1. **Specify the [form.customizeItem](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/customizeItem.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#customizeItem') callback function**       
This function allows you to change form item properties dynamically. Within this function, [get the index of the row being edited](/api-reference/10%20UI%20Components/GridBase/3%20Methods/getRowIndexByKey(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getRowIndexByKeykey') and use this index to [get the cell value](/api-reference/10%20UI%20Components/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cellValuerowIndex_dataField') that should affect form item properties.

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
                                let editRowKey = gridInstance.option('editing.editRowKey');
                                let index = gridInstance.getRowIndexByKey(editRowKey);
                                index = index === -1 ? 0 : index;
                                // Display "Home Address" if "AddressRequired" is true
                                let isVisible = gridInstance.cellValue(index, "AddressRequired");
                                item.visible = isVisible;
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
                    let editRowKey = gridInstance.option('editing.editRowKey');
                    let index = gridInstance.getRowIndexByKey(editRowKey);
                    index = index === -1 ? 0 : index;
                    // Display "Home Address" if "AddressRequired" is true
                    let isVisible = gridInstance.cellValue(index, "AddressRequired");
                    item.visible = isVisible;
                }
            }
        }
 
    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxDataGrid :ref="gridRefName" ... >
                <!-- ... -->
                <DxEditing ... >
                    <DxForm :customize-item="customizeItem">
                        <!-- ... -->
                    </DxForm>
                </DxEditing>    
            </DxDataGrid>
        </template>

        <script>
        // ...
        export default {
            // ...
            methods: {
                customizeItem(item) {
                    if(item && item.itemType === "group" && item.caption === "Home Address") {
                        // Get the index of the row being edited; 0 if it is a new row
                        let editRowKey = gridInstance.option('editing.editRowKey');
                        let index = gridInstance.getRowIndexByKey(editRowKey);
                        index = index === -1 ? 0 : index;
                        // Display "Home Address" if "AddressRequired" is true
                        let isVisible = gridInstance.cellValue(index, "AddressRequired");
                        item.visible = isVisible;
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
                    let editRowKey = gridInstance.option('editing.editRowKey');
                    let index = gridInstance.getRowIndexByKey(editRowKey);
                    index = index === -1 ? 0 : index;
                    // Display "Home Address" if "AddressRequired" is true
                    let isVisible = gridInstance.cellValue(index, "AddressRequired");
                    item.visible = isVisible;
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
                    // Get the index of the row being edited; 0 if it is a new row
                    let editRowKey = gridInstance.option('editing.editRowKey');
                    let index = gridInstance.getRowIndexByKey(editRowKey);
                    index = index === -1 ? 0 : index;
                    // Display "Home Address" if "AddressRequired" is true
                    let isVisible = gridInstance.cellValue(index, "AddressRequired");
                    item.visible = isVisible;
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
- [Customize Editors](/concepts/05%20UI%20Components/DataGrid/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/UI_Components/DataGrid/Editing/#Customize_Editors')
