---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: "http://www.example.com/dataservices/data.json",
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} dataSource="http://www.example.com/dataservices/data.json">
        <!-- ... -->
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} data-source="http://www.example.com/dataservices/data.json">
            <!-- ... -->
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import {WidgetName} from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            <{WidgetName} dataSource="http://www.example.com/dataservices/data.json">
                {/* ... */}
            </{WidgetName}>
        );
    }

---
