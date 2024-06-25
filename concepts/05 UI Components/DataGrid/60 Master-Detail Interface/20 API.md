Pass *-1* to the [expandAll(groupIndex)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#expandAllgroupIndex') or [collapseAll(groupIndex)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/collapseAll(groupIndex).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#collapseAllgroupIndex') method to expand or collapse all master rows at once. 

---
#####jQuery

    <!--JavaScript-->
    const dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.expandAll(-1);
    dataGrid.collapseAll(-1);

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        expandAllMasterRows () {
            this.dataGrid.instance.expandAll(-1);
        }
        collapseAllMasterRows () {
            this.dataGrid.instance.collapseAll(-1);
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
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxDataGrid, { ... } from 'devextreme-vue/data-grid';

    const dataGridRefKey = "my-data-grid";

    export default {
        components: {
            DxDataGrid,
            // ...
        },
        data: function() {
            return {
                dataGridRefKey
            };
        },
        methods: {
            expandAllMasterRows() {
                this.dataGrid.expandAll(-1);
            },
            collapseAllMasterRows() {
                this.dataGrid.collapseAll(-1);
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
    import React, { useRef, useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, { ... } from 'devextreme-react/data-grid';

    export default function App() {
        const dataGrid = useRef(null);
        const expandAllMasterRows = useCallback(() => {
            dataGrid.current.instance().expandAll(-1);
        }, []);
        const collapseAllMasterRows = useCallback(() => {
            dataGrid.current.instance().collapseAll(-1);
        }, []);

        return (
            <DataGrid ...
                ref={dataGrid}>
                {/* ... */}
            </DataGrid>
        );
    }

---

The [expandRow(key)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/expandRow(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#expandRowkey') and [collapseRow(key)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/collapseRow(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#collapseRowkey') methods expand and collapse an individual master row. You can check a row's current state by calling the [isRowExpanded(key)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/isRowExpanded(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#isRowExpandedkey') method.

---

#####jQuery

    <!--JavaScript-->
    function toggleMasterRow (rowKey) {
        const dataGrid = $("#dataGridContainer").dxDataGrid("instance");
        if (dataGrid.isRowExpanded(rowKey)) {
            dataGrid.collapseRow(rowKey);
        } else {
            dataGrid.expandRow(rowKey);
        }
    }

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        toggleMasterRow (rowKey) {
            if (this.dataGrid.instance.isRowExpanded(rowKey)) {
                this.dataGrid.instance.collapseRow(rowKey);
            } else {
                this.dataGrid.instance.expandRow(rowKey);
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
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxDataGrid, { ... } from 'devextreme-vue/data-grid';

    const dataGridRefKey = "my-data-grid";

    export default {
        components: {
            DxDataGrid,
            // ...
        },
        data: function() {
            return {
                dataGridRefKey
            };
        },
        methods: {
            toggleMasterRow(rowKey) {
                if (this.dataGrid.isRowExpanded(rowKey)) {
                    this.dataGrid.collapseRow(rowKey);
                } else {
                    this.dataGrid.expandRow(rowKey);
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
    import React, { useRef, useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, { ... } from 'devextreme-react/data-grid';

    export default function App() {
        const dataGrid = useRef(null);
        const toggleMasterRow = useCallback((rowKey) => {
            if (dataGrid.current.instance().isRowExpanded(rowKey)) {
                dataGrid.current.instance().collapseRow(rowKey);
            } else {
                dataGrid.current.instance().expandRow(rowKey);
            }
        }, []);

        return (
            <DataGrid ...
                ref={dataGrid}>
                {/* ... */}
            </DataGrid>
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailAPI/"
}
