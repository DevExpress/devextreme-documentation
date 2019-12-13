---
id: GridBase.refresh()
---
---
##### shortDescription
Reloads data and repaints the widget.

##### return: Promise<void>
A Promise that is resolved after data is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---
The widget cannot track changes a third party makes in the data source. To update data in the widget in this case, call the **refresh()** method. [Data sources](/api-reference/_hidden/GridBaseColumn/lookup/dataSource.md '{basewidgetpath}/Configuration/columns/lookup/#dataSource') of lookup columns are updated with the main data source.

The following code shows how to call this method:

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

<!---->

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
        <dx-{widget-name} ...
            :ref="{widgetName}RefKey">
            <!-- ... -->
        </dx-{widget-name}>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName}, /* ... */ } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            // ...
        },
        data() {
            return {
                {widgetName}RefKey: '{widgetName}'
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

    import 'devextreme/dist/css/dx.common.css';
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

[note] Calling the **refresh()** method ends the editing process. In *batch* [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), changes are saved in a buffer before they are saved to the data source. In other modes, all unsaved changes are discarded. 

#####See Also#####
- [refresh(changesOnly)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/refresh(changesOnly).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refreshchangesOnly')
#include common-link-callmethods