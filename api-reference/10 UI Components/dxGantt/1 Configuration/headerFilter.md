---
id: dxGantt.Options.headerFilter
type: dxGanttHeaderFilter
inheritsType: dxGanttHeaderFilter
---
---
##### shortDescription
Configures the header filter settings.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/HeaderFilter/"
}

The header filter allows users to filter values in an individual column. The header filter is a popup window that contains all unique values of a column. A click on the filter icon invokes the header filter.

![DevExtreme Gantt - Header Filter](/images/Gantt/header-filter.png)

Set the **headerFilter**.[visible](/Documentation/ApiReference/UI_Components/dxGantt/headerFilter/#visible) property to **true** to display filter icons for all columns. To hide the filter icon for an individual column, set the column’s [allowHeaderFiltering](/Documentation/ApiReference/UI_Components/dxGantt/columns/#allowHeaderFiltering) property to **false**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            headerFilter: {
                visible: true,
                width: 280,
                height: 350,
                searchTimeout: 800
            },
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-header-filter
            [visible]="true" 
            [width]="280"
            [height]="350"
            [searchTimeout]="800" >
        </dxo-header-filter>
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
        <DxGantt ... >
            <DxHeaderFilter
                :visible="true"
                :width="280"
                :height="350" 
                :search-timeout="800"
            />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, 
            DxHeaderFilter, 
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt, 
                DxHeaderFilter, 
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
        HeaderFilter, 
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt ... >
                <HeaderFilter
                    visible={true}
                    width={280} 
                    height={350}
                    searchTimeout={800} />
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .HeaderFilter(e => {
            e.Visible(true)
            e.Width(280)
            e.Height(350)
            e.SearchTimeout(800)
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .HeaderFilter(e => {
            e.Visible(true)
            e.Width(280)
            e.Height(350)
            e.SearchTimeout(800)
        })
        // ...
    )

---

#####See Also#####
- [filterRow](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#filterRow)