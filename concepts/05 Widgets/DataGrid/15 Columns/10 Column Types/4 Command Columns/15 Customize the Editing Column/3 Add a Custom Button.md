Add an object to the [buttons](/api-reference/_hidden/dxDataGridColumn/buttons '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/') array and specify the button's options in it...

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "buttons",
                buttons: ["edit", "delete", {
                    text: "My Command",
                    icon: "/url/to/my/icon.ico",
                    hint: "My Command",
                    onClick: function (e) {
                        // Execute your command here
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
                text="My Command"
                icon="/url/to/my/icon.ico"
                hint="My Command"
                [onClick]="myCommand">
            </dxi-button>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        myCommand (e) {
            // Execute your command here
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
        <dx-data-grid ... >
            <dx-column type="buttons">
                <dx-button name="edit" />
                <dx-button name="delete" />
                <dx-button 
                    text="My Command"
                    icon="/url/to/my/icon.ico"
                    hint="My Command"
                    :on-click="myCommand"
                />
            </dx-column>
        </dx-data-grid>
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
        },
        methods: {
            myCommand(e) {
                // Execute your command here
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
        myCommand (e) {
            // Execute your command here
        }

        render() {
            return (
                <DataGrid ... >
                    <Column type="buttons">
                        <Button name="edit" />
                        <Button name="delete" />
                        <Button
                            text="My Command"
                            icon="/url/to/my/icon.ico"
                            hint="My Command"
                            onClick={this.myCommand}
                        />
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

... or render the button with custom appearance using a [template](/api-reference/_hidden/dxDataGridColumnButton/template.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/#template'):

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
            <dxi-button>
                <!-- Declare custom markup here -->
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
        <dx-data-grid ... >
            <dx-column type="buttons">
                <dx-button name="edit" />
                <dx-button name="delete" />
                <dx-button #default>
                    <!-- Declare custom markup here -->
                </dx-button>
            </dx-column>
        </dx-data-grid>
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
                        <Button>
                            {/* Declare custom markup here */}
                        </Button>
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