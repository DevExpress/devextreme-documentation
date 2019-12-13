The following code shows how to use the **customizeItems** function to sort legend items alphabetically:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            legend: {
                customizeItems: function(items) {
                    return items.sort(function(a, b) {
                        var itemA = a.text.toLowerCase();
                        var itemB = b.text.toLowerCase();
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
        <dxo-legend ...
            [customizeItems]="sortLegendItems">
        </dxo-legend>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        sortLegendItems(items) {
            return items.sort((a, b) => {
                let itemA = a.text.toLowerCase();
                let itemB = b.text.toLowerCase();
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
        <dx-{widget-name} ... >
            <dx-legend
                :customize-items="sortLegendItems"
            />
        </dx-{widget-name}>
    </template>

    <script>
    import { Dx{WidgetName}, DxLegend } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxLegend
        },
        methods: {
            sortLegendItems(items) {
                return items.sort((a, b) => {
                    let itemA = a.text.toLowerCase();
                    let itemB = b.text.toLowerCase();
                    if(itemA < itemB) return -1;
                    if(itemA > itemB) return 1;
                    return 0;
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import { {WidgetName}, Legend } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Legend ...
                        customizeItems={this.sortLegendItems}
                    />
                </{WidgetName}>
            );
        }

        sortLegendItems(items) {
            return items.sort((a, b) => {
                let itemA = a.text.toLowerCase();
                let itemB = b.text.toLowerCase();
                if(itemA < itemB) return -1;
                if(itemA > itemB) return 1;
                return 0;
            });
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        @* ... *@
        .Legend(l => l
            .CustomizeItems("sortLegendItems")
        )
    )

    <script type="text/javascript">
        function sortLegendItems (items) {
            return items.sort(function(a, b) {
                var itemA = a.text.toLowerCase();
                var itemB = b.text.toLowerCase();
                if(itemA < itemB) return -1;
                if(itemA > itemB) return 1;
                return 0;
            });
        }
    </script>

---
