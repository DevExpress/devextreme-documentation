Call the [pageCount()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/pageCount().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#pageCount') method to get the total page count.

---

#####jQuery

    <!--JavaScript-->
    var totalPageCount = $("#dataGridContainer").dxDataGrid("instance").pageCount();

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        getTotalPageCount () {
            this.dataGrid.instance.pageCount();
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
            ref="myDataGrid">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            getTotalPageCount() {
                return this.$refs['myDataGrid'].instance.pageCount();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import type { DataGridRef } from 'devextreme-react/data-grid';
    import React, { useCallback, useRef } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid from 'devextreme-react/data-grid';
    function App() {
        const dataGridRef = useRef<DataGridRef>(null);
        const getTotalPageCount = useCallback(() => {
            const dataGridRefInstance = dataGridRef.current?.instance();
            if (!dataGridRefInstance) return;
            return dataGridRefInstance.pageCount();
        }, []);
        return <DataGrid ... ref={dataGridRef}></DataGrid>;
    }
    export default App;

---

The DataGrid also provides the [pageIndex(newIndex)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/pageIndex(newIndex).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#pageIndexnewIndex') and [pageSize(value)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/pageSize(value).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#pageSizevalue') methods that switch the grid to a specific page and change the page size. They can also be called without arguments, in which case, they return the index and size of the current page.

---

#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("instance").pageSize(8);

<!---->

    <!--JavaScript-->
    var goToLastPage = function (dataGridInstance) {
        dataGridInstance.pageIndex(dataGridInstance.pageCount() - 1);
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
        changePageSize () {
            this.dataGrid.instance.pageSize(8);
        }
        goToLastPage () {
            this.dataGrid.instance.pageIndex(this.dataGrid.instance.pageCount() - 1);
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
            ref="myDataGrid">
            <DxPaging
                v-model:page-size="pageSize"
                v-model:page-index="pageIndex"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxDataGrid, {
        DxPaging
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxPaging
        },
        data() {
            return {
                pageSize: 20,
                pageIndex: 0
            }
        },
        methods: {
            changePageSize(value) {
                this.pageSize = value;
            },
            goToLastPage() {
                const pageCount = this.$refs['myDataGrid'].instance.pageCount();
                this.pageIndex = pageCount - 1;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import type { DataGridTypes, DataGridRef } from 'devextreme-react/data-grid';
    import React, { useCallback, useRef, useState } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid, { Paging } from 'devextreme-react/data-grid';
    function App() {
        const dataGridRef = useRef<DataGridRef>(null);
        const [state, setState] = useState<{
            pageSize: number;
            pageIndex: number;
        }>({
            pageSize: 20,
            pageIndex: 0,
        });
        const changePageSize = useCallback((value: number) => {
            setState((prevState) => ({ ...prevState, pageSize: value }));
        }, []);
        const goToLastPage = useCallback(() => {
            const dataGridRefInstance = dataGridRef.current?.instance();
            if (!dataGridRefInstance) return;
            const pageCount = dataGridRefInstance.pageCount();
            setState((prevState) => ({ ...prevState, pageIndex: pageCount - 1 }));
        }, []);
        const handleOptionChange = useCallback((e: DataGridTypes.OptionChangedEvent) => {
            if (e.fullName === 'paging.pageSize') {
                setState((prevState) => ({ ...prevState, pageSize: e.value }));
            }
            if (e.fullName === 'paging.pageIndex') {
                setState((prevState) => ({ ...prevState, pageIndex: e.value }));
            }
        }, []);
        return (
            <DataGrid ... ref={dataGridRef} onOptionChanged={handleOptionChange}>
                <Paging pageSize={state.pageSize} pageIndex={state.pageIndex} />
            </DataGrid>
        );
    }
    export default App;

---

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/')
- [Scrolling](/concepts/05%20UI%20Components/DataGrid/40%20Scrolling '/Documentation/Guide/UI_Components/DataGrid/Scrolling/')
