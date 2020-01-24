Editing buttons' visibility depends on the allowed editing capabilities. For example, the **Delete** button is visible if users can delete rows. You can configure the editing capabilities in the [editing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/') object. 

The **Edit** and **Delete** buttons can be hidden by omitting them when declaring the [buttons](/api-reference/_hidden/dxDataGridColumn/buttons '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/') array. However, users can still use the keyboard to edit and delete.

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true,
                allowDeleting: true
            },
            columns: [{
                type: "buttons",
                buttons: ["edit"] // The Delete button is hidden
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowDeleting]="true">
        </dxo-editing>
        <dxi-column type="buttons">
            <dxi-button name="edit"></dxi-button>
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
            <DxEditing
                :allow-updating="true"
                :allow-deleting="true"
            />
            <DxColumn type="buttons">
                <DxButton name="edit" />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxEditing,
        DxColumn,
        DxButton
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxEditing,
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
        Editing,
        Column,
        Button
    } from 'devextreme-react/data-grid';

    class App extends React.Component {

        render() {
            return (
                <DataGrid ... >
                    <Editing
                        allowUpdating={true}
                        allowDeleting={true}
                    />
                    <Column type="buttons">
                        <Button name="edit" />
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
        .Editing(ed => ed
            .AllowUpdating(true)
            .AllowDeleting(true)
        )
        .Columns(cols => {
            cols.Add()
                .Type(GridCommandColumnType.Buttons)
                .Buttons(btns => {
                    btns.Add().Name(GridColumnButtonName.Edit);
                });
        })
    )
    
---

You can hide an editing button or disable editing capabilities for specific rows. Use functions to specify the button's [visible](/api-reference/_hidden/dxDataGridColumnButton/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/#visible') option or the **editing**.[allowUpdating](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowUpdating')/[allowDeleting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowDeleting') option. Refer to the options' descriptions for examples.