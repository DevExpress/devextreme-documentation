---
id: GridBaseColumn.headerFilter.dataSource
type: Array<any> | function(options) | DataSource_Options
default: undefined
---
---
##### shortDescription
Specifies a data source for the header filter.

##### param(options): Object
Data source options.

##### field(options.component): Object
The widget's instance.

##### field(options.dataSource): DataSource_Options
The header filter's data source.

---
This option accepts one of the following values:

- **Array of Objects**      
A simple JavaScript array containing a collection of plain objects. 

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                columns: [{
                    // ...
                    headerFilter: {
                        dataSource: [{
                            text: "Zero",    // A string to be displayed in the UI
                            value: 0         // A single value  
                        },{
                            text: "Less than $3000",
                            value: ["SaleAmount", "<", 3000]    // A filterExpression array
                        }, 
                        // ...
                        ]
                    }
                },
                // ...
                ]
            })
        });

    ##### Angular

        <!--TypeScript-->
        import { Dx{WidgetName}Module } from "devextreme-angular";
        // ...
        export class AppComponent {
            headerFilterData: any;
            constructor () {
                this.headerFilterData = [{
                    text: "Zero",    // A string to be displayed in the UI
                    value: 0         // A single value  
                },{
                    text: "Less than $3000",
                    value: ["SaleAmount", "<", 3000]    // A filterExpression array
                }, 
                // ...
                ];
            }
        }
        @NgModule({
            imports: [
                // ...
                Dx{WidgetName}Module
            ],
            // ...
        })

        <!--HTML--><dx-{widget-name} ...>
            <dxi-column>
                <dxo-header-filter [dataSource]="headerFilterData"></dxo-header-filter>
            </dxi-column>
        </dx-{widget-name}>

    ---

- [**DataSource Configuration Object**](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')         
A [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') configuration object. Learn more about the **DataSource** and the DevExtreme Data Layer concept from the [Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/') topic.

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            var now = new Date();
            var startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay()==0?-6:1)));             
            var startOfDay = new Date(now.setHours(0,0,0,0));
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                columns: [{
                    // ...
                    headerFilter: {
                        dataSource: {
                            load: function () {
                                return [{
                                    text: 'Today',
                                    value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]]
                                }, {
                                    text: 'This week',
                                    value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
                                }, {
                                    text: 'Earlier',
                                    value: ['OrderDate', '<', startOfWeek]
                                }];
                            }
                        }
                    }
                },
                // ...
                ]
            });
        });

    ##### Angular

        <!--TypeScript-->
        import { Dx{WidgetName}Module } from "devextreme-angular";
        import "devextreme/data/custom_store";
        // ...
        export class AppComponent {
            headerFilterData: any = {};
            constructor () {
                var now = new Date();
                var startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay()==0?-6:1)));             
                var startOfDay = new Date(now.setHours(0,0,0,0));
                this.headerFilterData = {
                    load: function () {
                        return [{
                            text: 'Today',
                            value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]]
                        }, {
                            text: 'This week',
                            value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
                        }, {
                            text: 'Earlier',
                            value: ['OrderDate', '<', startOfWeek]
                        }];
                    }
                };
            }
        }
        @NgModule({
            imports: [
                // ...
                Dx{WidgetName}Module
            ],
            // ...
        })

        <!--HTML--><dx-{widget-name} ...>
            <dxi-column>
                <dxo-header-filter [dataSource]="headerFilterData"></dxo-header-filter>
            </dxi-column>
        </dx-{widget-name}>

    ---

- **Function**      
A function in which you can modify the current data source configuration.

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                columns: [{
                    // ...
                    headerFilter: {
                        dataSource: function (data) {
                            data.dataSource.postProcess = function (results) {
                                results.push({
                                    text: "Weekends",
                                    value: [
                                        [getOrderDay, "=", 0],
                                            "or",
                                        [getOrderDay, "=", 6]
                                    ]
                                });
                                return results;
                            };
                        }
                    }
                },
                // ...
                ]
            })
        });

    #####Angular

        <!--TypeScript-->
        import { Dx{WidgetName}Module } from "devextreme-angular";
        import "devextreme/data/data_source";
        // ...
        export class AppComponent {
            headerFilterData: any;
            constructor () {
                this.headerFilterData = this.headerFilterData.bind(this);
            }
            headerFilterData(data) {
                data.dataSource.postProcess = (results) => {
                    results.push({
                        text: "Weekends",
                        value: [
                            [this.getOrderDay, "=", 0], 
                                "or", 
                            [this.getOrderDay, "=", 6]
                        ]
                    });
                    return results;
                };
            }
        }
        @NgModule({
            imports: [
                // ...
                Dx{WidgetName}Module
            ],
            // ...
        })

        <!--HTML--><dx-{widget-name} ...>
            <dxi-column>
                <dxo-header-filter [dataSource]="headerFilterData"></dxo-header-filter>
            </dxi-column>
        </dx-{widget-name}>

    ---

[note]Every unique value in a column should also be present in the data source for its header filter.

If your data source omits the **text** and **value** fields, you can cast it to the required structure using the **DataSource** object's [map](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map') function. If the initial data source contains key fields, the resulting data source should also contain them along with **text** and **value**.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        var categoriesStore = new DevExpress.data.ArrayStore({
            data: [
                { categoryName: "...", categoryId: "1", categoryCode: "..." },
                // ...
            ],
            key: ["categoryId", "categoryCode"]
        });

        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: new DevExpress.data.DataSource({
                        store: categoriesStore,
                        map: function (item) {
                            return {
                                text: item.categoryName,
                                value: item.categoryId,
                                categoryId: item.categoryId,
                                categoryCode: item.categoryCode
                            }
                        }
                    })
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    import ArrayStore from "devextreme/data/array_store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        headerFilterData: any = {};
        constructor () {
            let categoriesStore = new ArrayStore({
                data: [
                    { categoryName: "...", categoryId: "1", categoryCode: "..." },
                    // ...
                ],
                key: ["categoryId", "categoryCode"]
            });

            this.headerFilterData = new DataSource({
                store: categoriesStore,
                map: function (item) {
                    return {
                        text: item.categoryName,
                        value: item.categoryId,
                        categoryId: item.categoryId,
                        categoryCode: item.categoryCode
                    }
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML--><dx-{widget-name} ...>
        <dxi-column>
            <dxo-header-filter [dataSource]="headerFilterData"></dxo-header-filter>
        </dxi-column>
    </dx-{widget-name}>

---