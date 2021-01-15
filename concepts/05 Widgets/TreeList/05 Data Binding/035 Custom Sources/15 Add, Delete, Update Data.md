To allow a user to add, delete and update data in the **TreeList**, assign **true** to the corresponding field of the [editing](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/') object. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CRUDOperations/"
}

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowUpdating: true, 
                allowDeleting: true, 
                allowAdding: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-tree-list ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowDeleting]="true"
            [allowAdding]="true">
        </dxo-editing>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

#####Vue

    <template>
        <DxTreeList ... >
            <DxEditing
                :allow-adding="true"
                :allow-updating="true"
                :allow-deleting="true" />
        </DxTreeList>
    </template>
    <script>
    import { DxTreeList, DxEditing } from "devextreme-vue/tree-list";
    export default {
        // ...
        data() {
            return {
                // ...
            };
        },
        components: {
            // ...
            DxTreeList,
            DxEditing
        }
    }
    </script>

#####React

    import React from "react";
    import TreeList, { Editing } from "devextreme-react/tree-list";
    // ...
    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <Editing
                        allowAdding={true}
                        allowDeleting={true}
                        allowUpdating={true} />
                </TreeList>
            );
        }
    }
    export default App;

---

With these settings, the **TreeList** expects that the server can also add, update and delete data. In addition, you need to configure the **CustomStore** as shown below. Note that in this example, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the **DataSource** configuration object to shorten the example.

---
##### jQuery

    <!--JavaScript-->
    var treeListDataSource = new DevExpress.data.DataSource({ 
        // ...
        insert: function (values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/",
                method: "POST",
                data: values
            })
        },
        remove: function (key) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "DELETE",
            })
        },
        update: function (key, values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "PUT",
                data: values
            })
        }
    });

    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: treeListDataSource,
            // ...
        });
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxTreeListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        treeListDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.treeListDataSource = new DataSource({
                // ...
                insert: function (values) {
                    return httpClient.post('http://mydomain.com/MyDataService', values)
                        .toPromise();
                },
                remove: function (key) {
                    return httpClient.delete('http://mydomain.com/MyDataService' + encodeURIComponent(key))
                        .toPromise();
                },
                update: function (key, values) {
                    return httpClient.put('http://mydomain.com/MyDataService' + encodeURIComponent(key), values)
                        .toPromise();
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-tree-list ...
        [dataSource]="treeListDataSource">
    </dx-tree-list>

#####Vue

    <template>
        <DxTreeList ... 
            :data-source="dataSource" />
    </template>
    <script>
    import DxTreeList from "devextreme-vue/tree-list";
    import CustomStore from "devextreme/data/custom_store";
    import 'whatwg-fetch';
    // ...
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    const treeListDataSource = {
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
                dataSource: treeListDataSource
            };
        },
        components: {
            // ...
            DxTreeList
        }
    }
    </script>


#####React

    import React from "react";
    import TreeList from 'devextreme-react/tree-list';
    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';
    // ...
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    const treeListDataSource = {
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
                return fetch(`https://mydomain.com/MyDataService/${ encodeURIComponent(key)}`, {
                    method: "DELETE"
                }).then(handleErrors);
            },
            update: (key, values) => {
                return fetch(`https://mydomain.com/MyDataService/${ encodeURIComponent(key)}`, {
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
                <TreeList ...
                    dataSource={treeListDataSource}>
                </TreeList>
            );
        }
    }
    export default App;

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources')
- [Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)