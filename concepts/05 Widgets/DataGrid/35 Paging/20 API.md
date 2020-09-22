Call the [pageCount()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/pageCount().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#pageCount') method to get the total page count.

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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

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

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.dataGridRef = React.createRef();

            this.getTotalPageCount = () => {
                return this.dataGridRef.current.instance.pageCount();
            }
        }

        render() {
            return (
                <DataGrid ...
                    ref={this.dataGridRef}>
                </DataGrid>
            );
        }
    }
    export default App;

---

The **DataGrid** also provides the [pageIndex(newIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/pageIndex(newIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#pageIndexnewIndex') and [pageSize(value)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/pageSize(value).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#pageSizevalue') methods that switch the grid to a specific page and change the page size. They can also be called without arguments, in which case, they return the index and size of the current page.

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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

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

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Paging
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.dataGridRef = React.createRef();
            this.state = {
                pageSize: 20,
                pageIndex: 0
            };
            
            this.changePageSize = this.changePageSize.bind(this);
        	this.goToLastPage = this.goToLastPage.bind(this);
            this.handleOptionChange = this.handleOptionChange.bind(this);
        }

        changePageSize(value) {
            this.setState({
                pageSize: value
            });
        }

        goToLastPage() {
            const pageCount = this.dataGridRef.current.instance.pageCount();
            this.setState({
                pageIndex: pageCount - 1
            });
        }

        handleOptionChange(e) {
            if(e.fullName === 'paging.pageSize') {
                this.setState({
                    pageSize: e.value 
                });
            }
            if(e.fullName === 'paging.pageIndex') {
                this.setState({
                    pageIndex: e.value 
                });
            }
        }

        render() {
            return (
                <DataGrid ...
                    ref={this.dataGridRef}
                    onOptionChanged={this.handleOptionChange}>
                    <Paging
                        pageSize={this.state.pageSize}
                        pageIndex={this.state.pageIndex}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')
- [Scrolling](/concepts/05%20Widgets/DataGrid/40%20Scrolling '/Documentation/Guide/Widgets/DataGrid/Scrolling/')
