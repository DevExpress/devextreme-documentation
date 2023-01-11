To disable data editing within a specific row, follow the steps below:

1. Handle the DataGrid's [onEditingStart](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onEditingStart.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditingStart') event. 
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

DataGrid's [editing mode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode') defines whether to display an **Edit** button opposite every row. To hide this button, use the button's [visible](/api-reference/_hidden/dxDataGridColumnButton/visible.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/#visible') property. Assign a callback to this property and check row data within this function.

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
            }],
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
- [Customize the Edit Column](/concepts/05%20UI%20Components/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/15%20Customize%20the%20Edit%20Column/0%20Customize%20the%20Edit%20Column.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Command_Columns/#Customize_the_Edit_Column')

