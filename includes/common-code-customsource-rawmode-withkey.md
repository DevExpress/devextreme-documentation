
---
##### jQuery

    <!-- tab: index.js -->
    $("#{widgetName}Container").dx{WidgetName}({
        dataSource: new DevExpress.data.DataSource({
            store: new DevExpress.data.CustomStore({
                key: "ID",
                loadMode: "raw",
                load: function () {
                    return $.getJSON('https://mydomain.com/MyDataService');
                }
            }),
            paginate: false,
        })
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, Inject } from "@angular/core";
    import { HttpClient } from "@angular/common/http";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import { lastValueFrom } from "rxjs";

    // ...
    export class AppComponent {
        {widgetName}DataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.{widgetName}DataSource = new DataSource({
                store: new CustomStore({
                    key: "ID",
                    loadMode: "raw",
                    load: () => {
                        return lastValueFrom(httpClient.get('https://mydomain.com/MyDataService'));
                    }
                }),
                paginate: false,
            });
        }
    }

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [dataSource]="{widgetName}DataSource"
    ></dx-{widget-name}>

    <!-- tab: app.module.ts -->
    import { NgModule } from "@angular/core";
    import { HttpClientModule } from "@angular/common/http";
    import { Dx{WidgetName}Module } from "devextreme-angular";

    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module,
            HttpClientModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :data-source="{widgetName}DataSource" />
    </template>

    <script setup lang="ts">
    import { Dx{WidgetName} } from "devextreme-vue/{widget-name}";
    import CustomStore from "devextreme/data/custom_store";
    import DataSource from "devextreme/data/data_source";
    import "whatwg-fetch";

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
        }),
        paginate: false,
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from "react";
    import { {WidgetName} } from "devextreme-react/{widget-name}";
    import CustomStore from "devextreme/data/custom_store";
    import DataSource from "devextreme/data/data_source";
    import "whatwg-fetch";

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
        }),
        paginate: false,
    });

    function App() {
        return (
            <{WidgetName} dataSource={{widgetName}DataSource} />
        );
    }

---
