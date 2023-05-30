If an editor does not pass its value to the DataGrid/TreeList and the component's DataSource when users enter/choose a value, check if any of the following cases applies to your implementation.

### A column's dataField is empty

Built-in column editors automatically write their values to the data row field specified in the column.[dataField](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField) property. Specify this property if you want to write an editor's value to a specific field.

If you want to implement an unbound column, specify column.[name](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#name) instead of column.[dataField](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField) and define the column.[setCellValue](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue) callback to write values in a custom way.

---
##### jQuery

    <!-- tab: index.js -->
    $('#gridContainer').dxDataGrid({
        // ...
        columns: [
            {   
                // ...
                setCellValue(newData, value, currentRowData) {
                    newData.anyField = value;
                }
            }
        ]
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column ...
            [setCellValue]="setCellValue"
        >
        </dxi-column>
     </dx-data-grid>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        export class AppComponent {
            setCellValue(newData, value, currentRowData) {
                newData.anyField = value;
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn ...
                :set-cell-value="setCellValue"
            />
        </DxDataGrid>
    </template>

    <script>
        import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
        
        export default {
            components: {
                DxDataGrid,
                DxColumn
            },
            // ...
            methods: {
                setCellValue(newData, value, currentRowData) {
                    newData.anyField = value;
                }
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    const setCellValue = (newData, value, currentRowData) => {
        newData.anyField = value;
    }

    function App() {
        render (
            <React.Fragment>
                <DataGrid ... >
                    <Column ...
                        setCellValue={setCellValue}
                    />
                </DataGrid>
            </React.Fragment>
        );
    }

    export default App;

---

### You use a form item's template to declare an editor

The [form](/Documentation/Guide/UI_Components/DataGrid/Editing/#User_Interaction/Form_Mode) and [popup](/Documentation/Guide/UI_Components/DataGrid/Editing/#User_Interaction/Popup_Mode) edit modes use the built-in Form component. Do not use simpleItem.[template](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template) to replace default editors in DataGrid or TreeList, use column.[editCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate) instead.

### You implement an editor in the editCellTemplate body

Call the **e.setValue** method available in the [template's argument](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate). This method notifies the DataGrid/TreeList that the value of a custom editor is changed. If you use a DevExtreme editor in this template, call **e.setValue** inside the [onValueChanged](/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#onValueChanged) event handler of this editor.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/",
    name: "Customize Editors in DataGrid"
}

### You implement an editor in the cellTemplate body

DataGrid/TreeList uses column.[cellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate) to display a cell value, not for editing. Use column.[editCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate) to place your custom editor in cells for editing. Refer to the previous paragraph for more information.

If you want to always display editors in a column, enable the column.[showEditorAlways](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#showEditorAlways) option. DataGrid displays an editor (or **editCellTemplate** if exists) and ignores **cellTemplate**.

### You handle the editorPreparing event and override onValueChanged

Call the built-in **onValueChanged** event handler for an editor or call the `e.setValue` method available in the event's argument.

---
##### jQuery

    <!-- tab: index.js -->
    $('#gridContainer').dxDataGrid({
        // ...
        onEditorPreparing(e) {
            if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
                const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                e.editorOptions.onValueChanged = function (args) {
                    e.setValue(args.value);
                    // or
                    defaultValueChangeHandler(args);
                }
            }
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... 
        (onEditorPreparing)="onEditorPreparing($event)"
    >
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        export class AppComponent {
            onEditorPreparing(e) {
                if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
                    const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function (args) {
                        e.setValue(args.value);
                        // or
                        defaultValueChangeHandler(args);
                    }
                }
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... 
            @editor-preparing="onEditorPreparing"
        />
    </template>

    <script>
        import { DxDataGrid } from 'devextreme-vue/data-grid';
        
        export default {
            components: {
                DxDataGrid
            },
            // ...
            methods: {
                onEditorPreparing(e) {
                    if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
                        const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                        e.editorOptions.onValueChanged = function (args) {
                            e.setValue(args.value);
                            // or
                            defaultValueChangeHandler(args);
                        }
                    }
                }
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid from 'devextreme-react/data-grid';

    onEditorPreparing = (e) => {
        if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
            const defaultValueChangeHandler = e.editorOptions.onValueChanged;
            e.editorOptions.onValueChanged = function (args) {
                e.setValue(args.value);
                // or
                defaultValueChangeHandler(args);
            }
        }
    }

    function App() {
        render (
            <React.Fragment>
                <DataGrid ... 
                    onEditorPreparing={onEditorPreparing}
                />
            </React.Fragment>
        );
    }

    export default App;

---

#####See Also#####
- [Customize Editors](/Documentation/Guide/UI_Components/DataGrid/Editing/#Customize_Editors)
- [onEditorPreparing - API](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditorPreparing)
- [Troubleshooting: A Drop-Down Editor Does Not Show Data](/Documentation/Guide/Troubleshooting/A_Drop-Down_Editor_Does_Not_Show_Data/)
