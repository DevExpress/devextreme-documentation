---
id: dxGantt.Options.columns
type: Array<dxTreeListColumn, String>
default: undefined
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
    <dx-gantt
        <dxi-column dataField="title" caption="Subject" [width]="300"></dxi-column>
        <dxi-column dataField="start" caption="Start Date"></dxi-column>
        <dxi-column dataField="end" caption="End Date"></dxi-column>
    </dx-gantt>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        // ...      
    }    

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxGanttModule } from 'devextreme-angular';

    @NgModule({
        imports: [
            BrowserModule,
            DxGanttModule
        ],        
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

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

---