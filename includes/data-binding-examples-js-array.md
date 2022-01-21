
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
            dataSource: fruits,
            series: {
                argumentField: 'fruit',
                valueField: 'count'
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} [dataSource]="fruits">
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

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
        <Dx{WidgetName} :data-source="fruits">
            <DxSeries argument-field="fruit" value-field="count" />
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName}, {
        DxSeries
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxSeries
        },
        data() {
            return {
                fruits: [
                    { fruit: 'Apples', count: 10 },
                    { fruit: 'Oranges', count: 12 },
                    { fruit: 'Lemons', count: 15 },
                    { fruit: 'Pears', count: 20 },
                    { fruit: 'Pineapples', count: 3 }
                ]
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import {WidgetName}, {
        Series
    } from 'devextreme-react/{widget-name}';

    const fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 },
        { fruit: 'Pears', count: 20 },
        { fruit: 'Pineapples', count: 3 }
    ];

    export default function App() {
        return (
            <{WidgetName} dataSource={fruits}>
                <Series argumentField="fruit" valueField="count" />
            </{WidgetName}>
        );
    }

---
