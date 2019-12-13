The following instructions explain how to dynamically change an editor's options based on another editor's value:

1. **Implement the [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPreparing') event handler**  
Use this handler's **editorOptions** parameter to change editor options. The code below changes the **disabled** option of the `LastName` editor if the `FirstName` editor has no entered value:

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            $("#dataGridСontainer").dxDataGrid({ 
                // ...
                columns: [{
                    dataField: "FirstName"
                }, {
                    dataField: "LastName"
                }],
                editing: {
                    allowUpdating: true,
                    allowAdding: true
                },
                onEditorPreparing: function(e) {
                    if (e.dataField === "LastName" && e.parentType === "dataRow") {
                        e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
                    }
                }
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-data-grid ...
            (onEditorPreparing)="onEditorPreparing($event)">
            <dxi-column dataField="FirstName"></dxi-column>
            <dxi-column dataField="LastName"></dxi-column>
            <dxo-editing
                [allowAdding]="true"
                [allowUpdating]="true">
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
            // ...
            onEditorPreparing(e) {
                if (e.dataField === "LastName" && e.parentType === "dataRow") {
                    e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
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
            <dx-data-grid ...
                @editor-preparing="onEditorPreparing">
                <dx-column data-field="FirstName" />
                <dx-column data-field="LastName" />
                <dx-editing
                    :allow-updating="true"
                    :allow-adding="true">
                />
            </dx-data-grid>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import DxDataGrid, { 
            DxColumn,
            DxEditing
         } from "devextreme-vue/data-grid";

        export default {
            components: {              
                DxDataGrid,
                DxColumn,  
                DxEditing
            },
            data() {
                return {
                    // ...            
                }
            },
            methods: {
                onEditorPreparing(e) {
                    if(e.dataField === "LastName" && e.parentType ==="dataRow"){
                        e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
                    }
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
            Editing
        } from 'devextreme-react/data-grid';

        class App extends React.Component {        
            render() {
                return (
                    <DataGrid ...
                        onEditorPreparing={this.onEditorPreparing}>
                        <Column dataField="FirstName" />
                        <Column dataField="LastName" />  
                        <Editing
                            allowAdding={true}
                            allowUpdating={true}
                        />            
                    </DataGrid>
                );
            }
            onEditorPreparing = (e) => {
                if(e.dataField === "LastName" && e.parentType ==="dataRow"){
                  e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
                }
            }          
        }
        export default App;

    ##### ASP.NET MVC Controls

        <!--Razor C#-->
        @(Html.DevExtreme().DataGrid()
            // ...
            .OnEditorPreparing("onEditorPreparing")
            .Columns(cols => {
                cols.Add().DataField("FirstName");
                cols.Add().DataField("LastName");   
            })
            .Editing(e => e
                .AllowUpdating(true)
                .AllowAdding(true)                   
            )
        })

        <script type="text/javascript">
            function onEditorPreparing(e) {
                 if (e.dataField === "LastName" && e.parentType === "dataRow") {
                    e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
                }
            }          
        </script>

    ---

1. **Specify the [setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#setCellValue') callback function**   
Specify **setCellValue** for those columns whose editors should affect other editors. In the function, call its default implementation as shown below. This call causes all editors to rerender themselves with the new options.

    ---
    #####jQuery

        <!--JavaScript-->
        $(function() {
            $("#dataGridСontainer").dxDataGrid({ 
                columns: [{ 
                    dataField: "FirstName", 
                    setCellValue: function(newData, value) {
                        this.defaultSetCellValue(newData, value);
                    }
                }, {
                    dataField: "LastName"
                }],
                // ...
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-data-grid ... >
            <dxi-column dataField="FirstName" [setCellValue]="setCellValue"></dxi-column>
            <dxi-column dataField="LastName"></dxi-column>
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
                <dx-column data-field="FirstName" :set-cell-value="setCellValue" />
                <dx-column data-field="LastName" />
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
                        <Column dataField="FirstName" setCellValue={this.setCellValue} />
                        <Column dataField="LastName" /> 
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
                cols.Add().DataField("FirstName")
                    .SetCellValue("setCellValue");
                cols.Add().DataField("LastName");   
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
