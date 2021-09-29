To bind the Funnel to an array, pass this array to the [dataSource](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#dataSource') property. The array should contain objects.

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
            dataSource: fruits,
            argumentField: 'fruit',
            valueField: 'count'
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-funnel
        [dataSource]="fruits"
        argumentField="fruit"
        valueField="count">
    </dx-funnel>

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
            :data-source="fruits"
            argument-field="fruit"
            value-field="count"
        />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
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
    import Funnel from 'devextreme-react/funnel';

    const fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 },
        { fruit: 'Pears', count: 20 },
        { fruit: 'Pineapples', count: 3 }
    ];

    export default function App() {
        return (
            <Funnel
                dataSource={fruits}
                argumentField="fruit"
                valueField="count"
            />
        );
    }

---

#####See Also#####
- [Update Data in the Funnel](/concepts/70%20Data%20Binding/03%20Update%20Data '/Documentation/Guide/Data_Binding/Update_Data/')