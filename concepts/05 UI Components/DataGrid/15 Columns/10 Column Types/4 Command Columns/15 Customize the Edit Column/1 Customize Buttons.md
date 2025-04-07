The column's [buttons](/api-reference/_hidden/dxDataGridColumn/buttons '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/') array allows you to customize the built-in editing buttons. It can contain configuration objects or button names if the buttons should be available but do not need customizations.

In the following code, a CSS class is added to the **Save** button. The **Edit** and **Delete** buttons should also be declared to display them:

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "buttons",
                buttons: [{
                    name: "save",
                    cssClass: "my-class"
                }, "edit", "delete"]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column type="buttons">
            <dxi-button
                name="save"
                cssClass="my-class">
            </dxi-button>
            <dxi-button name="edit"></dxi-button>
            <dxi-button name="delete"></dxi-button>
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
                <DxButton name="save" css-class="my-class" />
                <DxButton name="edit" />
                <DxButton name="delete" />
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

        render() {
            return (
                <DataGrid ... >
                    <Column type="buttons">
                        <Button name="save" cssClass="my-class" />
                        <Button name="edit" />
                        <Button name="delete" />
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
                    btns.Add().Name(GridColumnButtonName.Save).CssClass("my-class");
                    btns.Add().Name(GridColumnButtonName.Edit);
                    btns.Add().Name(GridColumnButtonName.Delete);
                });
        })
    )
    
---

You can also declare custom logic in the button configuration. For instance, the following code snippet demonstrates how to override the [onClick](/api-reference/_hidden/dxDataGridColumnButton/onClick.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/#onClick') default implementation for the **Edit** button.

---
##### jQuery  

    <!-- tab: index.js -->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "buttons",
                buttons: [{
                    name: "edit",
                    onClick: function(e) {
                        // Custom implementation goes here
                        e.component.editRow(e.row.rowIndex);
                        e.event.preventDefault();
                    }
                }, "delete"]
            }]
        });
    });

##### Angular  

    <!-- tab: app.component.html-->
    <dx-data-grid ... >
        <dxi-column type="buttons">
            <dxi-button
                name="edit"
                [onClick]="onEditButtonClick">
            </dxi-button>
            <dxi-button name="delete"></dxi-button>
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        onEditButtonClick(e) {
            // Custom implementation goes here
            e.component.editRow(e.row.rowIndex);
            e.event.preventDefault();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn type="buttons">
                <DxButton name="edit" @click="onEditButtonClick" />
                <DxButton name="delete" />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
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
            onEditButtonClick(e) {
                // Custom implementation goes here
                e.component.editRow(e.row.rowIndex);
                e.event.preventDefault();
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

    const onEditButtonClick = (e) => {
        // Custom implementation goes here
        e.component.editRow(e.row.rowIndex);
        e.event.preventDefault();
    }

    function App() {
        return (
            <DataGrid ... >
                <Column type="buttons">
                    <Button name="edit" onClick={onEditButtonClick} />
                    <Button name="delete" />
                </Column>
            </DataGrid>
        );
    }
    export default App;

---