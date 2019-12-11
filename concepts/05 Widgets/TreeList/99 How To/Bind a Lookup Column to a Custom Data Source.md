In the following code snippet, `Author Name` is a [lookup column](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/3%20Lookup%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Lookup_Columns/') bound to a custom data source. The **CustomStore** loads data from the data source [in the raw mode](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode') (the data is processed on the client). Data processing in this example includes only sorting, but you can specify other operations using the [**DataSource** options](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/').

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        var lookupDataSource = {
            store: new DevExpress.data.CustomStore({
                key: "id",
                loadMode: "raw",
                load: function () {
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
    import { Component, Inject } from '@angular/core';
    import { Http, HttpModule } from '@angular/http';
    import { DxTreeListModule } from 'devextreme-angular';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';

    @Component({ ... })
    export class AppComponent {
        lookupDataSource = {};
        constructor(@Inject(Http) http: Http) {
            this.lookupDataSource = {
                store: new CustomStore({
                    key: "id",
                    loadMode: "raw",
                    load: function () {
                        // Returns an array of objects that have the following structure:
                        // { id: 1, name: "John Doe" }
                        return http.get("https://mydomain.com/MyDataService/authors/")
                                .toPromise()
                                .then(response => {
                                    return response.json();
                                });
                    }
                }),
                sort: "name"
            };
        }
    }

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

---

The following alternative **CustomStore** configuration delegates data processing to the server. The [loadOptions](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/') object passed to the **load** function contains data processing settings that should be sent to the server with the GET request. In this example, the **load** function sends only sorting settings because the only specified **DataSource** option is [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') (see the commented out code lines). Note that the **CustomStore** must also contain a [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') implementation. 

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        var lookupDataSource = {
            store: new DevExpress.data.CustomStore({
                key: "id",
                load: function (loadOptions) {
                    var d = $.Deferred();
                    $.getJSON("https://mydomain.com/MyDataService/authors/", {
                        sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",
                        // skip: loadOptions.skip,
                        // take: loadOptions.take,
                        // filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "",
                        // searchExpr: loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "",
                        // searchOperation: loadOptions.searchOperation,
                        // searchValue: loadOptions.searchValue,
                        // group: loadOptions.group ? JSON.stringify(loadOptions.group) : ""
                    })
                        .done(function (result) {
                            d.resolve(result)
                        });
                    return d.promise();
                },
                byKey: function (key) {
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

##### Angular

    <!--TypeScript-->
    import { Component, Inject } from '@angular/core';
    import { Http, HttpModule, URLSearchParams } from '@angular/http';
    import { DxTreeListModule } from 'devextreme-angular';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';

    @Component({ ... })
    export class AppComponent {
        lookupDataSource = {};
        constructor(@Inject(Http) http: Http) {
            this.lookupDataSource = {
                store: new CustomStore({
                    key: "id",
                    load: function (loadOptions) {
                        let params: URLSearchParams = new URLSearchParams();
                        params.set("sort", loadOptions.sort ? JSON.stringify(loadOptions.sort) : "");
                        // params.set("skip", JSON.stringify(loadOptions.skip));
                        // params.set("take", JSON.stringify(loadOptions.take));
                        // params.set("searchExpr", loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "");
                        // params.set("searchOperation", loadOptions.searchOperation);
                        // params.set("searchValue", JSON.stringify(loadOptions.searchValue));
                        // params.set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : "");
                        // params.set("group", loadOptions.group ? JSON.stringify(loadOptions.group) : "");
                        return http.get("https://mydomain.com/MyDataService/authors/", { search: params })
                                .toPromise()
                                .then(response => {
                                    return response.json();
                                });
                    },
                    byKey: function (key) {
                        return http.get("https://mydomain.com/MyDataService/authors/" + encodeURIComponent(key))
                            .toPromise()
                            .then(response => {
                                return response.json();
                            });
                    }
                }),
                sort: "name"
            }
        }
    }

    <!--HTML-->
    <dx-tree-list>
        <!-- ... -->
        <!-- The configuration repeats the previous code -->
        <!-- ... -->
    </dx-tree-list>

---

#####See Also#####
- [SelectBox - Custom Data Sources](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/Custom_Sources/')
