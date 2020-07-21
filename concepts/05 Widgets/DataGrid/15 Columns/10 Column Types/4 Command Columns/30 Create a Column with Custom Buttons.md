The following code shows how to add a command column with custom [buttons](/api-reference/_hidden/dxDataGridColumn/buttons '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/'). Note that the edit column should be declared explicitly because a custom command column replaces it.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "buttons",
                buttons: ["edit", "delete"]
            }, 
            "firstName",
            "lastName", {
                type: "buttons",
                buttons: [
                    // Declare and configure custom buttons here
                ]
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column type="buttons" [buttons]="['edit', 'delete']"></dxi-column>
        <dxi-column dataField="firstName"></dxi-column>
        <dxi-column dataField="lastName"></dxi-column>
        <dxi-column type="buttons">
            <dxi-button ... ></dxi-button>
            <!-- Declare and configure custom buttons here -->
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
            <DxColumn type="buttons">
                <DxButton name="edit" />
                <DxButton name="delete" />
            </DxColumn>
            <DxColumn data-field="firstName" />
            <DxColumn data-field="lastName" />
            <DxColumn type="buttons">
                <DxButton ... />
                <!-- Declare and configure custom buttons here -->
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        DxButton
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxButton
        },
        data() {
            return {
                // ...
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
        Button
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column type="buttons">
                        <Button name="edit" />
                        <Button name="delete" />
                    </Column>
                    <Column dataField="firstName" />
                    <Column dataField="lastName" />
                    <Column type="buttons">
                        <Button ... />
                        {/* Declare and configure custom buttons here */}
                    </Column>
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Columns(cols => {
            cols.Add()
                .Type(GridCommandColumnType.Buttons)
                .Buttons(btns => {
                    btns.Add().Name(GridColumnButtonName.Edit);
                    btns.Add().Name(GridColumnButtonName.Delete);

                });
            cols.Add().DataField("firstName");
            cols.Add().DataField("lastName");
            cols.Add()
                .Type(GridCommandColumnType.Buttons)
                .Buttons(btns => {
                    btns.Add() ...
                    @* Declare and configure custom buttons here *@
                });
        })
    )
    
---
