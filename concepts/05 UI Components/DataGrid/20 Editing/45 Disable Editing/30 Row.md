If you want to disable data editing within a specific row, take the following steps:

1. Handle the DataGrid's [onEditingStart](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditingStart) event. 
2. Check the **data** parameter's values. If you want don't want users to edit this row, assign **true** to **e.cancel**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            onEditingStart(e) {
                e.cancel = e.data.Position === "CEO";
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid 
        // ...
        (onEditingStart)="onEditingStart($event)"
    >   
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onEditingStart(e) {
            e.cancel = e.data.Position === "CEO";
        }
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
        <DxDataGrid 
            @editing-start="onEditingStart"
        >
        </DxDataGrid>
    </template>

    <script>
    import {
        DxDataGrid,
        // ...
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            // ...
        },
        methods: {
            onEditingStart(e) {
                e.cancel = e.data.Position === "CEO";
            }
        }
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from "react";
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid } from 'devextreme-react/data-grid';

    function App() {
        // ...
        const onEditingStart = useCallback((e) => {
           e.cancel = e.data.Position === "CEO";
        }, []);

        return (
            <DataGrid 
                onEditingStart={onEditingStart}
            >
            </DataGrid>
        );
    }

    export default App;

---

The DataGrid's [editing mode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode) defines whether to display the **Edit** button opposite every row. To hide this button for the required rows, use the button's [visible](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/#visible) property. Assign a function to this property and check a row's data in a similar manner as in the DataGrid's [onEditingStart](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditingStart) event.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [{
            type: "buttons",
            buttons: [{
                name: "edit",
                visible: function(e) {
                    return e.row.data.Position !== "CEO";
                }
            }, "delete"]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column type="buttons">
            <dxi-button name="edit" [visible]="hideEditButton" ></dxi-button>
            <dxi-button name="delete"></dxi-button>
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hideEditButton(e) {
            return e.row.data.Position !== "CEO";
        }
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
            <DxColumn type="buttons">
                <DxButton name="edit" :visible="hideEditButton" />
                <DxButton name="delete" />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import {
        DxDataGrid,
        // ...
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxButton,
            // ...
        },
        methods: {
            hideEditButton(e) {
                return e.row.data.Position !== "CEO";
            }
        }
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from "react";
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, { Column, Button } from 'devextreme-react/data-grid';

    function App() {
        // ...
        const hideEditButton = useCallback((e) => {
           return e.row.data.Position !== "CEO";
        }, []);

        return (
            <DataGrid ... >
                <Column type="buttons">
                    <Button name="edit" visible={hideEditButton} />
                    <Button name="delete" />
                </Column>
            </DataGrid>
        );
    }

    export default App;

---

#####See Also#####
- [Customize the Edit Column](/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Command_Columns/#Customize_the_Edit_Column)

