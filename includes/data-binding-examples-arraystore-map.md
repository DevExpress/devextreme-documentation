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
        $("#{widgetName}Container").dx{WidgetName}({
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
            series: {
                argumentField: 'fruit',
                valueField: 'count'
            }
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
        {widgetName}DataSource = new DataSource({
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
    <dx-{widget-name} [dataSource]="{widgetName}DataSource">
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
         <Dx{WidgetName} :data-source="{widgetName}DataSource">
            <DxSeries argument-field="fruit" value-field="count" />
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName}, {
        DxSeries
    } from 'devextreme-vue/{widget-name}';
    import DataSource from 'devextreme/data/data_source';

    const fruits = [
        { apples: 10 },
        { oranges: 12 },
        { lemons: 15 },
        { pears: 20 },
        { pineapples: 3 }
    ];

    const {widgetName}DataSource = new DataSource({
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
            Dx{WidgetName},
            DxSeries
        },
        data() {
            return {
                {widgetName}DataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import {WidgetName}, {
        Series
    } from 'devextreme-react/{widget-name}';
    import DataSource from 'devextreme/data/data_source';

    const fruits = [
        { apples: 10 },
        { oranges: 12 },
        { lemons: 15 },
        { pears: 20 },
        { pineapples: 3 }
    ];

    const {widgetName}DataSource = new DataSource({
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
            <{WidgetName} dataSource={{widgetName}DataSource}>
                <Series argumentField="fruit" valueField="count" />
            </{WidgetName}>
        );
    }

---
