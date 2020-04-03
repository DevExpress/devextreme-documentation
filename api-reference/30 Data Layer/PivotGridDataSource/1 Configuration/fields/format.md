---
id: PivotGridDataSource.Options.fields.format
type: format
default: ''
---
---
##### shortDescription
Formats field values before they are displayed.

---
See the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section for details on accepted values.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                format: {
                    type: "largeNumber",
                    precision: 2
                },
                // ===== or a shorter version =====
                format: "largeNumber"
            }]
        });

        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });
    

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import { DxPivotGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    // ...
                    format: {
                        type: "largeNumber",
                        precision: 2
                    },
                    // ===== or a shorter version =====
                    format: "largeNumber"
                }]
            });
        }
    }

    @NgModule({
        imports: [
            // ...
            DxPivotGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid
            :data-source="pivotGridDataSource"
        />
    </template>
    
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-vue/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            // ...
            format: {
                type: 'largeNumber',
                precision: 2
            },
            // ===== or a shorter version =====
            format: 'largeNumber'
        }]
    });

    export default {
        components: {
            DxPivotGrid
        },
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-react/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            // ...
            format: {
                type: 'largeNumber',
                precision: 2
            },
            // ===== or a shorter version =====
            format: 'largeNumber'
        }]
    });

    class App extends React.Component {
        render() {
            return (
                <PivotGrid
                    dataSource={pivotGridDataSource}
                />
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            // ...
            .Fields(fields => {
                fields.Add()
                    // ...
                    .Format(f => f
                        .Type(Format.LargeNumber)
                        .Precision(2)
                    )
                    // ===== or a shorter version =====
                    .Format(Format.LargeNumber)
            })
        )
    )

---

Several restrictions apply to exporting formats. Not all of them have the matching Excel formats:

- **Numeric**   
Exported as the *"Number"* format, except for *"largeNumber"* that is exported as the <a href="https://support.office.com/en-us/article/available-number-formats-in-excel-0afe8f52-97db-41f1-b972-4b46e9f1e8d2" target="_blank">General</a> format
- **Currency**  
Exported as the *"Currency"* format
- **Date-Time**  
Exported as the *"Date"* or *"Time"* formats depending on the cell value, except for  the *"quarter"* and *"quarterAndYear"* types that are exported as *"shortDate"* and the *"minute"* and *"millisecond"* formats that are exported as *"longTime"*
- **Function**  
Cannot be converted, the cell value is exported without formatting 
- [Custom format string](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String)   
Cannot be converted, the cell value is exported without formatting 

To export unsupported formats, use the *"valueText"* parameter of the [customizeText](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText) callback to export a formatted string as follows:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                customizeText: function(e){
                    return e.valueText;
                },
                dataType: "number",
                format: (value) => {
                    return value + "$";
                }
            }, {
                // ...
            }]
        });

        $("#pivotGrid").dxPivotGrid({
            // ...
            export: {
                enabled: true
            },
            dataSource: pivotGridDataSource
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pivot-grid ... 
        [dataSource]="pivotGridDataSource">
        <dxo-export [enabled]="true"></dxo-export>
    </dx-pivot-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource {
                fields: [{
                    // ...
                    customizeText: function(e){
                        return e.valueText;
                    },
                    dataType: "number",
                    format: (value) => {
                        return value + "$";
                    }
                }, {
                    // ...
                }] 
            }
        }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import DxPivotGridModule from 'devextreme-angular';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPivotGridModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ...
            :data-source="PivotGridDataSource">
            <DxExport
                :enabled="true"
            />
        </DxPivotGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxPivotGrid, {
        DxExport
    } from 'devextreme-vue/{widget-name}';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            // ...
            customizeText: function(e){
                return e.valueText;
            },
            dataType: "number",
            format: (value) => {
                return value + "$";
            }
        }, {
            // ...
        }]
    });

    export default {
        components: {
            DxPivotGrid,
            DxExport
        },
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import PivotGrid, {
        Export
    } from 'devextreme-react/pivot-grid';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        fields: [{
            // ...
            customizeText: function(e){
                return e.valueText;
            },
            dataType: "number",
            format: (value) => {
                return value + "$";
            }
        }, {
            // ...
        }] 
    });

    class App extends React.Component {
        render() {
            return (
                <PivotGrid ...
                    dataSource={pivotGridDataSource}>
                    <Export enabled={true} />
                </PivotGrid>
            );
        }   
    }
    export default App;

---

#####See Also#####
- **fields[]**.[customizeText](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/customizeText.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText')