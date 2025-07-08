---
id: GridBase.refresh()
---
---
##### shortDescription
Reloads data and repaints data rows.

##### return: Promise<void>
A Promise that is resolved after data is loaded.
#include ref-promisedistinction

---
**refresh()** calls [dataSource]({basewidgetpath}/Configuration/#dataSource).[reload()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload) and refreshes component properties such as [selection]({basewidgetpath}/Configuration/selection/) and lookup column [dataSources]({basewidgetpath}/Configuration/columns/lookup/#dataSource). This method also repaints all data rows if [repaintChangesOnly]({basewidgetpath}/Configuration/#repaintChangesOnly) is `false` (default).

{WidgetName} cannot track data source changes applied outside of the component. To update the component in such cases, call the **refresh()** method.

The following code snippet shows how to call **refresh()**:

---
#####jQuery

    <!-- tab: index.js -->
    var {widgetName} = $("#{widgetName}Container").dx{WidgetName}("instance");
    {widgetName}.refresh()
        .done(function() {
            // ...
        })
        .fail(function(error) {
            // ...
        });

#####Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} #{widgetName}Var ... >
        <!-- ... -->
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild('{widgetName}Var', { static: false }) {widgetName}: Dx{WidgetName}Component;
        // Prior to Angular 8
        // @ViewChild('{widgetName}Var') {widgetName}: Dx{WidgetName}Component;

        refresh{WidgetName}() {
            this.{widgetName}.instance.refresh()
                .then(function() {
                    // ...
                })
                .catch(function(error) {
                    // ...
                });
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :ref="{widgetName}RefKey">
            <!-- ... -->
        </Dx{WidgetName}>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName}, /* ... */ } from 'devextreme-vue/{widget-name}';

    const {widgetName}RefKey = 'my-{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            // ...
        },
        data() {
            return {
                {widgetName}RefKey
            };
        },
        computed: {
            {widgetName}: function() {
                return this.$refs[{widgetName}RefKey].instance;
            }
        },
        methods: {
            refresh{WidgetName}() {
                this.{widgetName}.refresh()
                    .then(function() {
                        // ...
                    })
                    .catch(function(error) {
                        // ...
                    });
            }
        }
    };
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, /* ... */ } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ...
                    ref={ref => this.{widgetName} = ref}>
                    {/* ... */}
                </{WidgetName}>
            );
        }
        refresh{WidgetName}() {
            this.{widgetName}.instance.refresh()
                .then(function() {
                    // ...
                })
                .catch(function(error) {
                    // ...
                });
        }
    }
    export default App;

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        .ID("{widgetName}Container")
        // ...
    )
    <script type="text/javascript">
        function refresh{WidgetName}() {
            var {widgetName} = $("#{widgetName}Container").dx{WidgetName}("instance");
            {widgetName}.refresh()
                .done(function() {
                    // ...
                })
                .fail(function(error) {
                    // ...
                });
        }
    </script>

---

[note]

- Calling the **refresh()** method in edit mode discards unsaved changes and cancels the edit mode. When **editing**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') is *"batch"*, the component cancels the edit mode but does not discard unsaved changes.
- **refresh()** does not repaint the editing popup when **editing**.**mode** is *"popup"*.
- The component may reject the **refresh** promise if {WidgetName} accesses its **dataSource** while the promise is in progress. To avoid rejecting the **refresh** promise, modify properties that initiate data queries after **refresh** is completed.

[/note]

#####See Also#####
- [refresh(changesOnly)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/refresh(changesOnly).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#refreshchangesOnly')
#include common-link-callmethods