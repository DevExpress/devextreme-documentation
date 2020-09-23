Use deferred mode to increase the **DataGrid**'s performance when [selecting multiple rows](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll') at once. In this mode, only the API (for example, the [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData') or [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys') method) can request the **DataGrid** data. Assign **true** to the **selection**.[deferred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred') option to use deferred selection.

---

#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGridContainer").dxDataGrid({
            // ...
            dataSource: {
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                }
            },
            selection: {
                mode: "multiple",
                allowSelectAll: true,
                deferred: true
            }
        }); 
    });

#####Angular

    <!--HTML--><dx-data-grid
        [dataSource]="dataSource">
        <dxo-selection
            mode="multiple"
            [allowSelectAll]="true"
            [deferred]="true">
        </dxo-selection>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        dataSource = {
            store: {
                type: "odata",
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
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
        <DxDataGrid :data-source="store">
            <DxSelection
                mode="multiple"
                :allow-select-all="true"
                :deferred="true"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSelection
    } from 'devextreme-vue/data-grid';

    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID'
    });

    export default {
        components: {
            DxDataGrid,
            DxSelection
        },
        data() {
            return {
                store
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
        Selection
    } from 'devextreme-react/data-grid';

    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID'
    });

    class App extends React.Component {
        render() {
            return (
                <DataGrid dataSource={store}>
                    <Selection
                        mode="multiple"
                        allowSelectAll={true}
                        deferred={true}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---

[note]You should specify the **key** option of the [Store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') underlying the [dataSource](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') to ensure that deferred selection works properly.

The following tasks require using different API in deferred mode:

- **Setting initial selection**  

   You should use the [selectionFilter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selectionFilter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectionFilter') instead of the [selectedRowKeys](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selectedRowKeys.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectedRowKeys') option to set the initially selected rows in deferred mode. Pass a [filter expression](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering') to define records that should be selected.

    ---

    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                // ...
                selectionFilter: ["Task_Status", "=", "Completed"]
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ...
            [selectionFilter]="['Task_Status', '=', 'Completed']">
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
                :selection-filter="['Task_Status', '=', 'Completed']">
            </DxDataGrid>
        </template>

        <script>
        // ...
        </script>

    ##### React

        <!-- tab: App.js -->
        // ...
        class App extends React.Component {
            selectionFilter = ['Task_Status', '=', 'Completed'];

            render() {
                return (
                    <DataGrid ...
                        defaultSelectionFilter={this.selectionFilter}>
                    </DataGrid>
                );
            }
        }
        export default App;

    ---
    
    The **DataGrid** changes the **selectionFilter** option's value internally when a user selects a row. You can use the following code to obtain this option's value and send it to the server:

    ---
    #####jQuery

        <!--JavaScript-->
        function sendSelectedRows() {
            var selectionFilter = dataGridInstance.option("selectionFilter");
            $.ajax({
                method: "POST",
                url: "url/to/data/processing/method",
                data: { 
                    filter: (selectionFilter ? JSON.stringify(selectionFilter) : null)
                }
            });
        }

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { HttpClient, HttpClientModule } from "@angular/common/http";
        import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
            // Prior to Angular 8
            // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            constructor(private httpClient: HttpClient) { }
            sendSelectedRows() {
                var selectionFilter = this.dataGrid.instance.option("selectionFilter");
                this.httpClient
                    .post("url/to/data/processing/method",  
                    "filter: " + (selectionFilter ? JSON.stringify(selectionFilter) : null)
                    )
                    .subscribe();
            }
        }
        @NgModule({
            imports: [
                // ...
                DxDataGridModule,
                HttpClientModule
            ],
            // ...
        })

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxDataGrid ...
                v-model:selection-filter="selectionFilter">
            </DxDataGrid>
        </template>

        <script>
        import 'whatwg-fetch';
        // ...
        export default {
            // ...
            data() {
                return {
                    selectionFilter: ['Task_Status', '=', 'Completed']
                }
            },
            methods: {
                sendSelectedRows() {
                    return new Promise((resolve, reject) => {
                        fetch('https://mydomain.com/MyDataService', {
                            method: 'POST',
                            body: JSON.stringify({
                                filter: this.selectionFilter || null
                            })
                        }),
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
                            }
                            return response.json();
                        })
                        .then(res => { resolve(res); })
                        .catch(error => {
                            console.error(error);
                            reject(error);
                        });
                    });
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import 'whatwg-fetch';
        // ...
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    selectionFilter: ['Task_Status', '=', 'Completed']
                }
                this.handleOptionChange = this.handleOptionChange.bind(this);
            }
            handleOptionChange(e) {
                if(e.fullName === 'selectionFilter') {
                    this.setState({
                        selectionFilter: e.value
                    });
                }
            }
            render() {
                return (
                    <DataGrid ...
                        selectionFilter={this.state.selectionFilter}
                        onOptionChanged={this.handleOptionChange}>
                    </DataGrid>
                );
            }
            sendSelectedRows() {
                return new Promise((resolve, reject) => {
                    fetch('https://mydomain.com/MyDataService', {
                        method: 'POST',
                        body: JSON.stringify({
                            filter: this.state.selectionFilter || null
                        })
                    }),
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
                        }
                        return response.json();
                    })
                    .then(res => { resolve(res); })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    });
                });
            }
        }
        export default App;
        
    ---

- **Checking whether a row is selected**  

    Use the [isRowSelected(data)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/isRowSelected(data).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowSelecteddata') method to determine whether a row is selected. 

- **Getting the selected rows' data**  

    In deferred mode, the [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData') and [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys') methods return a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery. Get the data within the callback function that resolves the Promise. This is data before being processed in the **DataSource**.
    
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/DeferredSelection/"
}

#####See Also#####
- **key** in [ArrayStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') | [CustomStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') | [LocalStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') | [ODataStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key')
