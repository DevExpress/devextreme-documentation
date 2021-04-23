---
id: dxGantt.Options.allowSelection
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether users can select tasks in the Gantt.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            allowSelection: false,
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt
        [allowSelection]="false">
        <!-- ... -->
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
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt
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
                allowSelection={false} >
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .AllowSelection(false)
        // ...
    )

---

#####See Also#####
- [onSelectionChanged](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onSelectionChanged') 
- [selectedRowKey](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/selectedRowKey.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#selectedRowKey')
