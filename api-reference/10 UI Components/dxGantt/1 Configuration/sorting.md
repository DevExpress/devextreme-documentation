---
id: dxGantt.Options.sorting
type: dxGanttSorting
---
---
##### shortDescription
Configures sorting settings.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Sorting/"
}

Users can sort Gantt data by a single or multiple columns. Use the [mode](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#mode) option to specify the sort mode. To disable sorting for a particular column, set the column’s **allowSorting** option to **false**.

The header’s context menu allows you to specify a column’s sort settings and clear sorting. Use the [ascendingText](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#ascendingText), [descendingText](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#descendingText) and the [clearText](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#clearText) options to specifies text for the corresponding context menu items. 

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            sorting: {
                mode: 'multiple',
                showSortIndexes: true,
                ascendingText: "Ascending Order",
                descendingText: "Descending Order",
                clearText: "Clear Sort"
            }           
        });
    }); 

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-sorting
            mode="multiple" 
            [showSortIndexes]="true" 
            ascendingText="Ascending Order" 
            descendingText="Descending Order"
            clearText="Clear Sort">
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
                mode="multiple"
                :show-sort-indexes="true"
                ascending-text="Ascending Order"
                descending-text="Descending Order"
                clear-text="Clear Sort" />
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
                    mode="multiple"
                    showSortIndexes={true}
                    ascendingText="Ascending Order" 
                    descendingText="Descending Order"
                    clearText="Clear Sort" />
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
            s.ShowSortIndexes(true)
            s.AscendingText("Ascending Order")
            s.DescendingText("Descending Order")
            s.ClearText("Clear Sort")
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Sorting(s => {
            s.Mode(GridSortingMode.Multiple)
            s.ShowSortIndexes(true)
            s.AscendingText("Ascending Order")
            s.DescendingText("Descending Order")
            s.ClearText("Clear Sort")
        })
        // ...
    )

---
