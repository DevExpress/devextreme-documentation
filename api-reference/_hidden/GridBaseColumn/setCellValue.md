---
id: GridBaseColumn.setCellValue
type: function(this, newData, value, currentRowData)
---
---
##### shortDescription
Specifies a function to be invoked after the user has edited a cell value, but before it is saved in the data source.

##### param(newData): Object
The data object where new data should be set.

##### param(value): any
The input value.

##### param(currentRowData): Object
A read-only parameter providing access to the current row data.

##### return: void | Promise<void>
Return a promise for an asynchronous operation or return nothing.

##### context: GridBaseColumn
The `this` keyword refers to the column's configuration.

---
This function allows you to process user input before it is saved to the data source. It accepts the **newData**, **value**, and **currentRowData** parameters. **value** is the user input that you should assign to one of the **newData** fields. Fill the empty **newData** object with fields whose values should be saved in the current row's data object. You can use the read-only **currentRowData** parameter to access the current row's data.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [
                "Price",
                {
                    dataField: "Count",
                    dataType: "number",
                    setCellValue: function(newData, value, currentRowData) {
                        newData.Count = value;
                        newData.TotalPrice = currentRowData.Price * value;
                    }
                },
                "TotalPrice",
                // ...
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column dataField="Price"></dxi-column>
        <dxi-column
            dataField="Count"
            dataType="number"
            [setCellValue]="setCellValue">
        </dxi-column>
        <dxi-column dataField="TotalPrice"></dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        setCellValue (newData, value, currentRowData) {
            newData.Count = value;
            newData.TotalPrice = currentRowData.Price * value;
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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

#####Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn data-field="Price" />
            <DxColumn data-field="Count" data-type="number" :set-cell-value="setCellValue" />
            <DxColumn data-field="TotalPrice" />
        </Dx{WidgetName}>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        // ...
        methods: {
            setCellValue(newData, value, currentRowData) {
                newData.Count = value;
                newData.TotalPrice = currentRowData.Price * value;
            }
        }
    };
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        setCellValue(newData, value, currentRowData) {
            newData.Count = value;
            newData.TotalPrice = currentRowData.Price * value;
        }

        render() {
            return (
                <{WidgetName} ... >
                    <Column dataField="Price" />
                    <Column dataField="Count" dataType="numeric" setCellValue={this.setCellValue}/>
                    <Column dataField="TotalPrice" />
                </{WidgetName}>
            );
        }
    }
    export default App;

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        // ...
        .Columns(c => {
            c.Add().DataField("Price");
            c.Add().DataField("Count")
                .DataType(GridColumnDataType.Number)
                .SetCellValue(@<text>
                    function(newData, value, currentRowData) {
                        newData.Count = value;
                        newData.TotalPrice = currentRowData.Price * value;
                    }
                </text>);
            c.Add().DataField("TotalPrice");
        })
    )

---

The **setCellValue** property forces the component to repaint all items in the edit form. Set [repaintChangesOnly](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/repaintChangesOnly.md '{basewidgetpath}/Configuration/#repaintChangesOnly') to **true** so the component re-renders only the fields with the changed values.

To perform asynchronous operations in the **setCellValue** function, return a promise from it. The following code uses this technique to get the `Tax` value from the server when the `State` value is changed:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                dataField: "State",
                setCellValue: function(newData, value, currentRowData) {
                    return getTaxRates(value)
                        .done(function(data) {
                            newData.State = value;
                            newData.Tax = data.Tax;
                        });
                }
            },
            "Tax",
            // ...
            ]
        });
        function getTaxRates(state) {
            var promise = $.ajax({
                // The URL returns { State: 1, Tax: 10 }
                url: "https://www.mywebsite.com/api/getTaxRates",
                dataType: "json",
                data: { State: state }
            });
            return promise;
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="State"
            [setCellValue]="setCellValue">
        </dxi-column>
        <dxi-column dataField="Tax"></dxi-column>
        <!-- ... -->
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient, HttpParams } from '@angular/common/http';
    import 'rxjs/add/operator/toPromise';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor(private httpClient: HttpClient) {
            this.setCellValue = this.setCellValue.bind(this);
        }

        setCellValue(newData, value, currentRowData) {
            return this.getTaxRates(value).then((data: any) => {
                newData.State = value;
                newData.Tax = data.Tax;
            });
        }
        getTaxRates(state) {
            const params = new HttpParams().set('State', state);
            return this.httpClient.get("https://www.mywebsite.com/api/getTaxRates", { params })
                .toPromise()
                .then(data => {
                    // "data" is { State: 1, Tax: 10 }
                    return data;
                })
                .catch(error => { throw "Data Loading Error" });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { HttpClientModule } from '@angular/common/http';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

#####Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn data-field="State" :set-cell-value="setCellValue" />
            <DxColumn data-field="Tax" />
            <!-- ... -->
        </Dx{WidgetName}>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';
    import 'whatwg-fetch';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        // ...
        methods: {
            setCellValue(newData, value, currentRowData) {
                return this.getTaxRates(value).then(data => {
                    newData.State = value;
                    newData.Tax = data.Tax;
                });
            },
            getTaxRates(state) {
                let params = '?' + 'State=' + state;
                return fetch("https://www.mywebsite.com/api/getTaxRates${params}")
                    .toPromise()
                    .then(data => {
                        // "data" is { State: 1, Tax: 10 }
                        return data;
                    })
                    .catch(error => { throw "Data Loading Error" });
            }
        }
    };
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';
    import 'whatwg-fetch';
    
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.setCellValue = this.setCellValue.bind(this);
        }

        setCellValue(newData, value, currentRowData) {
            return this.getTaxRates(value).then(data => {
                newData.State = value;
                newData.Tax = data.Tax;
            });
        }
        getTaxRates(state) {
            let params = '?' + 'State=' + state;
            return fetch("https://www.mywebsite.com/api/getTaxRates${params}")
                .toPromise()
                .then(data => {
                    // "data" is { State: 1, Tax: 10 }
                    return data;
                })
                .catch(error => { throw "Data Loading Error" });
        }

        render() {
            return (
                <{WidgetName} ... >
                    <Column dataField="State" setCellValue={this.setCellValue}/>
                    <Column dataField="Tax" />
                    {/* ... */}
                </{WidgetName}>
            );
        }
    }
    export default App;

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        // ...
        .Columns(c => {
            c.Add().DataField("State")
                .SetCellValue("setCellValue");
            c.Add().DataField("Tax");
            // ...
        })
    )
    <script type="text/javascript">
        function setCellValue(newData, value, currentRowData) {
            return getTaxRates(value).done(function(data) {
                newData.State = value;
                newData.Tax = data.Tax;
            });
        }
        function getTaxRates(state) {
            var promise = $.ajax({
                // The URL returns { State: 1, Tax: 10 }
                url: "https://www.mywebsite.com/api/getTaxRates",
                dataType: "json",
                data: { State: state }
            });
            return promise;
        }
    </script>

---


To invoke the default behavior, call the **this.defaultSetCellValue(newData, value)** function.

