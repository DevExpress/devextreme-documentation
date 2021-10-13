Use a column's [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#sortOrder') property to specify the sort order for column values. You can also specify the [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#sortIndex') property for this column to sort data by multiple columns. If the [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#sortIndex') property is not specified, each sorted column gets a sort index according to its position in the [columns](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/columns.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/') array. To show column sort indexes in the column headers, set the [showSortIndexes](/api-reference/_hidden/dxGanttSorting/showSortIndexes.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#showSortIndexes') property to **true**.

The following code sorts data by the "Start" and "End" columns:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            columns: [
                {"start", sortIndex: 0, sortOrder: "asc"},
                {"end", sortIndex: 1, sortOrder: "asc" }
            ],
            sorting: {
                mode: 'multiple'
            }           
        });
    }); 

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxi-column dataField="start" [sortIndex]="0" sortOrder="asc">
        </dxi-column>
        <dxi-column dataField="end" [sortIndex]="1" sortOrder="asc">
        </dxi-column>
        <dxo-sorting mode="multiple">
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
            <DxColumn
                data-field="start"
                :sort-index="0"
                sort-order="asc"
            />
            <DxColumn
                data-field="end"
                :sort-index="1"
                sort-order="asc"
            />         
            <DxSorting
                mode="multiple"/>
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, 
            DxSorting, 
            DxColumn,
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt, 
                DxSorting, 
                DxColumn,
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
        Column,
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt ... >
                <Column dataField="start" sortIndex={0} sortOrder="asc" />
                <Column dataField="end" sortIndex={1} sortOrder="asc" />
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
        .Columns(columns => {
            columns.AddFor(m => m.Start)
                .SortIndex(0);
                .SortOrder(SortOrder.Asc);                
            columns.AddFor(m => m.End)
                .SortIndex(1);
                .SortOrder(SortOrder.Asc);
        })
        .Sorting(s => {
            s.Mode(GridSortingMode.Multiple)
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Columns(columns => {
            columns.AddFor(m => m.Start)
                .SortIndex(0);
                .SortOrder(SortOrder.Asc);                
            columns.AddFor(m => m.End)
                .SortIndex(1);
                .SortOrder(SortOrder.Asc);
        })
        .Sorting(s => {
            s.Mode(GridSortingMode.Multiple)
        })
        // ...
    )

---

Use the [ascendingText](/api-reference/_hidden/dxGanttSorting/ascendingText.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#ascendingText'), [descendingText](/api-reference/_hidden/dxGanttSorting/descendingText.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#descendingText'), and the [clearText](/api-reference/_hidden/dxGanttSorting/clearText.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#clearText') options to specify text for corresponding context menu items.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            sorting: {
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
            s.AscendingText("Ascending Order")
            s.DescendingText("Descending Order")
            s.ClearText("Clear Sort")
        })
        // ...
    )

---
