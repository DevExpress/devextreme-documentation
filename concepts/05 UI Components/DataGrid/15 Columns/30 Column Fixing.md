In some cases, the UI component contains so many columns that they cause horizontal scrolling. If specific columns should be on screen constantly regardless of how far the UI component is scrolled, a user can fix them.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid ColumnFixing](/images/DataGrid/visual_elements/column_fixing.png)

To allow this, set the **columnFixing**.[enabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnFixing/#enabled') property to **true**. If a user should never fix (or unfix) a specific column, set its [allowFixing](/api-reference/_hidden/GridBaseColumn/allowFixing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowFixing') property to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columnFixing: {
                enabled: true
            },
            columns: [{
                // ...
                allowFixing: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-column-fixing [enabled]="true"></dxo-column-fixing>
        <dxi-column [allowFixing]="false" ... ></dxi-column>
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
            <DxColumnFixing :enabled="true" />
            <DxColumn :allow-fixing="false" ... />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        DxColumnFixing
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxColumnFixing
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column,
        ColumnFixing
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <ColumnFixing enabled={true} />
                    <Column allowFixing={false} ... />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

If a column should be fixed initially, assign **true** to its [fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#fixed') property and specify its target position in the UI component using the [fixedPosition](/api-reference/_hidden/GridBaseColumn/fixedPosition.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#fixedPosition') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                // ...
                fixed: true,
                fixedPosition: "left"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column [fixed]="true" fixedPosition="left" ... ></dxi-column>
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
            <DxColumn :fixed="true" fixed-position="left" ... />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxColumnFixing
        },
        // ...
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
                    <Column fixed={true} fixedPosition="left" ... />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

[note] Once you assign **true** to the **columnFixing**.**enabled** or **fixed** property, [command columns](/concepts/05%20UI%20Components/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Command_Columns/') become fixed automatically.

Since column fixing is effective only with horizontal scrolling, using it makes sense only if the [columnAutoWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnAutoWidth.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnAutoWidth') property is **false** and when the total width of columns exceeds the container width. Otherwise, fixed columns behave just like regular ones.

#####See Also#####
- [Adaptability](/concepts/05%20UI%20Components/DataGrid/15%20Columns/50%20Adaptability '/Documentation/Guide/UI_Components/DataGrid/Columns/Adaptability/')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource)