
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const serviceUrl = "https://url/to/my/service";

        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: DevExpress.data.AspNet.createStore({
                key: ${{key}},
                loadUrl: serviceUrl + "/GetAction"
            }),
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} [dataSource]="store">
        <!-- ... -->
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import CustomStore from 'devextreme/data/custom_store';
    import { createStore } from "devextreme-aspnet-data-nojquery";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        store: CustomStore;
        constructor() {
            const serviceUrl = "https://url/to/my/service";
            this.store = createStore({
                key: ${{key}},
                loadUrl: serviceUrl + "/GetAction"
            });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :data-source="store">
            <!-- ... -->
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';
    import { createStore } from "devextreme-aspnet-data-nojquery";

    const serviceUrl = "https://url/to/my/service";

    const store = createStore({
        key: ${{key}},
        loadUrl: serviceUrl + "/GetAction"
    });

    export default {
        components: {
            Dx{WidgetName}
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
    import {WidgetName} from 'devextreme-react/{widget-name}';
    import { createStore } from "devextreme-aspnet-data-nojquery";
    
    const serviceUrl = "https://url/to/my/service";

    const store = createStore({
        key: ${{key}},
        loadUrl: serviceUrl + "/GetAction"
    });

    export default function App() {
        return (
            <{WidgetName} dataSource={store}>
                {/* ... */}
            </{WidgetName}>
        );
    }

---
