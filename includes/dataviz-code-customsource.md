
---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    load: function(loadOptions) {
                        var d = $.Deferred(),
                            params = {};
                        [
                            "sort", 
                            "filter", 
                            "searchExpr", 
                            "searchOperation", 
                            "searchValue"
                        ].forEach(function(i) {
                            if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                                params[i] = JSON.stringify(loadOptions[i]);
                        });
                        $.getJSON("http://mydomain.com/MyDataService", params)
                            .done(function(result) {
                                // Here, you can perform operations unsupported by the server
                                // or any other operations on the retrieved data
                                d.resolve(result.data);
                            });
                        return d.promise();
                    }
                }),
                paginate: false
            })
        });
    });
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { Dx{WidgetName}Module } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        {widgetName}DataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            function isNotEmpty(value: any): boolean {
                return value !== undefined && value !== null && value !== "";
            }
            this.{widgetName}DataSource = new DataSource({
                store: new CustomStore({
                    load: (loadOptions) => {
                        let params: HttpParams = new HttpParams();
                        [
                            "sort", 
                            "filter", 
                            "searchExpr", 
                            "searchOperation", 
                            "searchValue"
                        ].forEach(function(i) {
                            if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                                params = params.set(i, JSON.stringify(loadOptions[i]));
                        });
                        return httpClient.get("http://mydomain.com/MyDataService", { params: params })
                            .toPromise()
                            .then(result => {
                                // Here, you can perform operations unsupported by the server
                                // or any other operations on the retrieved data
                                return result.data;
                            });
                    }
                }),
                paginate: false
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-{widget-name} ...
        [dataSource]="{widgetName}DataSource">
    </dx-{widget-name}>

#####Vue

    <template>
        <Dx{WidgetName} ... 
            :data-source="dataSource" />
    </template>
    <script>
    import Dx{WidgetName} from "devextreme-vue/{widget-name}";
    import CustomStore from "devextreme/data/custom_store";
    import DataSource from "devextreme/data/data_source";
    import 'whatwg-fetch';
    // ...
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    const {widgetName}DataSource = new DataSource({
        store: new CustomStore({
            load: (loadOptions) => {
                let params = "?";
                [
                    "sort", 
                    "filter", 
                    "searchExpr", 
                    "searchOperation", 
                    "searchValue"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                });
                params = params.slice(0, -1);
                return fetch(`https://mydomain.com/MyDataService${params}`)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then((result) => {
                        // Here, you can perform operations unsupported by the server
                        // or any other operations on the retrieved data
                        return result.data;
                    });
            }
        }),
        paginate: false
    });
    export default {
        // ...
        data() {
            return {
                dataSource: {widgetName}DataSource
            };
        },
        components: {
            // ...
            Dx{WidgetName}
        }
    }
    </script>

#####React

    import React from "react";
    import {WidgetName} from "devextreme-react/{widget-name}";
    import CustomStore from "devextreme/data/custom_store";
    import DataSource from "devextreme/data/data_source";
    import 'whatwg-fetch';
    // ...
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    function handleErrors(response) {
        if (!response.ok) 
            throw Error(response.statusText);
        return response;
    }
    const {widgetName}DataSource = new DataSource({
        store: new CustomStore({
            load: (loadOptions) => {
                let params = "?";
                [
                    "sort", 
                    "filter", 
                    "searchExpr", 
                    "searchOperation", 
                    "searchValue"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                });
                params = params.slice(0, -1);
                return fetch(`https://mydomain.com/MyDataService${params}`)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then((result) => {
                        // Here, you can perform operations unsupported by the server
                        // or any other operations on the retrieved data
                        return result.data;
                    });
            }
        }),
        paginate: false
    });
    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ...
                    dataSource={{widgetName}DataSource}>
                </{WidgetName}>
            );
        }
    }
    export default App;

---
