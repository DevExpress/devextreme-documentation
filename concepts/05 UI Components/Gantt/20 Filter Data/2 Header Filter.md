The **Gantt** component allows users to filter a particular column by values listed in a pop-up window. Users click the filter icon to invoke the window and select the necessary filter criteria for a column. 

Set the **headerFilter**.[visible](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/headerFilter/#visible) property to **true** to display filter icons for all columns. Assign the [allowHeaderFiltering](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowHeaderFiltering) property to **false** for a column to disable its filter icon. If this property is not specified, it inherits a value of the [allowFiltering](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowFiltering) property.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering HeaderFilter](/images/Gantt/Visual_elements/Header_filter.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/HeaderFilter/"
}

You can use a column's [filterType](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterType) property to set the initial settings of header fiter items: all checked (`filterType=exclude`) or all unchecked (`filterType=include`).

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering HeaderFilter](/images/Gantt/Visual_elements/Header_filter_SelectAll.png)

A header filter consists of unique values in its column. To change the filter values, group them with the [groupInterval](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/#groupInterval) property or bind the [data source](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/#dataSource) to this header filter.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering HeaderFilter](/images/Gantt/Visual_elements/Header_filter_groupInterval.png)

Users can search for the filter values in the header filter. Enable the **headerFilter.**[allowSearch](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/headerFilter/#allowSearch) property at the component level or **columns.headerFilter.**[allowSearch](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowSearch) property at the column level to display the search panel. Use the [searchMode](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/#searchMode) property to define a comparison type for a specific column.

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
            }, {
                dataField: 'start',
                caption: 'Start Date',
                allowHeaderFiltering: false
            }, {
                dataField: 'end',
                caption: 'End Date',
                headerFilter: {
                    groupInterval: 'month'
                }
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

        <dxi-column
            dataField="start"
            caption="Start Date"
            dataType="date"
            [allowHeaderFiltering]="false">
        </dxi-column>
        
        <dxi-column
            dataField="end"
            caption="End Date"
            dataType="date">
            
            <dxo-header-filter 
                groupInterval="month"
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
            
            <DxColumn
                data-field="start"
                caption="Start Date"
                :allowHeaderFiltering="false">
            </DxColumn>

            <DxColumn
                data-field="start"
                caption="Start Date">
                <DxGanttHeaderFilter
        	        groupInterval="month" />
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
                    allowSearch={true}>
                <Column 
                    dataField="title"
                    caption="Subject"
                    filterType="exclude">
                    
                    <HeaderFilter
                        searchMode="startswith">
                    </HeaderFilter>
                </Column>
                
                <Column
                    dataField="start"
                    caption="Start Date"
                    allowHeaderFiltering= {false}>
                </Column>

                <Column 
                    dataField="end"
                    caption="End Date">
      	            <HeaderFilter
                        groupInterval="month"
                    />
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

            columns.AddFor(m => m.Title)
                .DataField("start")
                .Caption("Start Date")
                .AllowHeaderFiltering(false)
            
            columns.AddFor(m => m.Title)
                .DataField("end")
                .Caption("End Date")
                .HeaderFilter(headerFilter => headerFilter.GroupInterval("Month"));
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
        .Columns(columns => {
            columns.AddFor(m => m.Title)
                .DataField("title")
                .Caption("Subject")
                .FilterType("Exclude")
                .HeaderFilter(headerFilter => headerFilter.SearchMode("StartsWith"));

            columns.AddFor(m => m.Title)
                .DataField("start")
                .Caption("Start Date")
                .AllowHeaderFiltering(false)
            
            columns.AddFor(m => m.Title)
                .DataField("end")
                .Caption("End Date")
                .HeaderFilter(headerFilter => headerFilter.GroupInterval("Month"));
            @* ... *@
        })
        .HeaderFilter(e => {
            e.Visible(true)
            e.allowSearch(true);
        })
        
        // ...
    )

---

The **Gantt** allows you to set initial filter settings in code.

Specify a column's [filterValues](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterValues) property to apply the filter criteria to the column. 

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering HeaderFilter](/images/Gantt/Visual_elements/Header_filter_filterValues.png)

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            columns: [{
                dataField: 'title',
                caption: 'Subject',
                filterValues: ['Deploy software', 'Deployment', 'Deployment complete', 'Testing', 'Unit testing']
            }, {
                //...
            }],
            headerFilter: { 
                visible: true,
            }
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-header-filter 
            [visible]="true">
        </dxo-header-filter>
        <dxi-column 
    	    dataField="title"
            caption="Subject"
            [filterValues]="['Deploy software', 'Deployment', 'Deployment complete', 'Testing', 'Unit testing']">
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
            />
            <DxColumn
                data-field="title"
                caption="Subject"
                :filterValues="['Deploy software', 'Deployment', 'Deployment complete', 'Testing', 'Unit testing']">
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
                />
                <Column 
                    dataField="title"
                    caption="Subject"
                    filterValues={['Deploy software', 'Deployment', 'Deployment complete', 'Testing', 'Unit testing']}>
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
                .FilterValues(new[] {"Deploy software", "Deployment", "Deployment complete", "Testing", "Unit testing"});
            @* ... *@
        })
        .HeaderFilter(e => {
            e.Visible(true)
        })
        
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Columns(columns => {
            columns.AddFor(m => m.Title)
                .DataField("title")
                .Caption("Subject")
                .FilterValues(new[] {"Deploy software", "Deployment", "Deployment complete", "Testing", "Unit testing"});
            @* ... *@
        })
        .HeaderFilter(e => {
            e.Visible(true)
        })
        
        // ...
    )

---