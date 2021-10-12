The **Gantt** component allows users to filter a particular column by values listed in a pop-up menu.

Users click the filter icon to open the menu and select the necessary filter criteria for a column.

Set the **headerFilter**.[visible](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/headerFilter/#visible) property to **true** to display filter icons for all columns.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering HeaderFilter](/images/Gantt/Visual_elements/Header_filter.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/HeaderFilter/"
}

Users include and exclude values from the pop-up menu to change the column filter criteria. Set a column's [filterType](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterType) property to **exclude** to select all filter values initially. The "Select All" item click defines this property in the UI.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering HeaderFilter](/images/Gantt/Visual_elements/Header_filter_SelectAll.png)

The **Gantt** allows users to search for values in the header filter. Set the [allowSearch](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/headerFilter/#allowSearch) property to **true** in the global [headerFilter](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/headerFilter/) object or in a column’s [headerFilter](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/) object to display the search panel. At the column level, you can also define a comparison type with the [searchMode](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/#searchMode) property.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering HeaderFilter](/images/Gantt/Visual_elements/Header_filter_SearchPanel.png)

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            columns: [{
                dataField: 'title',
                caption: 'Subject',
                filterType: 'exclude',
                headerFilter: {
                    searchMode: 'startswith'
                }
            }, 
            // ...
            }],
            headerFilter: { 
                visible: true,
                allowSearch: true
            }
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-header-filter 
            [visible]="true"
            [allowSearch]="true">
        </dxo-header-filter>
        <dxi-column 
    	    dataField="title"
            caption="Subject"
            filterType = "exclude">
  		    
            <dxo-header-filter 
                searchMode="startswith"
            />
        </dxi-column>
        <!--...-->
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
            <DxGanttHeaderFilter 
                :visible="true"
                allowSearch="true"
            />
            <DxColumn
                data-field="title"
                caption="Subject"
                filterType="exclude">
                
                <DxGanttHeaderFilter
                    searchMode="startswith"
                />
            </DxColumn>
            <!--...-->
        </DxGantt>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 
    
    import {
      DxGantt,
      DxGanttHeaderFilter,
      // ...
    } from 'devextreme-vue/gantt';

    export default {
      components: {
        DxGantt,
        DxGanttHeaderFilter,
        // ...
      }
    }
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
                    allowSearch={true}
                />
                <Column 
                    dataField="title"
                    caption="Subject"
                    filterType="exclude">
                    
                    <HeaderFilter
                        searchMode="startswith">
                    </HeaderFilter>
                </Column>
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
                .DataField("title")
                .Caption("Subject")
                .FilterType("Exclude")
                .HeaderFilter(headerFilter => headerFilter.SearchMode("StartsWith"));
            @* ... *@
        })
        .HeaderFilter(e => {
            e.Visible(true)
            e.allowSearch(true);
        })
        
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        })
        // ...
    )

---

The **Gantt** allows you to set initial filter settings in code.

Specify a column's [filterValues](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterValues) property to apply the filter criteria to the column. 
Otherwise, to disable a filter icon for a specific column, set its [allowHeaderFiltering](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowHeaderFiltering) property to **false**. If this property is not specified, it inherits the value of the [allowFiltering](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowFiltering) property.

A header filter consists of unique values in its column. To change the filter values, group them with the [groupInterval](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/#groupInterval) property or bind the [data source](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/#dataSource) to this header filter.

**picture**

**code**

Call the [columnOption](/Documentation/ApiReference/UI_Components/dxGantt/Methods/#columnOptionid_options) method for the corresponding column to change its specified filter settings.

**code**