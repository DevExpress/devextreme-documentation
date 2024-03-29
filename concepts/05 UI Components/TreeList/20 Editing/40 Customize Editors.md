The columns's [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType') defines a cell's editor that can be configured using the [editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#editorOptions') object. However, this object cannot be used to change the editor's type or **onValueChanged** event handler. Instead, use the [onEditorPreparing](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onEditorPreparing') function as shown in the following code. The function's parameter provides the **editorName** and **editorOptions** fields for changing the used editor and its configuration.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ...
        (onEditorPreparing)="onEditorPreparing($event)">
        <dxi-column
            dataField="Note"
            [editorOptions]="{ height: 200 }">
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule, DxTextAreaModule } from "devextreme-angular";
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
            DxTreeListModule,
            DxTextAreaModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            @editor-preparing="onEditorPreparing">
            <DxColumn
                data-field="Note"
                :editor-options="textAreaOptions"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn
    } from 'devextreme-vue/tree-list';
    import 'devextreme-vue/text-area';

    export default {
        components: {
            DxTreeList,
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

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column
    } from 'devextreme-react/tree-list';
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
                <TreeList ...
                    onEditorPreparing={this.onEditorPreparing}>
                    <Column
                        dataField="Note"
                        editorOptions={this.textAreaOptions}
                    />
                </TreeList>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
        // ...
        .Columns(cols => {
            // ...
            cols.Add().DataField("Note")
                .EditorOptions(new { height = 200 });
        })
        .OnEditorPreparing("treeList_editorPreparing")
    )

    <script type="text/javascript">
        function treeList_editorPreparing(e) {
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

Implement the column's [editCellTemplate](/api-reference/_hidden/dxTreeListColumn/editCellTemplate.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#editCellTemplate') for more extensive customization. In this template, you should specify your custom component's appearance and behavior in full. The following code uses the template to substitute the [Switch](/concepts/05%20UI%20Components/Switch/00%20Getting%20Started%20with%20Switch '/Documentation/Guide/UI_Components/Switch/Getting_Started_with_Switch/') UI component for a default editor.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
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
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule, DxSwitchModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        setEditedValue (valueChangedEventArg, cellInfo) {
            cellInfo.setValue(valueChangedEventArg.value);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            DxSwitchModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
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
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn,
        DxEditing
    } from 'devextreme-vue/tree-list';

    import DxSwitch from 'devextreme-vue/switch';

    export default {
        components: {
            DxTreeList,
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

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column,
        Editing
    } from 'devextreme-react/tree-list';

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
                <TreeList ... >
                    <Column
                        dataField="isChecked"
                        editCellRender={this.renderSwitch}
                    />
                    <Editing
                        mode="batch"
                        allowUpdating={true}
                    />
                </TreeList>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
        // ...
        .Columns(cols => {
            // ...
            cols.Add().DataField("isChecked")
                .EditCellTemplate(new TemplateName("edit-cells""));
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

Editors are displayed in cells in the normal state too if you set the **columns**.[showEditorAlways](/api-reference/_hidden/GridBaseColumn/showEditorAlways.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#showEditorAlways') property to **true**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
        <dxi-column
            dataField="Hidden"
            dataType="boolean"
            [showEditorAlways]="true">
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxColumn
                data-field="Hidden"
                data-type="boolean"
                :show-editor-always="true"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <Column
                        dataField="Hidden"
                        dataType="boolean"
                        showEditorAlways={true}
                    />
                </TreeList>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
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
- [Columns - Customize Cells](/concepts/05%20UI%20Components/TreeList/10%20Columns/40%20Customize%20Cells '/Documentation/Guide/UI_Components/TreeList/Columns/Customize_Cells/')
- [Create a Column with Custom Buttons](/concepts/05%20UI%20Components/TreeList/10%20Columns/10%20Column%20Types/4%20Command%20Columns/30%20Create%20a%20Column%20with%20Custom%20Buttons.md '/Documentation/Guide/UI_Components/TreeList/Columns/Column_Types/Command_Columns/#Create_a_Column_with_Custom_Buttons')
