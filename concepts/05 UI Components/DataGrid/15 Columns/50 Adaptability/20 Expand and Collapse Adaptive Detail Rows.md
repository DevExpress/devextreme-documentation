You can call the [expandAdaptiveDetailRow(key)](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#expandAdaptiveDetailRowkey) or [collapseAdaptiveDetailRow()](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#collapseAdaptiveDetailRow) method to expand or collapse an adaptive detail row. To check whether a specific row is expanded, use the [isAdaptiveDetailRowExpanded(key)](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#isAdaptiveDetailRowExpandedkey) method. Note that only one detail row can be expanded at a time.

---
##### jQuery

    <!--JavaScript-->var expandAdaptiveDetailRow = function (key, dataGridInstance) {
        if (!dataGridInstance.isAdaptiveDetailRowExpanded(key)) {
            dataGridInstance.expandAdaptiveDetailRow(key);
        }
    }

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        expandAdaptiveDetailRow (key) {
            if (!this.dataGrid.instance.isAdaptiveDetailRowExpanded(key)) {
                this.dataGrid.instance.expandAdaptiveDetailRow(key);
            }
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
            expandAdaptiveDetailRow(key) {
                if (!this.dataGrid.isAdaptiveDetailRowExpanded(key)) {
                    this.dataGrid.expandAdaptiveDetailRow(key);
                }
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
        const expandAdaptiveDetailRow = (key) => {
            if (!dataGrid.current.instance.isAdaptiveDetailRowExpanded(key)) {
                dataGrid.current.instance.expandAdaptiveDetailRow(key);
            }
        };

	    return (
            <DataGrid ref={dataGrid}>
                {/* ... */ }
            </DataGrid>
        );
    }
    
---

#####See Also#####
- [Column Fixing](/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Fixing/)
- [Column Chooser](/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Chooser/)