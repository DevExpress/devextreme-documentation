---
id: dxGantt.Options.sorting
type: dxGanttSorting
inheritsType: dxGanttSorting
---
---
##### shortDescription
Configures sort settings.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Sorting/"
}

Users can sort Gantt data by a single or multiple columns. Use the [mode](/api-reference/_hidden/dxGanttSorting/mode.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#mode') option to specify the sort mode. 

- **Single Mode**. Click a column header to sort data by this column. Subsequent clicks on the same header reverse the sort order.

    ![DevExtreme Gantt - Sorting](/images/Gantt/sorting-single.png)

- **Multiple Mode**. Hold Shift and click column headers to sort data by multiple columns. Subsequent clicks on the same header with the Shift key pressed reverse the column's sort order. Set the [showSortIndexes](/api-reference/_hidden/dxGanttSorting/showSortIndexes.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#showSortIndexes') option to **true** to show the column sort index in the header.

    ![DevExtreme Gantt - Sorting](/images/Gantt/sorting-multiple.png)

To disable sorting for a particular column, set the column’s **allowSorting** option to **false**.

To clear sorting for a column, hold Ctrl and click the column header. You can also use the column header’s context menu to specify the column’s sort settings and clear sorting. Use the [ascendingText](/api-reference/_hidden/dxGanttSorting/ascendingText.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#ascendingText'), [descendingText](/api-reference/_hidden/dxGanttSorting/descendingText.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#descendingText'), and the [clearText](/api-reference/_hidden/dxGanttSorting/clearText.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#clearText') options to specify text for the corresponding context menu items.

![DevExtreme Gantt - Sorting](/images/Gantt/sorting-context-menu.png)

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
