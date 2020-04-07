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

When being [exported to Excel](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/export/), the specified format is converted to an Excel format as follows:

- **Numeric**   
Converted to the *"Number"* format, except for *"largeNumber"*, which is exported without formatting.
- **Currency**  
Converted the *"Currency"* format.
- **Date-Time**  
Converted to the *"Date"* or *"Time"* formats depending on the cell value, except for the *"quarter"* and *"quarterAndYear"* types that are exported as *"short date"* and the *"minute"* and *"millisecond"* formats that are exported as *"long time"*.
- **Function**  
Cannot be converted, the cell value is exported without formatting.
- [Custom format string](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String)   
Cannot be converted, the cell value is exported without formatting. 

To convert unsupported formats, return the formatted string from the [customizeText](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText) callback as follows:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                customizeText: (e) => {
                    return e.valueText;
                },
                dataType: "number",
                format: (value) => {
                    return value + " USD";
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
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                fields: [{
                    // ...
                    customizeText: (e) => {
                        return e.valueText;
                    },
                    dataType: "number",
                    format: (value) => {
                        return value + " USD";
                    }
                }, {
                    // ...
                }] 
            });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxPivotGridModule } from 'devextreme-angular';

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
    } from 'devextreme-vue/pivot-grid';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            // ...
            customizeText: (e) => {
                return e.valueText;
            },
            dataType: "number",
            format: (value) => {
                return value + " USD";
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

    const pivotGridDataSource = new PivotGridDataSource({
        fields: [{
            // ...
            customizeText: (e) => {
                return e.valueText;
            },
            dataType: "number",
            format: (value) => {
                return value + " USD";
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
