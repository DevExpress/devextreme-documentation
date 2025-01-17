---
id: dxGantt.Options.selectedRowKey
type: any | undefined
default: undefined
---
---
##### shortDescription
Allows you to select a row or determine which row is selected.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            selectedRowKey: 1,
            // ...
        });
    }); 

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt
        [selectedRowKey]="1">
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
            :selected-row-key="1" >
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
                selectedRowKey={1} >
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .SelectedRowKey(1)
        // ...
    )

---

#####See Also#####
- [allowSelection](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/allowSelection.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#allowSelection') 
- [onSelectionChanged](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onSelectionChanged')
