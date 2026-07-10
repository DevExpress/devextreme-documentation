
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            value: 40,
            valueIndicator: { // or subvalueIndicator
                type: "${{indicatorTypeCamelCase}}",
                // The rest of the indicator properties go here
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} [value]="40">
        <dxo-{widget-name}-value-indicator <!-- or dxo-subvalue-indicator -->
            type="${{indicatorTypeCamelCase}}"
            <!-- The rest of the indicator properties go here -->
        ></dxo-{widget-name}-value-indicator>
    <dx-{widget-name}>

    <!-- tab: app.module.ts -->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :value="40">
            <DxValueIndicator <!-- or DxSubvalueIndicator -->
                type="${{indicatorTypeCamelCase}}"
                <!-- The rest of the indicator properties go here -->
            />
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import Dx{WidgetName}, {
        DxValueIndicator
    } from 'devextreme-vue/{widget-name}';
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';

    import { {WidgetName}, ValueIndicator } from 'devextreme-react/{widget-name}';

    function App() {
        return (
            <{WidgetName} value={40}>
                <ValueIndicator {/* or SubvalueIndicator */}
                    type="${{indicatorTypeCamelCase}}"
                    {/* The rest of the indicator properties go here */}
                />
            </{WidgetName}>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().{WidgetName}()
        .ID("{widgetName}")
        .Value(40)
        .ValueIndicator(vi => vi // or .SubvalueIndicator
            .Type(GaugeIndicatorType.${{indicatorTypePascalCase}})
            // The rest of the indicator properties go here
        )
    )


---
