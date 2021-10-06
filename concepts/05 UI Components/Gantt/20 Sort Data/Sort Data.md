The Gantt component allows users to sort data. 

Use the following properties to specify whether users can sort column data:

- [mode](/api-reference/_hidden/dxGanttSorting/mode.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#mode') - For all columns.
- **column.**[mode](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#mode) - For an individual column. Note that this property is in effect if the [mode](/api-reference/_hidden/dxGanttSorting/mode.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#mode') property is not set to 'none'.

Use the **sorting**.[mode](/api-reference/_hidden/dxGanttSorting/mode.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#mode') property to specify the sorting mode.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            sorting: {
                mode: 'multiple'
            }           
        });
    }); 

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-sorting
            mode="multiple">
        </dxo-sorting>        
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
        //...
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
        <DxGantt ... >
            <DxSorting
                mode="multiple" />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, 
            DxSorting, 
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt, 
                DxSorting, 
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
        Sorting, 
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt ... >
                <Sorting 
                    mode="multiple" />
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Sorting(s => {
            s.Mode(GridSortingMode.Multiple)
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Sorting(s => {
            s.Mode(GridSortingMode.Multiple)
        })
        // ...
    )

---
