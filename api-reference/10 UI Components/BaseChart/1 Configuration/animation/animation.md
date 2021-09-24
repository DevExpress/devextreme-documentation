---
id: BaseChart.Options.animation
type: Object | Boolean
---
---
##### shortDescription
Specifies animation properties.

---
The UI component animates its elements at the beginning of its lifetime and when the data source changes.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            animation: {
                easing: "linear",
                duration: 500,
                maxPointCountSupported: 100
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-animation
            easing="linear"
            [duration]="500"
            [maxPointCountSupported]="100">
        </dxo-animation>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxAnimation
                easing="linear"
                :duration="500"
                :max-point-count-supported="100"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxAnimation
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxAnimation
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Animation 
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Animation
                        easing="linear"
                        duration={500}
                        maxPointCountSupported={100}
                    />
                </{WidgetName}>
            );
        }
    }
    export default App;

---