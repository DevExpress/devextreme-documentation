
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
        $("#{widgetName}Container").dx{WidgetName}({
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
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 },
            { fruit: 'Pears', count: 20 },
            { fruit: 'Pineapples', count: 3 }
        ];
        {widgetName}DataSource = new DataSource({
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
    <dx-{widget-name} [dataSource]="{widgetName}DataSource">
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-{widget-name}>

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
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 },
        { fruit: 'Pears', count: 20 },
        { fruit: 'Pineapples', count: 3 }
    ];

    const {widgetName}DataSource = new DataSource({
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
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 },
        { fruit: 'Pears', count: 20 },
        { fruit: 'Pineapples', count: 3 }
    ];

    const {widgetName}DataSource = new DataSource({
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
            <{WidgetName} dataSource={{widgetName}DataSource}>
                <Series argumentField="fruit" valueField="count" />
            </{WidgetName}>
        );
    }

---
