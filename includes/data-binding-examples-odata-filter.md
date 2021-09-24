---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'odata',
                    url: 'https://www.example.com/dataservices/odata/targetData',
                    key: ${{key}}
                },
                paginate: false,
                // Take summer months only
                filter: [
                    [${{key}}, '>=', 6],
                    [${{key}}, '<=', 8]
                ]
            }),
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} [dataSource]="{widgetName}DataSource">
        <!-- ... -->
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        {widgetName}DataSource = new DataSource({
            store: {
                type: 'odata',
                url: 'https://www.example.com/dataservices/odata/targetData',
                key: ${{key}}
            },
            paginate: false,
            // Take summer months only
            filter: [
                [${{key}}, '>=', 6],
                [${{key}}, '<=', 8]
            ]
        });
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :data-source="{widgetName}DataSource">
            <!-- ... -->
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';

    const {widgetName}DataSource = new DataSource({
        store: {
            type: 'odata',
            url: 'https://www.example.com/dataservices/odata/targetData',
            key: ${{key}}
        },
        paginate: false,
        // Take summer months only
        filter: [
            [${{key}}, '>=', 6],
            [${{key}}, '<=', 8]
        ]
    });

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                {widgetName}DataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import {WidgetName} from 'devextreme-react/{widget-name}';
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    
    const {widgetName}DataSource = new DataSource({
        store: {
            type: 'odata',
            url: 'https://www.example.com/dataservices/odata/targetData',
            key: ${{key}}
        },
        paginate: false,
        // Take summer months only
        filter: [
            [${{key}}, '>=', 6],
            [${{key}}, '<=', 8]
        ]
    });

    export default function App() {
        return (
            <{WidgetName} dataSource={{widgetName}DataSource}>
                {/* ... */}
            </{WidgetName}>
        );
    }

---
