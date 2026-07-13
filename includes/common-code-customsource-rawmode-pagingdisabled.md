
---
##### jQuery

    <!-- tab: index.js -->
    $("#{widgetName}Container").dx{WidgetName}({
        dataSource: new DevExpress.data.DataSource({
            store: new DevExpress.data.CustomStore({
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
    import { Component } from "@angular/core";
    import { HttpClient } from "@angular/common/http";
    import { DataSource, CustomStore } from "devextreme-angular/common/data";
    import { lastValueFrom } from "rxjs";
    import { Dx{WidgetName}Component } from "devextreme-angular/ui/{widget-name}";

    @Component({
        imports: [Dx{WidgetName}Component],
        // ...
    })
    export class AppComponent {
        {widgetName}DataSource: DataSource;
        constructor(httpClient: HttpClient) {
            this.{widgetName}DataSource = new DataSource({
                store: new CustomStore({
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :data-source="{widgetName}DataSource" />
    </template>

    <script setup lang="ts">
    import { Dx{WidgetName} } from "devextreme-vue/{widget-name}";
    import { DataSource, CustomStore } from "devextreme-vue/common/data";
    import "whatwg-fetch";

    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }

    const {widgetName}DataSource = new DataSource({
        store: new CustomStore({
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
    import { DataSource, CustomStore } from "devextreme-react/common/data";
    import "whatwg-fetch";

    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }

    const {widgetName}DataSource = new DataSource({
        store: new CustomStore({
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
