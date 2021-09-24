---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const serviceUrl = "https://url/to/my/service";

        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: DevExpress.data.AspNet.createStore({
                key: ${{key}},
                loadUrl: serviceUrl
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
    import CustomStore from 'devextreme/data/odata/custom_store';
    import { createStore } from "devextreme-aspnet-data-nojquery";

    #include angular-component-decorator
    export class AppComponent {
        store: CustomStore;
        constructor() {
            const serviceUrl = "https://url/to/my/service";
            this.store = createStore({
                key: ${{key}},
                loadUrl: serviceUrl
            });
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

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
        loadUrl: serviceUrl
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
        loadUrl: serviceUrl
    });

    export default function App() {
        return (
            <{WidgetName} dataSource={store}>
                {/* ... */}
            </{WidgetName}>
        );
    }

---
