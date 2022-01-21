
---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    key: "ID",
                    loadMode: "raw",   
                    load: function () {
                        return $.getJSON('https://mydomain.com/MyDataService');
                    }
                })
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { Dx{WidgetName}Module } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        {widgetName}DataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.{widgetName}DataSource = new DataSource({
                store: new CustomStore({
                    key: "ID",
                    loadMode: "raw",   
                    load: () => {
                        return httpClient.get('http://mydomain.com/MyDataService')
                            .toPromise();
                    }
                })
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
    import { Dx{WidgetName} } from "devextreme-vue/{widget-name}";
    import CustomStore from "devextreme/data/custom_store";
    import DataSource from "devextreme/data/data_source";
    import 'whatwg-fetch';
    // ...
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    const {widgetName}DataSource = new DataSource({
        store: new CustomStore({
            key: "ID",
            loadMode: "raw",   
            load: () => {
                return fetch("https://mydomain.com/MyDataService")
                        .then(handleErrors);
            }
        })
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
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    const {widgetName}DataSource = new DataSource({
        store: new CustomStore({
            key: "ID",
            loadMode: "raw",   
            load: () => {
                return fetch("https://mydomain.com/MyDataService")
                        .then(handleErrors);
            }
        })
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
