The column's [buttons](/api-reference/_hidden/dxDataGridColumn/buttons '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/') array allows you to customize the built-in editing buttons. It can contain configuration objects or button names if the buttons should be available but do not need customizations.

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