Add and configure custom buttons in the **columns[]**.[buttons](/api-reference/_hidden/dxDataGridColumn/buttons '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/') array. The component passes a [ColumnButtonClickEvent](/Documentation/ApiReference/UI_Components/dxDataGrid/Types/ColumnButtonClickEvent/) parameter to custom button [onClick](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/#onClick) handlers:

---

##### jQuery  

    <!--JavaScript-->
    let savedRows = [];

    $(function () {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                type: "buttons",
                buttons: ["edit", "delete", {
                    text: "Save",
                    icon: "add",
                    hint: "Save Row",
                    onClick: function (e) {
                        savedRows.push(e.row.data);
                    }
                }]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column type="buttons">
            <dxi-button name="edit"></dxi-button>
            <dxi-button name="delete"></dxi-button>
            <dxi-button
                text="Save"
                icon="add"
                hint="Save Row"
                [onClick]="saveRow">
            </dxi-button>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    
    export class AppComponent {
        savedRows: [] = [];

        saveRow (e) {
            this.savedRows.push(e.row.data);
        }
    }
    @NgModule({
        imports: [
            DxDataGridModule
        ],
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn type="buttons">
                <DxButton name="edit" />
                <DxButton name="delete" />
                <DxButton 
                    text="Save"
                    icon="add"
                    hint="Save Row"
                    :on-click="saveRow"
                />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import { ref } from 'vue';
    import 'devextreme/dist/css/dx.light.css';
    import DxDataGrid, { DxColumn, DxButton } from 'devextreme-vue/data-grid';

    const savedRows = ref([]);

    const saveRow = (e) => {
        savedRows.value.push(e.row.data);
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import DataGrid, { Column, Button } from 'devextreme-react/data-grid';

    function App () {
        const [savedRows, setSavedRows] = useState([]);

        const saveRow = useCallback((e) => {
            setSavedRows((prevState) => {return prevState.concat(e.row.data)});
        }, [])

        return (
            <DataGrid ... >
                <Column type="buttons">
                    <Button name="edit" />
                    <Button name="delete" />
                    <Button
                        text="Save"
                        icon="add"
                        hint="Save Row"
                        onClick={saveRow}
                    />
                </Column>
            </DataGrid>
        );
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
                    btns.Add()
                        .Text("My Command")
                        .Icon("/url/to/my/icon.ico")
                        .Hint("My Command")
                        .OnClick("myCommand");
                });
        })
    )

    <script type="text/javascript">
        function myCommand(e) {
            // Execute your command here
        }
    </script>
    
---

Specify the **buttons[]**.[template](/api-reference/_hidden/dxDataGridColumnButton/template.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/#template') property to customize button appearance.

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "buttons",
                buttons: ["edit", "delete", {
                    template: function (e) {
                        // Specify custom markup here
                    }
                }]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column type="buttons">
            <dxi-button name="edit"></dxi-button>
            <dxi-button name="delete"></dxi-button>
            <dxi-button template="myCommand">
                <div *dxTemplate="let data of 'myCommand'">
                    <!-- Declare custom markup here -->
                </div>
            </dxi-button>
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
                <DxButton>
                    <template #default>
                        <!-- Declare custom markup here -->
                    </template>
                </DxButton>
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
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

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column,
        Button
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        renderMyCommand() {
            return (
                {/* Declare custom markup here */}
            );
        }

        render() {
            return (
                <DataGrid ... >
                    <Column type="buttons">
                        <Button name="edit" />
                        <Button name="delete" />
                        <Button render={this.renderMyCommand} />
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
                    btns.Add()
                        .Template(@<text>
                            @* Declare custom markup here *@
                        </text>);
                });
        })
    )
    
---
