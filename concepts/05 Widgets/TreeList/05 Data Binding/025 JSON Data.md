To bind the **TreeList** to data in the JSON format, assign the data's URL to the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource') property.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: "https://jsonplaceholder.typicode.com/posts"
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list
        dataSource="https://jsonplaceholder.typicode.com/posts">
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

---

Note that you can also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?"
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
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

---

If you need to specify request headers or process response data, use the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') - a flexible instrument that allows you to configure data access manually. Implement its [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function as shown in the code below to add custom headers to the request. Note that you can specify **CustomStore** members directly in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object instead of declaring them explicitly.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: new DevExpress.data.DataSource({
                load: function () {
                    var d = $.Deferred();
                    return $.getJSON('https://mydomain.com/MyDataService', { 
                        header1: "customHeader1",
                        header2: "customHeader2",
                        // ...
                    })
                    .done(function(result) {
                        // Here, you can process the response
                        d.resolve(result);
                    });
                }
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxTreeListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        treeListDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.treeListDataSource = new DataSource({
                load: function () {
                    return httpClient.get('https://mydomain.com/MyDataService', {
                        headers: { 
                            "header1": "customHeader1",
                            "header2": "customHeader2",
                            // ...
                        }
                    })
                    .toPromise()
                    .then(result => {
                        // Here, you can process the response
                        return result;
                    });
                }
            })
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
    <dx-tree-list ...
        [dataSource]="treeListDataSource">
    </dx-tree-list>

---

The **CustomStore** requires requires thorough configuration if data is processed on the server. See the [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') topic for more details.

#####See Also#####
- [TreeList - Access the DataSource](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/040%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Access_the_DataSource/')
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
- [TreeList API Reference](/api-reference/10%20UI%20Widgets/dxTreeList '/Documentation/ApiReference/UI_Widgets/dxTreeList/')

[tags]treeList, data binding, json, jsonp, callback parameter
