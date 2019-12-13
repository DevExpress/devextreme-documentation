---
id: GridBaseColumn.calculateDisplayValue
type: String | function(rowData)
---
---
##### shortDescription
Calculates custom display values for column cells. Requires specifying the [dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') or [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue') option. Used in [lookup optimization](/concepts/05%20Widgets/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/020%20Lookup%20Optimization.md '/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Lookup_Optimization').

##### param(rowData): Object
The data of the row to which the cell belongs.

##### return: any
The value for the cell to display.

---
This option accepts the name of the [data source field](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') that provides display values...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "countryID", // provides values for editing
                calculateDisplayValue: "country" // provides display values
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="countryID" <!-- provides values for editing -->
            calculateDisplayValue="country"> <!-- provides display values -->
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })
##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name}>
            <dx-column          
                data-field="countryID" <!-- provides values for editing -->
                calculate-display-value="country"> <!-- provides display values -->  
            />
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn 
        },
        // ...
    }
    </script>  

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        // ...

        render() {
            return (
                <{WidgetName}>
                    <Column 
                        dataField="countryID"  <!-- provides values for editing -->
                        calculateDisplayValue="country"  <!-- provides display values -->  
                    />
                </{WidgetName}>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        .Columns(columns => columns.Add()
            .DataField("CountryID")
            .CalculateDisplayValue("Country")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().{WidgetName}() _
        .Columns(Sub(columns)
            columns.Add() _
                .DataField("CountryID") _
                .CalculateDisplayValue("Country")
        End Sub)        
    )

---

... or a function that combines display values. Specify this function only if all data processing operations are [executed on the client](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '{basewidgetpath}/Configuration/remoteOperations/').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "countryID", // provides values for editing
                calculateDisplayValue: function (rowData) { // combines display values
                    return rowData.capital + " (" + rowData.country + ")";
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="countryID" <!-- provides values for editing -->
            [calculateDisplayValue]="getCountryWithCapital"> <!-- combines display values -->
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        getCountryWithCapital(rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })
    
##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name}>
            <dx-column       
                data-field="countryID" <!-- provides values for editing -->
                :calculate-display-value="getCountryWithCapital" <!-- combines display values -->
            />
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn 
        },
        methods: {
            getCountryWithCapital(rowData) {
                return rowData.capital + " (" + rowData.country + ")";
            }
        }
    }
    </script>  

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        // ...

        render() {
            return (
                <{WidgetName}>
                    <Column
                        dataField="countryID" <!-- provides values for editing -->                 
                        calculateDisplayValue={this.getCountryWithCapital} <!-- combines display values -->
                    />
                </{WidgetName}>
            );
        }
        
        getCountryWithCapital(rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        .Columns(columns => columns.Add()
            .DataField("CountryID")
            .CalculateDisplayValue(new JS("getCountryWithCapital"))
        )
    )

    <script>
        function getCountryWithCapital(rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }        
    </script>

    <!--Razor VB-->
    @(Html.DevExtreme().{WidgetName}() _
        .Columns(Sub(columns)
            columns.Add() _
                .DataField("CountryID") _
                .CalculateDisplayValue(New JS("getCountryWithCapital"))
        End Sub)        
    )

    <script>
        function getCountryWithCapital(rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }        
    </script>    
    
---

The widget uses the specified display values in [sorting](/concepts/05%20Widgets/DataGrid/25%20Sorting '/Documentation/Guide/Widgets/{WidgetName}/Sorting/'), [searching](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Search_Panel'), and [grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/') (in case of **DataGrid**).

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}

Do not use this option to format text in cells. Instead, use the [format](/api-reference/_hidden/GridBaseColumn/format.md '{basewidgetpath}/Configuration/columns/#format'), [customizeText](/api-reference/_hidden/GridBaseColumn/customizeText.md '{basewidgetpath}/Configuration/columns/#customizeText'), or [cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate') option.