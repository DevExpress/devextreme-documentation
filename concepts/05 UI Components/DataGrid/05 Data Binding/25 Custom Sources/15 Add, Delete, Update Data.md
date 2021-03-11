To allow a user to add, delete and update data in the DataGrid, assign **true** to the corresponding field of the [editing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing '/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/'') object. 

---

#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true, 
                allowDeleting: true, 
                allowAdding: true
            }
        });
    });

#####Angular

    <!--HTML--><dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowDeleting]="true"
            [allowAdding]="true">
        </dxo-editing>
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

#####Vue

    <template>
        <DxDataGrid ... >
            <DxEditing
                :allow-adding="true"
                :allow-updating="true"
                :allow-deleting="true" />
        </DxDataGrid>
    </template>
    <script>
    import { DxDataGrid, DxEditing } from "devextreme-vue/data-grid";
    export default {
        // ...
        data() {
            return {
                // ...
            };
        },
        components: {
            // ...
            DxDataGrid,
            DxEditing
        }
    }
    </script>

#####React

    import React from "react";
    import DataGrid, { Editing } from "devextreme-react/data-grid";
    // ...
    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Editing
                        allowAdding={true}
                        allowDeleting={true}
                        allowUpdating={true} />
                </DataGrid>
            );
        }
    }
    export default App;

---

With these settings, the DataGrid expects that the server can also add, update and delete data. In addition, you need to configure the **CustomStore** as shown below. Note that in this example, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the **DataSource** configuration object to shorten the example.

---

#####jQuery

    <!--JavaScript-->
    var gridDataSource = new DevExpress.data.DataSource({
        // ...
        insert: function (values) {
            return $.ajax({
                url: "https://mydomain.com/MyDataService/",
                method: "POST",
                data: JSON.stringify(values)
            })
        },
        remove: function (key) {
            return $.ajax({
                url: "https://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "DELETE",
            })
        },
        update: function (key, values) {
            return $.ajax({
                url: "https://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "PUT",
                data: JSON.stringify(values)
            })
        }
    });

    $(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: gridDataSource,
            // ...
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxDataGridModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        gridDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.gridDataSource = new DataSource({
                // ...
                insert: function (values) {
                    return httpClient.post('https://mydomain.com/MyDataService', JSON.stringify(values))
                        .toPromise();
                },
                remove: function (key) {
                    return httpClient.delete('https://mydomain.com/MyDataService/' + encodeURIComponent(key))
                        .toPromise();
                },
                update: function (key, values) {
                    return httpClient.put('https://mydomain.com/MyDataService/' + encodeURIComponent(key), JSON.stringify(values))
                        .toPromise();
                }
            });
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

    <!--HTML--><dx-data-grid ...
        [dataSource]="gridDataSource">
    </dx-data-grid>

#####Vue

    <!--JavaScript-->
    import DxDataGrid from "devextreme-vue/data-grid";
    import CustomStore from "devextreme/data/custom_store";
    import 'whatwg-fetch';
    // ...
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    const gridDataSource = {
        store: new CustomStore({
            // ...
            insert: (values) => {
                return fetch("https://mydomain.com/MyDataService", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(handleErrors);
            },
            remove: (key) => {
                return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                    method: "DELETE"
                }).then(handleErrors);
            },
            update: (key, values) => {
                return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(handleErrors);
            }
        })
    }
    export default {
        // ...
        data() {
            return {
                dataSource: gridDataSource
            };
        },
        components: {
            // ...
            DxDataGrid
        }
    }

    <!--HTML-->
    <DxDataGrid ... 
        :data-source="dataSource" />

#####React

    <!--JavaScript-->
    import React from "react";
    import DataGrid from "devextreme-react/data-grid";
    import CustomStore from "devextreme/data/custom_store";
    import 'whatwg-fetch';
    // ...
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    const gridDataSource = {
        store: new CustomStore({
            // ...
            insert: (values) => {
                return fetch("https://mydomain.com/MyDataService", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(handleErrors);
            },
            remove: (key) => {
                return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                    method: "DELETE"
                }).then(handleErrors);
            },
            update: (key, values) => {
                return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(handleErrors);
            }
        })
    }
    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    dataSource={gridDataSource}>
                </DataGrid>
            );
        }
    }
    export default App;

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources')
- [Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomDataSource)