When the total width of columns exceeds component width, the DataGrid either truncates column cell text or adds horizontal scrolling. As an alternative, the component can hide one or several columns to prevent horizontal scrolling and display cell text in full. To enable this feature, set the [columnHidingEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnHidingEnabled') property to **true**.

Each column has a unique default hiding priority. The rightmost column has the priority of 0. This value is incremented by 1 for columns from right to left; the column with the lowest priority is hidden first.

You can use the **columns[]**.[hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#hidingPriority') property to specify custom hiding priorities for those columns that you want to hide. Other columns will never be hidden. This will override the default behavior described above. In this case, the **columnHidingEnabled** property can be omitted.


---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columnHidingEnabled: true,
            // These columns will be hidden in the following order:
            columns: [{
                // ...
                hidingPriority: 0 // first
            }, {
                // ...
                hidingPriority: 1 // second 
            }, {
                // ...
                hidingPriority: 2 // third
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... 
        [columnHidingEnabled]="true">
        <!-- These columns will be hidden in the following order: -->
        <dxi-column [hidingPriority]="0" ... ></dxi-column> <!-- first -->
        <dxi-column [hidingPriority]="1" ... ></dxi-column> <!-- second -->
        <dxi-column [hidingPriority]="2" ... ></dxi-column> <!-- third -->
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
        <DxDataGrid ...
            :column-hiding-enabled="true">
            <!-- These columns will be hidden in the following order: -->
            <DxColumn :hiding-priority="0" ... /> <!-- first -->
            <DxColumn :hiding-priority="1" ... /> <!-- second -->
            <DxColumn :hiding-priority="2" ... /> <!-- third -->
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
            DxColumn
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

    export default function App() {
	    return (
            <DataGrid ...
                columnHidingEnabled={true}>
                {/* These columns will be hidden in the following order: */}
                <Column defaultHidingPriority={0} ... /> {/* first */}
                <Column defaultHidingPriority={1} ... /> {/* second */}
                <Column defaultHidingPriority={2} ... /> {/* third */}
            </DataGrid>
        );
    }
    
---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridAdaptabilityOverview/"
}

[note]

If your DataGrid is inside a resizable container, you must call the [updateDimensions()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/updateDimensions().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#updateDimensions') method on each container resize to rerender the component:

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("updateDimensions");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        renderDataGrid () {
            this.dataGrid.instance.updateDimensions();
        };
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
        <DxDataGrid ...
            :ref="dataGridRefKey">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    const dataGridRefKey = "my-data-grid";

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return() {
                dataGridRefKey
            }
        },
        methods: {
            renderDataGrid() {
                this.dataGrid.updateDimensions();
            }
        },
        computed: {
            dataGrid: function() {
                return this.$refs[dataGridRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef } from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import DataGrid from 'devextreme-react/data-grid';

    export default function App() {
        const dataGrid = useRef(null);
        const renderDataGrid = () => {
            dataGrid.current.instance().updateDimensions();
        };

	    return (
            <DataGrid ref={dataGrid}>
                {/* ... */ }
            </DataGrid>
        );
    }

---

[/note]
