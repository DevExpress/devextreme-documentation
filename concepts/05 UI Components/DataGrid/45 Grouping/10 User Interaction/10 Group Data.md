A user can group data in the DataGrid using a column header's context menu or the group panel.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Grouping Group Panel Context Menu](/images/DataGrid/visual_elements/groupPanel_contextMenu.png)

Assigning **true** to the **grouping**.[contextMenuEnabled](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping/contextMenuEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/#contextMenuEnabled') property adds grouping commands to the context menu. Setting the **groupPanel**.[visible](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/groupPanel/visible.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/groupPanel/#visible') property to **true** shows the group panel. The latter property also accepts the *"auto"* value that hides the group panel on small screens.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            grouping: {
                contextMenuEnabled: true
            },
            groupPanel: {
                visible: true   // or "auto"
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxo-grouping 
            [contextMenuEnabled]="true"> 
        </dxo-grouping>
        <dxo-group-panel 
            [visible]="true"> <!-- or "auto" -->
        </dxo-group-panel>
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
            <DxGrouping :context-menu-enabled="true"/>
            <DxGroupPanel :visible="true"/> <!-- or "auto" -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxDataGrid,
        DxGrouping,
        DxGroupPanel
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxGrouping,
            DxGroupPanel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Grouping,
        GroupPanel
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Grouping contextMenuEnabled={true} />
                    <GroupPanel visible={true} /> {/* or "auto" */}
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Grouping(grouping => grouping.ContextMenuEnabled(true))
        .GroupPanel(groupPanel => groupPanel.Visible(true)) //or "auto"
    )

---

You can prevent a user from dragging columns to the group panel, in which case it becomes an informative component only: a user can see the columns that participate in grouping, but cannot change them. Set the **groupPanel**.[allowColumnDragging](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/groupPanel/allowColumnDragging.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/groupPanel/#allowColumnDragging') property to **false** to activate this behavior. You might want to group data [initially](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/20%20API/10%20Initial%20and%20Runtime%20Grouping.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API/Initial_and_Runtime_Grouping') in this case.

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            groupPanel: {
                visible: true,
                allowColumnDragging: false
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-group-panel 
            [visible]="true"
            [allowColumnDragging]="false"> 
        </dxo-group-panel>
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
            <DxGroupPanel
                :visible="true"
                :allow-column-dragging="false"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxDataGrid,
        DxGroupPanel
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxGroupPanel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        GroupPanel
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <GroupPanel
                        visible={true}
                        allowColumnDragging={false}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().DataGrid()
        // ...
        .GroupPanel(groupPanel => groupPanel
            .Visible(true)
            .AllowColumnDragging(false)
        )
    )

---

If a specific column should never take part in grouping, set its [allowGrouping](/api-reference/_hidden/dxDataGridColumn/allowGrouping.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowGrouping') property to **false**. Such a column cannot be dragged to the group panel, and its context menu does not contain grouping commands.

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "id",
                allowGrouping: false
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxi-column 
            dataField="id" 
            [allowGrouping]="false">
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
            <DxColumn
                data-field="id"
                :allow-grouping="false"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxDataGrid,
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column
                        dataField="id"
                        allowGrouping={false} />
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Columns(columns => {
            columns.AddFor(m => m.id)
                .AllowGrouping(false);
        })
    )

---

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordGrouping/",
    name: "Local Grouping"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordGrouping/",
    name: "Remote Grouping"
}
