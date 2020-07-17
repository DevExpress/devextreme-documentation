The columns's [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType') defines a cell's editor that can be configured using the [editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions') object. However, this object cannot be used to change the editor's type or **onValueChanged** event handler. Instead, use the [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPreparing') function as shown in the following code. The function's parameter provides the **editorName** and **editorOptions** fields for changing the used editor and its configuration.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Note",
                editorOptions: {
                    height: 200
                }
            }, // ...
            ],
            onEditorPreparing: function(e) {
                if (e.dataField == "Note" && e.parentType === "dataRow") {
                    const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                    e.editorName = "dxTextArea"; // Change the editor's type
                    e.editorOptions.onValueChanged = function (args) {  // Override the default handler
                        // ...
                        // Custom commands go here
                        // ...
                        // If you want to modify the editor value, call the setValue function:
                        // e.setValue(newValue);
                        // Otherwise, call the default handler:
                        defaultValueChangeHandler(args);
                    }
                }
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        (onEditorPreparing)="onEditorPreparing($event)">
        <dxi-column
            dataField="Note"
            [editorOptions]="{ height: 200 }">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule, DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onEditorPreparing (e) {
            if (e.dataField == "Note" && e.parentType === "dataRow") {
                const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                e.editorName = "dxTextArea"; // Change the editor's type
                e.editorOptions.onValueChanged = function (args) {  // Override the default handler
                    // ...
                    // Custom commands go here
                    // ...
                    // If you want to modify the editor value, call the setValue function:
                    // e.setValue(newValue);
                    // Otherwise, call the default handler:
                    defaultValueChangeHandler(args);
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxTextAreaModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @editor-preparing="onEditorPreparing">
            <DxColumn
                data-field="Note"
                :editor-options="textAreaOptions"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';
    import 'devextreme-vue/text-area';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        data() {
            return {
                textAreaOptions: { height: 200 }
            }
        },
        methods: {
            onEditorPreparing(e) {
                if(e.dataField == "Note" && e.parentType === "dataRow") {
                    const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                    e.editorName = "dxTextArea"; // Change the editor's type
                    e.editorOptions.onValueChanged = function (args) {  // Override the default handler
                        // ...
                        // Custom commands go here
                        // ...
                        // If you want to modify the editor value, call the setValue function:
                        // e.setValue(newValue);
                        // Otherwise, call the default handler:
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';
    import 'devextreme-react/text-area';

    class App extends React.Component {
        textAreaOptions = { height: 200 };
        onEditorPreparing(e) {
            if(e.dataField == "Note" && e.parentType === "dataRow") {
                const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                e.editorName = "dxTextArea"; // Change the editor's type
                e.editorOptions.onValueChanged = function (args) {  // Override the default handler
                    // ...
                    // Custom commands go here
                    // ...
                    // If you want to modify the editor value, call the setValue function:
                    // e.setValue(newValue);
                    // Otherwise, call the default handler:
                    defaultValueChangeHandler(args);
                }
            }
        }

        render() {
            return (
                <DataGrid ...
                    onEditorPreparing={this.onEditorPreparing}>
                    <Column
                        dataField="Note"
                        editorOptions={this.textAreaOptions}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Columns(cols => {
            // ...
            cols.Add().DataField("Note")
                .EditorOptions(new { height = 200 });
        })
        .OnEditorPreparing("dataGrid_editorPreparing")
    )

    <script type="text/javascript">
        function dataGrid_editorPreparing(e) {
            if (e.dataField == "Note" && e.parentType === "dataRow") {
                const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                e.editorName = "dxTextArea"; // Change the editor's type
                e.editorOptions.onValueChanged = function (args) {  // Override the default handler
                    // ...
                    // Custom commands go here
                    // ...
                    // If you want to modify the editor value, call the setValue function:
                    // e.setValue(newValue);
                    // Otherwise, call the default handler:
                    defaultValueChangeHandler(args);
                }
            }
        }
    </script>
    
---

Implement the column's [editCellTemplate](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate') for more extensive customization. In this template, you should specify your custom component's appearance and behavior in full. The following code uses the template to substitute the [Switch](/concepts/05%20Widgets/Switch/00%20Overview.md '/Documentation/Guide/Widgets/Switch/Overview/') widget for a default editor. This configuration may be useful in [batch editing mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/30%20Batch%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Batch_Mode').

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "isChecked",
                editCellTemplate: function(cellElement, cellInfo) {
                    $("<div />").dxSwitch({
                        width: 50,
                        switchedOnText: "YES",
                        switchedOffText: "NO",
                        value: cellInfo.value,
                        onValueChanged: function(e) {
                            cellInfo.setValue(e.value);
                        }
                    }).appendTo(cellElement);
                }
            }],
            editing: {
                mode: "batch",
                allowUpdating: true
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="isChecked"
            editCellTemplate="editCellTemplate">
        </dxi-column>
        <div *dxTemplate="let cellInfo of 'editCellTemplate'">
            <dx-switch
                [width]="50"
                switchedOnText="YES"
                switchedOffText="NO"
                [(value)]="cellInfo.value"
                (onValueChanged)="setEditedValue($event, cellInfo)">
            </dx-switch>
        </div>
        <dxo-editing mode="batch" [allowUpdating]="true"></dxo-editing>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule, DxSwitchModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        setEditedValue (valueChangedEventArg, cellInfo) {
            cellInfo.setValue(valueChangedEventArg.value);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxSwitchModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="isChecked"
                edit-cell-template="switch"
            />
            <template #switch="{ data }">
                <DxSwitch
                    :width="50"
                    switched-on-text="YES"
                    switched-off-text="NO"
                    :value="data.value"
                    @value-changed="setEditedValue($event, data)"
                />
            </template>
            <DxEditing
                mode="batch"
                :allow-updating="true"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        DxEditing
    } from 'devextreme-vue/data-grid';

    import DxSwitch from 'devextreme-vue/switch';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxEditing,
            DxSwitch
        },
        methods: {
            setEditedValue(valueChangedEventArg, cellInfo) {
                cellInfo.setValue(valueChangedEventArg.value);
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

    import Switch from 'devextreme-react/switch';

    class App extends React.Component {
        renderSwitch(cellInfo) {
            const setEditedValue = valueChangedEventArg => {
                cellInfo.setValue(valueChangedEventArg.value);
            }
            return (
                <Switch
                    width={50}
                    switchedOnText="YES"
                    switchedOffText="NO"
                    defaultValue={cellInfo.value}
                    onValueChanged={setEditedValue}
                />
            )
        }

        render() {
            return (
                <DataGrid ... >
                    <Column
                        dataField="isChecked"
                        editCellRender={this.renderSwitch}
                    />
                    <Editing
                        mode="batch"
                        allowUpdating={true}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Columns(cols => {
            // ...
            cols.Add().DataField("isChecked")
                .EditCellTemplate(new TemplateName("edit-cells"));
        })
        .Editing(m => m.Mode(GridEditMode.Batch).AllowUpdating(true))
    )

    @using (Html.DevExtreme().NamedTemplate("edit-cells")) {
        @(Html.DevExtreme().Switch()
            .Width(50)
            .SwitchedOnText("YES")
            .SwitchedOffText("NO")
            .Value(new JS("value"))
            .OnValueChanged("function(e) { setValue(e.value) }")
        )
    }
    
---

Editors are displayed in cells in the normal state too if you set the **columns**.[showEditorAlways](/api-reference/_hidden/GridBaseColumn/showEditorAlways.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#showEditorAlways') option to **true**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Hidden",
                dataType: "boolean",
                showEditorAlways: true
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Hidden"
            dataType="boolean"
            [showEditorAlways]="true">
        </dxi-column>
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
            <DxColumn
                data-field="Hidden"
                data-type="boolean"
                :show-editor-always="true"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column
                        dataField="Hidden"
                        dataType="boolean"
                        showEditorAlways={true}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Columns(cols => {
            // ...
            cols.Add().DataField("Hidden")
                .DataType(GridColumnDataType.Boolean)
                .ShowEditorAlways(true);
        })
    )
    
---

#####See Also#####
- [Columns - Customize Cells](/concepts/05%20Widgets/DataGrid/15%20Columns/40%20Customize%20Cells '/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/')
- [Create a Column with Custom Buttons](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/30%20Create%20a%20Column%20with%20Custom%20Buttons.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/#Create_a_Column_with_Custom_Buttons')
