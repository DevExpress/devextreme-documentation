In the following code snippet, `Author Name` is a [lookup column](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/3%20Lookup%20Columns.md '/Documentation/Guide/UI_Components/TreeList/Columns/Column_Types/Lookup_Columns/') bound to a custom data source. The **CustomStore** loads data from the data source [in the raw mode](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode') (the data is processed on the client). Data processing in this example includes only sorting, but you can specify other operations using the [**DataSource** properties](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/').

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var lookupDataSource = {
            store: new DevExpress.data.CustomStore({
                key: "id",
                loadMode: "raw",
                load: function() {
                    // Returns an array of objects that have the following structure:
                    // { id: 1, name: "John Doe" }
                    return $.getJSON("https://mydomain.com/MyDataService/authors/");
                }
            }),
            sort: "name"
        }

        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "authorId",
                caption: "Author Name",
                lookup: {
                    dataSource: lookupDataSource,
                    valueExpr: "id", // "id" contains the same values as "authorId"
                    displayExpr: "name"
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!--TypeScript-->
    import { Component, Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxTreeListModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";

    @Component({ ... })
    export class AppComponent {
        lookupDataSource = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.lookupDataSource = {
                store: new CustomStore({
                    key: "id",
                    loadMode: "raw",
                    load: () => {
                        // Returns an array of objects that have the following structure:
                        // { id: 1, name: "John Doe" }
                        return httpClient.get("https://mydomain.com/MyDataService/authors/")
                            .toPromise();
                    }
                }),
                sort: "name"
            };
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

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="authorId"
            caption="Author Name">
            <dxo-lookup
                [dataSource]="lookupDataSource"
                displayExpr="name"
                valueExpr="id"> <!-- "id" contains the same values as "authorId" -->
            </dxo-lookup>
        </dxi-column>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxColumn
                data-field="authorId"
                caption="Author Name">
                <DxLookup
                    :data-source="lookupDataSource"
                    display-expr="name"
                    value-expr="id" /> <!-- "id" contains the same values as "authorId" -->
            </DxColumn>
            <!-- ... -->
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxTreeList, {
        DxColumn,
        DxLookup
    } from 'devextreme-vue/tree-list';
    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    const lookupDataSource = {
        store: new CustomStore({
            key: "id",
            loadMode: "raw",
            load: () => {
                // Returns an array of objects that have the following structure:
                // { id: 1, name: "John Doe" }
                return fetch('https://mydomain.com/MyDataService/authors/')
                    .then(response => response.json());
                    .catch(() => { throw 'Network error' });
            }
        }),
        sort: "name"
    };

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxLookup
        },
        data() {
            return {
                lookupDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column,
        Lookup
    } from 'devextreme-react/tree-list';
    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    const lookupDataSource = {
        store: new CustomStore({
            key: "id",
            loadMode: "raw",
            load: () => {
                // Returns an array of objects that have the following structure:
                // { id: 1, name: "John Doe" }
                return fetch('https://mydomain.com/MyDataService/authors/')
                    .then(response => response.json());
                    .catch(() => { throw 'Network error' });
            }
        }),
        sort: "name"
    };

    export default function App() {
        return (
            <TreeList ... >
                <Column
                    dataField="authorId"
                    caption="Author Name">
                    <Lookup
                        dataSource={lookupDataSource}
                        displayExpr="name"
                        valueExpr="id" /> <!-- "id" contains the same values as "authorId" -->
                </Column>
                <!-- ... -->
            </TreeList>
        );
    }

---

The following alternative **CustomStore** configuration delegates data processing to the server. The [loadOptions](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/') object passed to the **load** function contains data processing settings that should be sent to the server with the GET request. In this example, the **load** function sends only sorting settings because the only specified **DataSource** property is [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') (see the commented out code lines). Note that the **CustomStore** must also contain a [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') implementation. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var lookupDataSource = {
            store: new DevExpress.data.CustomStore({
                key: "id",
                load: function(loadOptions) {
                    var d = $.Deferred(),
                        params = {};
                    [
                        "sort", 
                        // "skip",     
                        // "take", 
                        // "filter", 
                        // "searchExpr",
                        // "searchOperation",
                        // "searchValue",
                        // "group"
                    ].forEach(function(i) {
                        if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                            params[i] = JSON.stringify(loadOptions[i]);
                    });
                    $.getJSON("https://mydomain.com/MyDataService/authors/", params)
                        .done(function(result) {
                            d.resolve(result)
                        });
                    return d.promise();
                },
                byKey: function(key) {
                    return $.getJSON("https://mydomain.com/MyDataService/authors/" + encodeURIComponent(key));
                }
            }),
            sort: "name"
        }
        $("#treeListContainer").dxTreeList({
            // ...
            // The configuration repeats the previous code
            // ...
        });
    });
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }

##### Angular

    <!--TypeScript-->
    import { Component, Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxTreeListModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";

    @Component({ ... })
    export class AppComponent {
        lookupDataSource = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            function isNotEmpty(value: any): boolean {
                return value !== undefined && value !== null && value !== "";
            }
            this.lookupDataSource = {
                store: new CustomStore({
                    key: "id",
                    load: (loadOptions) => {
                        let params: HttpParams = new HttpParams();
                        [
                            "sort", 
                            // "skip",     
                            // "take", 
                            // "filter", 
                            // "searchExpr",
                            // "searchOperation",
                            // "searchValue",
                            // "group"
                        ].forEach(function(i) {
                            if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                                params = params.set(i, JSON.stringify(loadOptions[i]));
                        });
                        return httpClient.get("https://mydomain.com/MyDataService/authors/", { params: params })
                            .toPromise()
                            .then(result => {
                                return result;
                            });
                    },
                    byKey: function(key) {
                        return httpClient.get("https://mydomain.com/MyDataService/authors/" + encodeURIComponent(key))
                            .toPromise();
                    }
                }),
                sort: "name"
            }
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

    <!--HTML-->
    <dx-tree-list>
        <!-- ... -->
        <!-- The configuration repeats the previous code -->
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <!-- ... -->
            <!-- The configuration repeats the previous code -->
            <!-- ... -->
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxTreeList, {
        DxColumn,
        DxLookup
    } from 'devextreme-vue/tree-list';
    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    const isNotEmpty = (value) => value !== undefined && value !== null && value !== '';

    const lookupDataSource = {
        store: new CustomStore({
            key: "id",
            load: (loadOptions) => {
                let params = '?';
                [
                    "sort", 
                    // "skip",
                    // "take", 
                    // "filter", 
                    // "searchExpr",
                    // "searchOperation",
                    // "searchValue",
                    // "group"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) {
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                    }
                });
                params = params.slice(0, -1);
        
                return fetch(`https://mydomain.com/MyDataService/authors${params}`)
                    .then(response => response.json())
                    .then(response => {
                        return {
                            data: response.data
                        };
                    })
                    .catch(() => { throw 'Network error' });
            },
            byKey: (key) => {
                return fetch(`https://mydomain.com/MyDataService/authors/${key}`);
            }
        }),
        sort: "name"
    };

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxLookup
        },
        data() {
            return {
                lookupDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column,
        Lookup
    } from 'devextreme-react/tree-list';
    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    const isNotEmpty = (value) => value !== undefined && value !== null && value !== '';

    const lookupDataSource = {
        store: new CustomStore({
            key: "id",
            load: (loadOptions) => {
                let params = '?';
                [
                    "sort", 
                    // "skip",
                    // "take", 
                    // "filter", 
                    // "searchExpr",
                    // "searchOperation",
                    // "searchValue",
                    // "group"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) {
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                    }
                });
                params = params.slice(0, -1);
        
                return fetch(`https://mydomain.com/MyDataService/authors${params}`)
                    .then(response => response.json())
                    .then(response => {
                        return {
                            data: response.data
                        };
                    })
                    .catch(() => { throw 'Network error' });
            },
            byKey: (key) => {
                return fetch(`https://mydomain.com/MyDataService/authors/${key}`);
            }
        }),
        sort: "name"
    };

    export default function App() {
        return (
            <TreeList ... >
                {/* ... */}
                {/* The configuration repeats the previous code */}
                {/* ... */}
            </TreeList>
        );
    }

---

#####See Also#####
- [SelectBox - Custom Data Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
