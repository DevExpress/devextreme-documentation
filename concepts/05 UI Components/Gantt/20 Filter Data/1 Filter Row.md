The **Gantt** component allows users to filter columns by filter row values. To apply filter criteria, users can enter a value in a column's filter row cell or select the value in this cell's editor.

Set the **filterRow**.[visible](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/filterRow/#visible) property to **true** to display the filter row. Assign **false** to the **columns.**[allowFiltering](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowFiltering) property to disable filtering for a column. 

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering FilterRow](/images/Gantt/Visual_elements/Filter_row.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/FilterRow/"
}

The filter row contains a magnifier icon in its cells. Users can click this icon to select a comparison type from a pop-up list. Set the [showOperationChooser](/Documentation/21_2/ApiReference/UI_Components/dxGantt/Configuration/filterRow/#showOperationChooser) property to **false** for a column to hide the magnifier icon. 

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering FilterRow](/images/Gantt/Visual_elements/Filter_row_operation_chooser.png)

The **Gantt** allows you to define initial filter settings in code. Specify a column's [filterValue](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterValue) property to apply filter criteria to the column.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            columns: [{
                dataField: 'title',
                caption: 'Subject',
                filterValue: 'Scope'
            }, {
                dataField: 'start',
                caption: 'Start Date',
                allowFiltering: false
            }, { 
            // ...
            filterRow: { 
                visible: true
            }
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-filter-row 
            [visible]="true">
        </dxo-filter-row>
        <dxi-column
            dataField="title"
            caption="Subject"
            filterValue="Scope">
        </dxi-column>
        <dxi-column
            dataField="start"
            caption="Start Date"
            dataType="date"
            [allowFiltering]="false">
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
            <DxFilterRow 
                :visible="true"
            />
            <DxColumn
                data-field="title"
                caption="Subject"
                filterValue="Scope"
            />
            <DxColumn
                data-field="start"
                caption="Start Date"
                :allowFiltering="false"
            />
            <!--...-->
        </DxGantt>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 
    
    import {
      DxGantt,
      DxFilterRow,
      DxColumn,
      // ...
    } from 'devextreme-vue/gantt';

    export default {
      components: {
        DxGantt,
        DxFilterRow,
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
        FilterRow,
        Column,
        // ...
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt ... >
                <FilterRow
                    visible={true}
                />
                <Column 
                    dataField="title"
                    caption="Subject"
                    filterValue="Scope"
                />
                <Column
                    dataField="start"
                    caption="Start Date"
                    allowFiltering={false} 
                />
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
                .FilterValue("Scope");
            columns.AddFor(m => m.Title)
                .DataField("start")
                .Caption("Start Date")
                .AllowFiltering(false);
            @* ... *@
        })
        .FilterRow(e => {
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
                .FilterValue("Scope");
            columns.AddFor(m => m.Title)
                .DataField("start")
                .Caption("Start Date")
                .AllowFiltering(false);
            @* ... *@
        })
        .FilterRow(e => {
            e.Visible(true);
        })
        // ...
    )

---

The **Gantt** supports a predefined set of filter operations for each data type. 

Underlying [dataType](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#dataType) defines in-place editor types for filter row cells:

{|
|-
! **dataType**
! **Editor**
|-

| *"string", "number", "object"*
| Text box
|-

| *"boolean"*
| Drop-down list 
|-

| *"date"*
| Date picker
|-

| *"datetime"*
| Date and time picker 
|-
|}

You can use the [filterOperations](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterOperations) property to specify necessary filter operations for each column.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            columns: [{
                dataField: 'title',
                caption: 'Subject',
                filterOperations: ["startswith", "endswith"]
            }, { 
            // ...
            }]
            filterRow: { 
                visible: true,
            }
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-filter-row 
            [visible]="true">
        </dxo-filter-row>
        <dxi-column
            dataField="title"
            caption="Subject"
            [filterOperations]="['startswith', 'endswith']">
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
            <DxFilterRow 
                :visible="true"
            />
            <DxColumn
                data-field="title"
                caption="Subject"
                :filter-operations="['startswith', 'endswith']"
            />
            <!--...-->
        </DxGantt>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 
    
    import {
      DxGantt,
      DxFilterRow,
      DxColumn,
      // ...
    } from 'devextreme-vue/gantt';

    export default {
      components: {
        DxGantt,
        DxFilterRow,
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
        FilterRow,
        Column,
        // ...
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt ... >
                <FilterRow
                    visible={true}
                />
                <Column 
                    dataField="title"
                    caption="Subject"
                    filterOperations={['startswith', 'endswith']}
                />
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
                .FilterOperations(new[] { GridFilterOperations.StartsWith, GridFilterOperations.EndsWith });
            @* ... *@
        })
        .FilterRow(e => {
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
                .FilterOperations(new[] { GridFilterOperations.StartsWith, GridFilterOperations.EndsWith });
            @* ... *@
        })
        .FilterRow(e => {
            e.Visible(true);
        })
        // ...
    )

---