---
id: dxDataGrid.Options.customizeColumns
type: function(columns)
---
---
##### shortDescription
Customizes columns after they are created.

##### param(columns): Array<dxDataGridColumn>
All column [configurations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/').

---
Use this function to make minor adjustments to automatically generated columns. You can access and modify column configurations using the function's parameter. 

---
##### jQuery

    <!-- tab: index.js -->
    $("#{widgetName}").dx{WidgetName}({
        // ...
        customizeColumns: function (columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        }
    })

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { Dx{WidgetName}Component } from "devextreme-angular/ui/{widget-name}";
    
    @Component({
        imports: [Dx{WidgetName}Component],
        // ...
    })
    export class AppComponent {
        customizeColumns (columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        }
    }

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [customizeColumns]="customizeColumns">
    </dx-{widget-name}>



##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :customize-columns="customizeColumns" />
    </template>

    <script setup lang="ts">
    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

    function customizeColumns(columns) {
        columns[0].width = 100;
        columns[1].width = 210;
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useCallback } from 'react'
    import { {WidgetName} } from 'devextreme-react/{widget-name}';

    function App() {
        const customizeColumns = useCallback((columns) => {
            columns[0].width = 100;
            columns[1].width = 210;
        }, []);

        return (
            <{WidgetName} customizeColumns={customizeColumns} />
        );
    }

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().{WidgetName}()
        .CustomizeColumns("customizeColumns")
    )

    <script>
        function customizeColumns(columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        }
    </script>

---

---
##### jQuery

[note] Columns created using **customizeColumns** do not support data shaping operations such as sorting, filtering, and summaries.

##### Angular

[note] Columns created using **customizeColumns** do not support data shaping operations such as sorting, filtering, and summaries.

##### Vue

[note] Columns created using **customizeColumns** do not support data shaping operations such as sorting, filtering, and summaries.

##### React

[note]

- Columns created using **customizeColumns** do not support data shaping operations such as sorting, filtering, and summaries.
- You cannot configure templates in **customizeColumns** (render functions and components such as [cellRender](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellRender) and [cellComponent](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellComponent)).

[/note]

---

#####See Also#####
- [columns[]](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columns/')