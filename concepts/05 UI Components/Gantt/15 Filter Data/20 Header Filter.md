The **Gantt** component allows users to filter a particular column by values listed in a pop-up window. Users click the filter icon to invoke the window and select the filter criteria for a column. 

Set the **headerFilter**.[visible](/api-reference/_hidden/dxGanttHeaderFilter/visible.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/headerFilter/#visible') property to **true** to display filter icons for all columns. Assign **false** to the [allowHeaderFiltering](/api-reference/_hidden/GridBaseColumn/allowHeaderFiltering.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowHeaderFiltering') property for a column to disable its filter icon. If this property is not specified, the filtering option depends on the [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowFiltering') property's value.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering HeaderFilter](/images/Gantt/Visual_elements/Header_filter.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/HeaderFilter/"
}

You can use a column's [filterType](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/columns/filterType.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterType') property to specify the initial settings of header filter items: all checked (`filterType=exclude`) or all unchecked (`filterType=include`).

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering HeaderFilter](/images/Gantt/Visual_elements/Header_filter_SelectAll.png)

The header filter contains unique column values. You can change them in the following ways:

* Use the [groupInterval](/api-reference/_hidden/GridBaseColumn/headerFilter/groupInterval.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/#groupInterval') property to group filter values.

* Bind the header filter to a [data source](/api-reference/_hidden/GridBaseColumn/headerFilter/dataSource.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/#dataSource').

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering HeaderFilter](/images/Gantt/Visual_elements/Header_filter_groupInterval.png)

Users can search for the filter values in the header filter. Enable the **headerFilter.**[allowSearch](/api-reference/_hidden/dxGanttHeaderFilter/allowSearch.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/headerFilter/#allowSearch') property at the component level or **columns.headerFilter.**[allowSearch](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/#allowSearch) property at the column level to display the search panel. Use the [searchMode](/api-reference/_hidden/GridBaseColumn/headerFilter/searchMode.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/headerFilter/#searchMode') property to define a comparison type for a specific column. 

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
      DxColumn,
      // ...
    } from 'devextreme-vue/gantt';

    export default {
      components: {
        DxGantt,
        DxGanttHeaderFilter,
        DxColumn,
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
        Column,
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
                    allowHeaderFiltering={false}>
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
                .FilterType(FilterType.Exclude)
                .HeaderFilter(headerFilter => headerFilter.SearchMode(CollectionSearchMode.StartsWith));

            columns.AddFor(m => m.Title)
                .DataField("start")
                .Caption("Start Date")
                .AllowHeaderFiltering(false)
            
            columns.AddFor(m => m.Title)
                .DataField("end")
                .Caption("End Date")
                .HeaderFilter(headerFilter => headerFilter.GroupInterval(HeaderFilterGroupInterval.Month));
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
                .FilterType(FilterType.Exclude)
                .HeaderFilter(headerFilter => headerFilter.SearchMode(CollectionSearchMode.StartsWith));

            columns.AddFor(m => m.Title)
                .DataField("start")
                .Caption("Start Date")
                .AllowHeaderFiltering(false)
            
            columns.AddFor(m => m.Title)
                .DataField("end")
                .Caption("End Date")
                .HeaderFilter(headerFilter => headerFilter.GroupInterval(HeaderFilterGroupInterval.Month));
            @* ... *@
        })
        .HeaderFilter(e => {
            e.Visible(true);
            e.allowSearch(true);
        })
        
        // ...
    )

---

The **Gantt** allows you to define initial filter settings in code. Specify the [filterValues](/api-reference/_hidden/GridBaseColumn/filterValues.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterValues') property for a column to customize its filter settings. 

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
      DxColumn,
      // ...
    } from 'devextreme-vue/gantt';

    export default {
      components: {
        DxGantt,
        DxGanttHeaderFilter,
        DxColumn,
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
        Column,
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
            e.Visible(true);
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
            e.Visible(true);
        })

        // ...
    )

---