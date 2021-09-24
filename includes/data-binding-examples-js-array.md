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

    #include angular-component-decorator
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
    #include angular-app-module-ts

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
