---
id: dxTreeList.Options.customizeColumns
type: function(columns)
---
---
##### shortDescription
Customizes columns after they are created.

##### param(columns): Array<dxTreeListColumn>
All column [configurations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/').

---
Use this function to make minor adjustments to automatically generated columns. You can access and modify column configurations using the function's parameter. 

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}").dx{WidgetName}({
            // ...
            customizeColumns: function (columns) {
                columns[0].width = 100;
                columns[1].width = 210;
            }
        })
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ...
        [customizeColumns]="customizeColumns">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name} ...
            :customize-columns="customizeColumns"> 
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        // ... 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        methods: {
            customizeColumns(columns) {
                columns[0].width = 100;
                columns[1].width = 210;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        // ...
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        customizeColumns = (columns) => {
            columns[0].width = 100;
            columns[1].width = 210;
        }
        render() {
            return (
                <{WidgetName} ...
                    customizeColumns={this.customizeColumns}
                />
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().{WidgetName}()
        // ...
        .CustomizeColumns("customizeColumns")
    )
    <script>
        function customizeColumns(columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        }
    </script>

---

For a more profound column customization, declare the [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') array.