---
id: GridBaseColumn.headerFilter.dataSource
type: Array<any> | function(options) | DataSource_Options
default: undefined
---
---
##### shortDescription
Specifies the header filter's data source.

##### param(options): Object
Data source options.

##### field(options.component): Object
The widget's instance.

##### field(options.dataSource): DataSource_Options
A [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance.

---
The **{WidgetName}** generates a header filter's data source automatically based on column values. Use the **dataSource** option to change the generated data source or specify a custom data source.

### Specify a Custom Data Source

To define a data source, set the **dataSource** option to an array of objects. Each object configures one header filter item and should have the following fields:

 - `text`         
A text string that represents the item in the header filter.
 
 - `value`        
A filter that the item applies. It can be a single value (for example, 0) or a filter expression. Refer to the [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') help topic for information on the filter expression syntax.

The following code shows how to specify a custom data source:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: [{
                        text: "Zero",
                        value: 0
                    }, {
                        text: "Less than $3000",
                        value: ["SaleAmount", "<", 3000]
                    }, {
                        text: "More than $3000",
                        value: ["SaleAmount", ">", 3000]
                    }]
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column>
            <dxo-header-filter
                [dataSource]="headerFilterData">
            </dxo-header-filter>
        </dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        headerFilterData: any;
        constructor() {
            this.headerFilterData = [{
                text: "Zero",
                value: 0
            }, {
                text: "Less than $3000",
                value: ["SaleAmount", "<", 3000]
            }, {
                text: "More than $3000",
                value: ["SaleAmount", ">", 3000]
            }];
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxColumn>
                <DxHeaderFilter
                    :data-source="headerFilterData"
                />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Dx{WidgetName},
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxHeaderFilter
        },
        data() {
            return {
                headerFilterData: [{
                    text: 'Zero',
                    value: 0
                }, {
                    text: 'Less than $3000',
                    value: ['SaleAmount', '<', 3000]
                }, {
                    text: 'More than $3000',
                    value: ['SaleAmount', '>', 3000]
                }]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column, HeaderFilter } from 'devextreme-react/{widget-name}';

    const headerFilterData = [{
        text: 'Zero',
        value: 0
    }, {
        text: 'Less than $3000',
        value: ['SaleAmount', '<', 3000]
    }, {
        text: 'More than $3000',
        value: ['SaleAmount', '>', 3000]
    }];

    class App extends React.Component {
        render() {
            return (
                <{WidgetName}>
                    <Column>
                        <HeaderFilter
                            dataSource={headerFilterData}
                        />
                    </Column>
                </{WidgetName}>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/"
}

### Map Data Source Fields

Header filter data objects should have the `text` and `value` fields. However, data objects fetched from a server may not have these fields. In this case, map the original data source to the `text` + `value` structure. A mapped data source should also include key fields from the original data source.

[note] We recommend that you keep the [allowSearch](/api-reference/_hidden/GridBaseColumn/headerFilter/allowSearch.md '{basewidgetpath}/Configuration/columns/headerFilter/#allowSearch') option set to **false** because searching produces incorrect results when data source fields are mapped.

In the following code, the `categoryName` and `categoryId` fields are mapped to the `text` and `value` fields. The mapped objects also contain the `categoryId` and `categoryCode` key fields:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const categoriesStore = new DevExpress.data.ArrayStore({
            data: [
                { categoryName: "...", categoryId: 1, categoryCode: "..." },
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
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column>
            <dxo-header-filter
                [dataSource]="headerFilterData">
            </dxo-header-filter>
        </dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        headerFilterData: DataSource;
        constructor() {
            const categoriesStore = new ArrayStore({
                data: [
                    { categoryName: "...", categoryId: 1, categoryCode: "..." },
                    // ...
                ],
                key: ["categoryId", "categoryCode"]
            });

            this.headerFilterData = new DataSource({
                store: categoriesStore,
                map: (item) => {
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxColumn>
                <DxHeaderFilter
                    :data-source="headerFilterData"
                />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Dx{WidgetName},
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/{widget-name}';
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    const categoriesStore = new ArrayStore({
        data: [
            { categoryName: "...", categoryId: 1, categoryCode: "..." },
            // ...
        ],
        key: ["categoryId", "categoryCode"]
    });

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxHeaderFilter
        },
        data() {
            return {
                headerFilterData: new DataSource({
                    store: categoriesStore,
                    map: (item) => {
                        return {
                            text: item.categoryName,
                            value: item.categoryId,
                            categoryId: item.categoryId,
                            categoryCode: item.categoryCode
                        }
                    }
                })
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column, HeaderFilter } from 'devextreme-react/{widget-name}';
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    const categoriesStore = new ArrayStore({
        data: [
            { categoryName: "...", categoryId: 1, categoryCode: "..." },
            // ...
        ],
        key: ["categoryId", "categoryCode"]
    });

    const headerFilterData = new DataSource({
        store: categoriesStore,
        map: (item) => {
            return {
                text: item.categoryName,
                value: item.categoryId,
                categoryId: item.categoryId,
                categoryCode: item.categoryCode
            }
        }
    });

    class App extends React.Component {
        render() {
            return (
                <{WidgetName}>
                    <Column>
                        <HeaderFilter
                            dataSource={headerFilterData}
                        />
                    </Column>
                </{WidgetName}>
            );
        }
    }

    export default App;

---

### Change the Generated Data Source

To change the generated data source, set the **dataSource** option to a function. This function accepts an object whose `dataSource` field contains a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance. Define the **DataSource**'s [postProcess](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/postProcess.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess') function in which you can change header filter items.

In the following code, the **postProcess** function adds a custom item to the generated data source:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: function (options) {
                        options.dataSource.postProcess = function (results) {
                            results.push({
                                text: "Weekends",
                                value: [
                                    ['OrderDay', "=", 0],
                                        "or",
                                    ['OrderDay', "=", 6]
                                ]
                            });
                            return results;
                        }
                    }
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column>
            <dxo-header-filter
                [dataSource]="customizeHeaderFilterData">
            </dxo-header-filter>
        </dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customizeHeaderFilterData(options) {
            options.dataSource.postProcess = (results) => {
                results.push({
                    text: "Weekends",
                    value: [
                        ['OrderDay', "=", 0], 
                            "or", 
                        ['OrderDay', "=", 6]
                    ]
                });
                return results;
            }
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxColumn>
                <DxHeaderFilter
                    :data-source="customizeHeaderFilterData"
                />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Dx{WidgetName},
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxHeaderFilter
        },
        methods: {
            customizeHeaderFilterData(options) {
                options.dataSource.postProcess = (results) => {
                    results.push({
                        text: 'Weekends',
                        value: [
                            ['OrderDay', '=', 0],
                                'or',
                            ['OrderDay', '=', 6]
                        ]
                    });
                    return results;
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column, HeaderFilter } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName}>
                    <Column>
                        <HeaderFilter
                            dataSource={this.customizeHeaderFilterData}
                        />
                    </Column>
                </{WidgetName}>
            );
        }

        customizeHeaderFilterData(options) {
            options.dataSource.postProcess = function(results) {
                results.push({
                    text: 'Weekends',
                    value: [
                        ['OrderDay', '=', 0],
                            'or',
                        ['OrderDay', '=', 6]
                    ]
                });
                return results;
            };
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/"
}

### Customize Item Appearance

You can use [templates](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/') to customize the appearance of individual items. In the following code, a template makes the `Today` item bold:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const now = new Date();
        const startOfWeek = new Date(
            now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay() === 0 ? -6 : 1))
        );
        const startOfDay = new Date(now.setHours(0,0,0,0));
        const boldFont = (data) => {
            return "<b>" + data.text + "</b>";
        }

        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: [{
                        text: 'Today',
                        value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]],
                        template: boldFont
                    }, {
                        text: 'This week',
                        value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
                    }, {
                        text: 'Earlier',
                        value: ['OrderDate', '<', startOfWeek]
                    }]
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column>
            <dxo-header-filter
                [dataSource]="headerFilterData">
            </dxo-header-filter>
        </dxi-column>
        <div *dxTemplate="let data of 'boldFont'">
            <b>{{data.text}}</b>
        </div>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        headerFilterData: any;
        constructor() {
            const now = new Date();
            const startOfWeek = new Date(
                now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay() === 0 ? -6 : 1))
            );             
            const startOfDay = new Date(now.setHours(0,0,0,0));

            this.headerFilterData = [{
                text: 'Today',
                value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]],
                template: 'boldFont'
            }, {
                text: 'This week',
                value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
            }, {
                text: 'Earlier',
                value: ['OrderDate', '<', startOfWeek]
            }];
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxColumn>
                <DxHeaderFilter
                    :data-source="headerFilterData"
                />
            </DxColumn>
            <template #bold-font="{ data }">
                <b>{{data.text}}</b>
            </template>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Dx{WidgetName},
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/{widget-name}';

    const now = new Date();
    const startOfWeek = new Date(
        now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay() === 0 ? -6 : 1))
    );             
    const startOfDay = new Date(now.setHours(0,0,0,0));

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxHeaderFilter
        },
        data() {
            return {
                headerFilterData: [{
                    text: 'Today',
                    value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]],
                    template: 'bold-font'
                }, {
                    text: 'This week',
                    value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
                }, {
                    text: 'Earlier',
                    value: ['OrderDate', '<', startOfWeek]
                }]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column, HeaderFilter } from 'devextreme-react/{widget-name}';

    const now = new Date();
    const startOfWeek = new Date(
        now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay() === 0 ? -6 : 1))
    );
    const startOfDay = new Date(now.setHours(0, 0, 0, 0));

    const renderBoldText = (data) => <b>{data.text}</b>;

    const headerFilterData = [{
        text: 'Today',
        value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]],
        template: 'boldFont'
    }, {
        text: 'This week',
        value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
    }, {
        text: 'Earlier',
        value: ['OrderDate', '<', startOfWeek]
    }];

    class App extends React.Component {
        render() {
            return (
                <{WidgetName}>
                    <Column>
                        <HeaderFilter
                            dataSource={headerFilterData}
                        />
                    </Column>
                     <Template name="boldFont" render={renderBoldText} />
                </{WidgetName}>
            );
        }
    }

    export default App;

---
