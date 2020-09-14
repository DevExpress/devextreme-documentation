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

Date formats require additional configuration. The **PivotGridDataSource** groups date field values by date component: Year-Quarter-Month. For this, the values are converted from dates to numbers, but you cannot use date formats to format numbers. To apply a date format in this case, override this grouping.

The following code declares a custom group for the `ShippingDate` data field. This configuration overrides this field's default grouping. Field values are grouped by year and then by month. Months are formatted as `MMM` (`Jan`, `Feb`, `Mar`, etc.). This format is applied to the Date values the [selector](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/selector.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#selector') function returns.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                dataField: "ShippingDate",
                dataType: "date",
                area: "column",
                groupName: "dateGroup"
            }, {
                groupName: "dateGroup",
                groupIndex: 0,
                groupInterval: "year"
            }, {
                groupName: "dateGroup",
                groupIndex: 1,
                format: "MMM",
                selector: function(data) {
                    const year = new Date(data.date).getFullYear();
                    const month = new Date(data.date).getMonth();
                    return new Date(year, month);
                } 
            },
            // ...
            ]
        });

        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });

##### Angular

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
                // ...
                fields: [{
                    dataField: "ShippingDate",
                    dataType: "date",
                    area: "column",
                    groupName: "dateGroup"
                }, {
                    groupName: "dateGroup",
                    groupIndex: 0,
                    groupInterval: "year"
                }, {
                    groupName: "dateGroup",
                    groupIndex: 1,
                    format: "MMM",
                    selector: function(data) {
                        const year = new Date(data.date).getFullYear();
                        const month = new Date(data.date).getMonth();
                        return new Date(year, month);
                    } 
                },
                // ...
                ]
            });
        }
    }

    <!-- tab: app.component.html -->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

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
            dataField: "ShippingDate",
            dataType: "date",
            area: "column",
            groupName: "dateGroup"
        }, {
            groupName: "dateGroup",
            groupIndex: 0,
            groupInterval: "year"
        }, {
            groupName: "dateGroup",
            groupIndex: 1,
            format: "MMM",
            selector: function(data) {
                const year = new Date(data.date).getFullYear();
                const month = new Date(data.date).getMonth();
                return new Date(year, month);
            } 
        },
        // ...
        ]
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import PivotGrid from 'devextreme-react/pivot-grid';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            dataField: "ShippingDate",
            dataType: "date",
            area: "column",
            groupName: "dateGroup"
        }, {
            groupName: "dateGroup",
            groupIndex: 0,
            groupInterval: "year"
        }, {
            groupName: "dateGroup",
            groupIndex: 1,
            format: "MMM",
            selector: function(data) {
                const year = new Date(data.date).getFullYear();
                const month = new Date(data.date).getMonth();
                return new Date(year, month);
            } 
        },
        // ...
        ]
    });

    export default function App() {
        return (
            <PivotGrid
                dataSource={pivotGridDataSource}
            />
        );
    }

---

When a format is [exported to Excel](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/export/'), it is converted to an Excel format as follows:

- **Numeric**   
Converted to Number format, except for *"largeNumber"*, which is exported without formatting.

- **Currency**  
Converted to the Currency format.

- **Date-Time**  
Converted to the Date or Time format, depending on the cell value.        
Exceptions: *"quarter"* and *"quarterAndYear"* are exported as Short Date; *"minute"* and *"millisecond"* are exported as Long Time.

- **Function**  
Cannot be converted automatically. Assign this function to the [customizeText](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/customizeText.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText') option instead of the **format** option.  

- [Custom format string](/concepts/Common/Value%20Formatting/10%20Format%20Widget%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String')   
Cannot be converted, the cell value is exported without formatting. To export this format, return the formatted string from the [customizeText](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/customizeText.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText') callback as follows:    

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
                    format: "0.##"
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
                        format: "0.##"
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
                format: "0.##"
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
                format: "0.##"
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
