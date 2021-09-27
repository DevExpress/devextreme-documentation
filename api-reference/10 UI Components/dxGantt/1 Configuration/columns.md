---
id: dxGantt.Options.columns
type: Array<dxTreeListColumn, String>
default: undefined
inheritsType: dxTreeListColumn
---
---
##### shortDescription
An array of columns in the Gantt.

---

The **columns** property accepts an array of columns. To configure a column, use a **dxTreeListColumn** object or specify a data source field (as a string value) to which the column is bound.

[note]

The Gantt UI component does not support:

- data sorting

- column templates

[/note]

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            columns: [{
                dataField: "title",
                caption: "Subject",
                width: 300
            }, {
                dataField: "start",
                caption: "Start Date"
            }, {
                dataField: "end",
                caption: "End Date"
            }],
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt>
        <dxi-column dataField="title" caption="Subject" [width]="300"></dxi-column>
        <dxi-column dataField="start" caption="Start Date"></dxi-column>
        <dxi-column dataField="end" caption="End Date"></dxi-column>
    </dx-gantt>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            :allow-selection="false" >
            <DxColumn
                :width="300"
                data-field="title"
                caption="Subject"
            />
            <DxColumn
                data-field="start"
                caption="Start Date"
            />
            <DxColumn
                data-field="end"
                caption="End Date"
            />            
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, DxColumn
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt, DxColumn
                // ... 
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 

    import Gantt, { 
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt
                <Column dataField="title" caption="Subject" width={300} />
                <Column dataField="start" caption="Start Date" />
                <Column dataField="end" caption="End Date" />
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Columns(columns => {
            columns.AddFor(m => m.Title)
                .Caption("Subject")
                .Width(300);
            columns.AddFor(m => m.Start)
                .Caption("Start Date");
            columns.AddFor(m => m.End)
                .Caption("End Date");
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Columns(columns => {
            columns.AddFor(m => m.Title)
                .Caption("Subject")
                .Width(300);
            columns.AddFor(m => m.Start)
                .Caption("Start Date");
            columns.AddFor(m => m.End)
                .Caption("End Date");
        })
        // ...
    )

---