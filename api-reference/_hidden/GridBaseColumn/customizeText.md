---
id: GridBaseColumn.customizeText
type: function(cellInfo)
---
---
##### shortDescription
Customizes the text displayed in column cells.

##### param(cellInfo): Object
Information on the current cell.

##### field(cellInfo.groupInterval): String | Number
Indicates how header filter values were combined into groups. Available if **target** is *"headerFilter"*.  
See the **headerFilter**.[groupInterval](/api-reference/_hidden/GridBaseColumn/headerFilter/groupInterval.md '{basewidgetpath}/Configuration/columns/headerFilter/#groupInterval') option's description for possible values.

##### field(cellInfo.target): String
The UI element where the **customizeText** function was called: *"row"*, *"filterRow"*, *"headerFilter"*, *"search"*, *"filterPanel"*, or *"filterBuilder"*.

##### field(cellInfo.value): String | Number | Date
The cell's raw value.

##### field(cellInfo.valueText): String
The [fomatted](/api-reference/_hidden/dxDataGridColumn/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format') value converted to a string.

##### return: String
The text the cell should display.

---

---
#####jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                dataField: "Temperature",
                customizeText: function(cellInfo) {
                    return cellInfo.value + " &deg;C";
                }
            }]
        });
    });

#####Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
       <dxi-column
           dataField="Temperature"
           [customizeText]="customizeText"
       ></dxi-column>
    </dx-{widget-name}>


    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customizeText(cellInfo) {
            return cellInfo.value + " &deg;C";
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

#####Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn
                data-field="Temperature" 
                :customize-text="customizeText"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName}, DxColumn } from "devextreme-vue/{widget-name}";

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        methods: {
            customizeText(cellInfo) {
                return cellInfo.value + " &deg;C";
            }
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, { Column } from "devextreme-react/{widget-name}";
    
    class App extends React.Component {
        customizeText = (cellInfo) => {
            return cellInfo.value + " &deg;C";
        }
        render() {
            return (
                <{WidgetName} ... >
                    <Column dataField="Temperature" customizeText={this.customizeText} />
                </{WidgetName}>
            );
        }
    }
    export default App;

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        //...
        .Columns(columns => {
            columns.Add().DataField("Temperature")
                .CustomizeText("customizeText");
        })
    )

    <script type="text/javascript">
        function customizeText(cellInfo) {
            return cellInfo.value + " &deg;C";
        }
    </script>

---

[note] The specified text is not used to sort, filter, and group data or calculate summaries. If it should be, specify the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dx{WidgetName}/Configuration/columns/#calculateCellValue') function instead.

The **customizeText** function can be called to highlight the matching text correctly when the data displayed in the column matches the search condition.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}

#####See Also#####
- [Customize the Value and Text](/concepts/05%20Widgets/DataGrid/15%20Columns/40%20Customize%20Cells/1%20Customize%20the%20Value%20and%20Text.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Customize_Cells/#Customize_the_Value_and_Text')
- **columns[]**.[calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue')