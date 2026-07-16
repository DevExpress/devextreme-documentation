The following code shows how to use the **customizeItems** function to sort legend items alphabetically:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            legend: {
                customizeItems: function(items) {
                    return items.sort(function(a, b) {
                        const itemA = a.text.toLowerCase();
                        const itemB = b.text.toLowerCase();
                        if(itemA < itemB) return -1;
                        if(itemA > itemB) return 1;
                        return 0;
                    });
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-{widget-name}-legend ...
            [customizeItems]="sortLegendItems">
        </dxo-{widget-name}-legend>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        sortLegendItems(items) {
            return items.sort((a, b) => {
                const itemA = a.text.toLowerCase();
                const itemB = b.text.toLowerCase();
                if(itemA < itemB) return -1;
                if(itemA > itemB) return 1;
                return 0;
            });
        }
    }

    <!-- tab: app.module.ts -->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxLegend
                :customize-items="sortLegendItems"
            />
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import { Dx{WidgetName}, DxLegend } from 'devextreme-vue/{widget-name}';

    function sortLegendItems(items) {
        return items.sort((a, b) => {
            const itemA = a.text.toLowerCase();
            const itemB = b.text.toLowerCase();
            if(itemA < itemB) return -1;
            if(itemA > itemB) return 1;
            return 0;
        });
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import { {WidgetName}, Legend } from 'devextreme-react/{widget-name}';

    function sortLegendItems(items) {
        return items.sort((a, b) => {
            const itemA = a.text.toLowerCase();
            const itemB = b.text.toLowerCase();
            if(itemA < itemB) return -1;
            if(itemA > itemB) return 1;
            return 0;
        });
    }

    function App() {
        return (
            <{WidgetName} ... >
                <Legend ...
                    customizeItems={sortLegendItems}
                />
            </{WidgetName}>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().{WidgetName}()
        .Legend(l => l
            .CustomizeItems("sortLegendItems")
        )
        @* ... *@
    )

    <script type="text/javascript">
        function sortLegendItems (items) {
            return items.sort(function(a, b) {
                const itemA = a.text.toLowerCase();
                const itemB = b.text.toLowerCase();
                if(itemA < itemB) return -1;
                if(itemA > itemB) return 1;
                return 0;
            });
        }
    </script>

---
