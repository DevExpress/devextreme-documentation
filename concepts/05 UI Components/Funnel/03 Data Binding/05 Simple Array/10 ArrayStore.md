If you want to extend the functionality of a JavaScript array, place it into an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). It provides an interface for loading and editing data, and allows you to handle data-related events.

---
##### jQuery

    <!-- tab: index.js -->
    const fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 },
        { fruit: 'Pears', count: 20 },
        { fruit: 'Pineapples', count: 3 }
    ];

    $(function() {
        $("#funnelContainer").dxFunnel({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'array',
                    data: fruits,
                    onLoaded: function () {
                        // Event handling commands go here
                    }
                },
                paginate: false
            }),
            argumentField: 'fruit',
            valueField: 'count'
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import DataSource from 'devextreme/data/data_source';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 },
            { fruit: 'Pears', count: 20 },
            { fruit: 'Pineapples', count: 3 }
        ];
        funnelDataSource = new DataSource({
            store: {
                type: 'array',
                data: this.fruits,
                onLoaded: function () {
                    // Event handling commands go here
                }
            },
            paginate: false
        });
    }

    <!-- tab: app.component.html -->
    <dx-funnel
        [dataSource]="funnelDataSource"
        argumentField="fruit"
        valueField="count">
    </dx-funnel>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFunnelModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFunnelModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
         <DxFunnel
            :data-source="funnelDataSource"
            argument-field="fruit"
            value-field="count"
        />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';
    import DataSource from 'devextreme/data/data_source';

    const fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 },
        { fruit: 'Pears', count: 20 },
        { fruit: 'Pineapples', count: 3 }
    ];

    const funnelDataSource = new DataSource({
        store: {
            type: 'array',
            data: fruits,
            onLoaded: function () {
                // Event handling commands go here
            }
        },
        paginate: false
    });

    export default {
        components: {
            DxFunnel
        },
        data() {
            return {
                funnelDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import Funnel from 'devextreme-react/funnel';
    import DataSource from 'devextreme/data/data_source';

    const fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 },
        { fruit: 'Pears', count: 20 },
        { fruit: 'Pineapples', count: 3 }
    ];

    const funnelDataSource = new DataSource({
        store: {
            type: 'array',
            data: fruits,
            onLoaded: function () {
                // Event handling commands go here
            }
        },
        paginate: false
    });

    export default function App() {
        return (
            <Funnel
                dataSource={funnelDataSource}
                argumentField="fruit"
                valueField="count"
            />
        );
    }

---

As you may notice, in the previous code, the **ArrayStore** is not declared explicilty. Instead, it is wrapped in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance. That is because the Funnel requires [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') to be off in order to prevent data from partitioning. Other than that, the **DataSource** provides wide data-processing capabilities. For example, it can [map](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation/1%20Item%20Mapping.md '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping') objects from the array that underlies the **ArrayStore**, as shown in the following code.

---
##### jQuery

    <!-- tab: index.js -->
    const fruits = [
        { apples: 10 },
        { oranges: 12 },
        { lemons: 15 },
        { pears: 20 },
        { pineapples: 3 }
    ];

    $(function() {
        $("#funnelContainer").dxFunnel({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'array',
                    data: fruits
                },
                map: function (item) {
                    const fruitName = Object.keys(item)[0];
                    return {
                        fruit: fruitName.charAt(0).toUpperCase() + fruitName.slice(1),
                        count: item[fruitName]
                    }
                },
                paginate: false
            }),
            argumentField: 'fruit',
            valueField: 'count'
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import DataSource from 'devextreme/data/data_source';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        fruits = [
            { apples: 10 },
            { oranges: 12 },
            { lemons: 15 },
            { pears: 20 },
            { pineapples: 3 }
        ];
        funnelDataSource = new DataSource({
            store: {
                type: 'array',
                data: this.fruits
            },
            map: function (item) {
                const fruitName = Object.keys(item)[0];
                return {
                    fruit: fruitName.charAt(0).toUpperCase() + fruitName.slice(1),
                    count: item[fruitName]
                }
            },
            paginate: false
        });
    }

    <!-- tab: app.component.html -->
    <dx-funnel
        [dataSource]="funnelDataSource"
        argumentField="fruit"
        valueField="count">
    </dx-funnel>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFunnelModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFunnelModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
         <DxFunnel
            :data-source="funnelDataSource"
            argument-field="fruit"
            value-field="count"
        />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';
    import DataSource from 'devextreme/data/data_source';

    const fruits = [
        { apples: 10 },
        { oranges: 12 },
        { lemons: 15 },
        { pears: 20 },
        { pineapples: 3 }
    ];

    const funnelDataSource = new DataSource({
        store: {
            type: 'array',
            data: fruits
        },
        map: function (item) {
            const fruitName = Object.keys(item)[0];
            return {
                fruit: fruitName.charAt(0).toUpperCase() + fruitName.slice(1),
                count: item[fruitName]
            }
        },
        paginate: false
    });

    export default {
        components: {
            DxFunnel
        },
        data() {
            return {
                funnelDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import Funnel from 'devextreme-react/funnel';
    import DataSource from 'devextreme/data/data_source';

    const fruits = [
        { apples: 10 },
        { oranges: 12 },
        { lemons: 15 },
        { pears: 20 },
        { pineapples: 3 }
    ];

    const funnelDataSource = new DataSource({
        store: {
            type: 'array',
            data: fruits
        },
        map: function (item) {
            const fruitName = Object.keys(item)[0];
            return {
                fruit: fruitName.charAt(0).toUpperCase() + fruitName.slice(1),
                count: item[fruitName]
            }
        },
        paginate: false
    });

    export default function App() {
        return (
            <Funnel
                dataSource={funnelDataSource}
                argumentField="fruit"
                valueField="count"
            />
        );
    }

---

[note]Even if you have [passed a JavaScript array](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/') to the **dataSource** property, the Funnel automatically places it into an **ArrayStore** wrapped into the **DataSource** that you can get with the [getDataSource()](/api-reference/10%20UI%20Components/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Components/dxFunnel/Methods/#getDataSource') method.

#####See Also#####
- [DataSource Examples - In-memory Data](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#In-memory_Data')
- [Update Data in the Funnel](/concepts/70%20Data%20Binding/03%20Update%20Data '/Documentation/Guide/Data_Binding/Update_Data/')
